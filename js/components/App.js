'use strict';

(function(module){

    const html = module.html;
    let StoreList = module.StoreList;
    
    const data = [
        {
            name: 'Store 1'
        },
        {
            name: 'Store 2'
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

            main.appendChild(storeList.render());

            return dom;
        }
    }

    module.App = App;

}(window.module = window.module || {}));