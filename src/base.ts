import { VueElementConstructor } from 'vue';
import { gene } from '@golden-tiger/regexp-gene';

export const SymbolRenderer = Symbol('renderer');

export function uid(): string {
  return 'r' + Date.now() + '_' + gene(/[0-9a-zA-Z]{10}/);
}
