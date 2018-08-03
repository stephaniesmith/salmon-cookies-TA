'use strict';

(function(module){

    const html = module.html;

    let template = store => {
        return html`
            <tr>
                <td>${store.name}</td>
            </tr>
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