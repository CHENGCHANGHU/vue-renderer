import { VNode, defineComponent, h } from "vue";
import { SymbolRenderer, getComponent, uid } from "./base";

export default defineComponent({
  props: {
    options: {},
  },
  setup(props: any, context: any) {
    const { options } = props;
    const rendererContext = {};
    context.expose({
      rendererContext,
    });
    return () => getVNode(options, { rendererContext });
  },
});

function getVNode(options: any, { rendererContext }: any) {
  if (typeof options === 'string') {
    return options;
  }

  const { type, props, slots, [SymbolRenderer]: parasite } = options;

  if (parasite?.hollow) {
    return (slots?.default || []).map((_options: any) => getVNode(_options, { rendererContext }));
  }

  const vnodeUid = uid();
  const vnode =  h(
    getComponent(type) || type || 'div',
    {
      'data-uid': vnodeUid,
      'data-role': 'renderer-box',
      ...(props || {}),
    },
    Object.entries(slots || {})
      .reduce((_slots: any, [name, slotOptions]: [string, any[]]) => {
        _slots[name] = (scopeProps: any) => slotOptions.map(_slotOptions => {
          if (typeof _slotOptions === 'string') return _slotOptions;
          const { props } = _slotOptions;
          _slotOptions.props = {
            ...(props || {}),
            ...scopeProps,
          };
          return _slotOptions;
        }).map(_options => getVNode(_options, { rendererContext }));
        return _slots;
      }, {})
  );

  if (!rendererContext.vnodeMap) {
    rendererContext.vnodeMap = new Map<string, VNode>();
  }
  rendererContext.vnodeMap.set(vnodeUid, vnode);

  return vnode;
}
