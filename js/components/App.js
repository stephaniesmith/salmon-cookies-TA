'use strict';

(function(module){

    const html = module.html;
    const StoreList = module.StoreList;
    const StoreForm = module.StoreForm;
    const storeApi = module.storeApi;
    
    const template = () => {
        return html`
        <h1>Pat's Salmon Cookies</h1>
        <main></main>
        `;
    };
    
    class App {
        render() {
            const dom = template();
            const main = dom.querySelector('main');

            const stores = storeApi.get();
            console.log(stores);
            const storeList = new StoreList({
                stores: stores
            });

            const storeForm = new StoreForm({
                onAdd: (store) => {
                    storeApi.add(store);
                    storeList.update({
                        stores: stores
                    });
                }
            });

            main.appendChild(storeForm.render());
            main.appendChild(storeList.render());

            return dom;
        }
    }

    module.App = App;

}(window.module = window.module || {}));