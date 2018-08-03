'use strict';

(function(module){

    const html = module.html;
    const StoreCard = module.StoreCard;

    const template = () => {
        return html`
            <table>
                <tr>
                    <td>Stores</td>
                    <td>7:00 am</td>
                    <td>8:00 am</td>
                    <td>9:00 am</td>
                    <td>10:00 am</td>
                    <td>11:00 am</td>
                    <td>12:00 am</td>
                    <td>1:00 pm</td>
                    <td>2:00 pm</td>
                    <td>3:00 pm</td>
                    <td>4:00 pm</td>
                    <td>5:00 pm</td>
                    <td>6:00 pm</td>
                    <td>7:00 pm</td>
                </tr>

            </table>
        `;
    };

    
    class StoreList {
        constructor(props) {
            this.stores = props.stores;
            this.lastStores = this.stores.slice();
            // this.onRemove = props.onRemove;
        }

        update(props) {
            const stores = props.stores;
            const lastStores = this.lastStores;

            for(let i = 0; i < lastStores.length; i++) {
                const index = stores.indexOf(lastStores[i]);
                if(index > -1) continue;
                this.table.children[i].remove();
            }

            for(let i = 0; i < stores.length; i++) {
                const store = stores[i];
                if(lastStores.includes(store)) continue;
                this.renderStore(store);
            }

            this.lastStores = stores.slice();
        }

        renderStore(store) {
            const storeCard = new StoreCard({
                store: store
            });

            this.table.appendChild(storeCard.render());
        }

        updateCount(count) {
            this.countSpan.textContent = count;
        }

        render() {
            const stores = this.stores;
            let dom = template();
            this.table = dom.querySelector('table');

            for(let i = 0; i < stores.length; i++) {
                this.renderStore(stores[i]);
            }

            return dom;
        }
    }

    module.StoreList = StoreList;

})(window.module = window.module || {});