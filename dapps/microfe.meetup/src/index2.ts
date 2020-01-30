import { loading } from '@evan.network/ui-dapp-browser';

export async function startDApp(container: Element): Promise<void> {
  const newEl = document.createElement('div');
  newEl.id = 'sampletwi';
  newEl.innerHTML = `
    <div class="evan theme-evan evan-vue-dapp">
      <div
        class="bg-danger text-center"
        style="height: 500px; width: 500px;"
      >
        my nice dapp!
      </div>
    </div>
  `;
  container.appendChild(newEl);

  loading.finishDAppLoading();
}
