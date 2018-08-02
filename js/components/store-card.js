'use strict';

(function(module){

    const html = module.html;

    let template = store => {
        return html`
            <h2>${store.name}</h2>
        `;
    };


    class StoreCard {
        constructor(props) {
            this.store = props.store;
        }

        render() {
            const dom = template(this.store);
            return dom;
        }

    }

    module.StoreCard = StoreCard;

})(window.module = window.module || {});