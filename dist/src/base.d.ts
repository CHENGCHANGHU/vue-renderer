import { VueElementConstructor } from 'vue';
export declare const SymbolRenderer: unique symbol;
export declare const ComponentPool: Map<string, VueElementConstructor>;
export declare function registerComponent(type: string, component: VueElementConstructor): void;
export declare function getComponent(type: string): VueElementConstructor;
export declare function uid(): string;
