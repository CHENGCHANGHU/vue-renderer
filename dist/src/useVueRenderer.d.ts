import { VueElementConstructor, VNode } from 'vue';
export declare function useVueRenderer(): {
    Renderer: import("vue").DefineComponent<{
        options: {};
    }, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        options: {};
    }>>, {}, {}>;
    rendererNodeMap: Map<string, VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    registerComponent: (type: string, component: VueElementConstructor) => void;
    getComponent: (type: string) => VueElementConstructor;
};
