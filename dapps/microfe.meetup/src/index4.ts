import Vue from 'Vue';
import { loading, dapp } from '@evan.network/ui-dapp-browser';

import TestComponent from './test.component.vue';

export async function startDApp(container: Element): Promise<void> {
  const newEl = document.createElement('div');
  newEl.id = 'testtwi';
  container.appendChild(newEl);

  const vueTest = new Vue({
    el: '#testtwi',
    render: (render: Function) => render(TestComponent),
  });

  const easterEggEl = document.createElement('div');
  container.appendChild(easterEggEl);
  await dapp.startDApp('easteregg.evan', easterEggEl);

  loading.finishDAppLoading();
}
