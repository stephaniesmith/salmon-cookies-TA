'use strict';

(function(module){

    const html = module.html;
    let StoreList = module.StoreList;

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
                name: 'THIS IS MY STORE NAME!!!!'
            });

            main.appendChild(storeList.render());

            return dom;
        }
    }

    module.App = App;

}(window.module = window.module || {}));