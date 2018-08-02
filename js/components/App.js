'use strict';

(function(module){

    let html = module.html;

    let template = () => {
        return html`
            <h1>Hello World</h1>
        `;
    };

    class App {
        render() {
            let dom = template();
            return dom;
        }
    }

    module.App = App;

}(window.module = window.module || {}));