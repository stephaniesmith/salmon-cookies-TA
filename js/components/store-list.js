'use strict';

(function(module){

    const html = module.html;
    const StoreCard = module.StoreCard;

    const template = () => {
        return html`
            <section>
                <p>ALL THE STORE LISTS!!!</p>
            </section>
        `;
    };

    
    class StoreList {
        constructor(props) {
            this.name = props.name;
        }
        renderStore(store) {
            const storeCard = new StoreCard({
                store: store
            });
            this.section.appendChild(storeCard.render());
        }

        render() {
            const name = this.name;
            let dom = template();
            this.section = dom.querySelector('section');

            this.section.appendChild(name);

            return dom;
        }
    }

    module.StoreList = StoreList;

})(window.module = window.module || {});