'use strict';

(function(module){

    const html = module.html;
    let StoreList = module.StoreList;
    let StoreForm = module.StoreForm;
    
    const data = [
        {
            name: 'Store 1',
            minCustomersPerHour: 3,
            maxCustomersPerHour: 10,
            averageCookiesSoldPerHour: 3.7,
            cookiesPerHour: [],
            totalsCookiesSold: 0
        },
        {
            name: 'Store 2',
            minCustomersPerHour: 5,
            maxCustomersPerHour: 36,
            averageCookiesSoldPerHour: 2.4,
            cookiesPerHour: [],
            totalsCookiesSold: 0
        }
    ];
    
    const template = () => {
        return html`
        <h1>Hello World</h1>
        <main></main>
        `;
    };
    
    class App {
        render() {
            const dom = template();
            const main = dom.querySelector('main');

            const storeList = new StoreList({
                stores: data
            });

            const storeForm = new StoreForm({
                onAdd: (store) => {
                    const newStores = [...data, store];
                    console.log(newStores);

                    storeList.update({
                        stores: newStores
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