import { VueElementConstructor } from 'vue';
import { gene } from '@golden-tiger/regexp-gene';

export const SymbolRenderer = Symbol('renderer');

export const ComponentPool = new Map<string, VueElementConstructor>();

export function registerComponent(type: string, component: VueElementConstructor) {
  ComponentPool.set(type, component);
}

export function getComponent(type: string): VueElementConstructor {
  return ComponentPool.get(type);
}

export function uid(): string {
  return 'r' + Date.now() + '_' + gene(/[0-9a-zA-Z]{10}/);
}
