import { loading } from '@evan.network/ui-dapp-browser';
import './test.scss';

export async function startDApp(container: Element, dbcpName: string, dappEnsOrContract: string, dappBaseUrl: string): Promise<void> {
  console.log(container);
  console.log(dbcpName);
  console.log(dappEnsOrContract);
  console.log(dappBaseUrl);

  const newEl = document.createElement('div');
  newEl.innerHTML = `
    <div id="twitest">
      my nice dapp!
    </div>
  `;
  container.appendChild(newEl);
  loading.finishDAppLoading();
}
