import { VueElementConstructor, VNode, defineComponent, h } from 'vue';
import { SymbolRenderer, uid } from "./base";

export function useVueRenderer() {
  const ComponentPool = new Map<string, VueElementConstructor>();
  const rendererNodeMap = new Map<string, VNode>();

  function registerComponent(type: string, component: VueElementConstructor) {
    ComponentPool.set(type, component);
  }
  
  function getComponent(type: string): VueElementConstructor {
    return ComponentPool.get(type);
  }

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
  
    rendererNodeMap.set(vnodeUid, vnode);
  
    return vnode;
  }

  const Renderer = defineComponent({
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

  return {
    Renderer,
    rendererNodeMap,
    registerComponent,
    getComponent,
  };
}
