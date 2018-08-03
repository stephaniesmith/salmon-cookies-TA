'use strict';

(function(module){

    const html = module.html;
    const StoreCard = module.StoreCard;

    const template = () => {
        return html`
            <table>
                <thead>
                    <tr>
                        <td class="name">Stores</td>
                        <td>7 am</td>
                        <td>8 am</td>
                        <td>9 am</td>
                        <td>10 am</td>
                        <td>11 am</td>
                        <td>12 am</td>
                        <td>1 pm</td>
                        <td>2 pm</td>
                        <td>3 pm</td>
                        <td>4 pm</td>
                        <td>5 pm</td>
                        <td>6 pm</td>
                        <td>7 pm</td>
                        <td>Daily Totals</td>
                    </tr>
                </thead>
                <tbody>
                </tbody>
                <tfoot>
                </tfoot>
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
            this.tfoot.children[0].remove();

            for(let i = 0; i < lastStores.length; i++) {
                const index = stores.indexOf(lastStores[i]);
                if(index > -1) continue;
                this.table.children[i].remove();
            }

            for(let i = 0; i < stores.length; i++) {
                const store = stores[i];
                if(lastStores.includes(store)) continue;
                this.renderStore(store, 'tbody');
                this.calcTotals(store);
            }

            this.renderStore(this.hourlyTotals, 'tfoot');

            this.lastStores = stores.slice();
        }

        renderStore(store, element) {
            const storeCard = new StoreCard({
                store: store
            });

            this[element].appendChild(storeCard.render());
        }

        updateCount(count) {
            this.countSpan.textContent = count;
        }

        calcTotals(store) {
            const { cookiesPerHour } = this.hourlyTotals;
            store.cookiesPerHour.forEach((cookies, index) => {
                cookiesPerHour[index] += cookies;
            });
            this.hourlyTotals.totalCookiesSold = cookiesPerHour.reduce((acum, sum) => acum + sum);
        }

        render() {
            const stores = this.stores;
            let dom = template();
            this.tbody = dom.querySelector('tbody');
            this.tfoot = dom.querySelector('tfoot');

            this.hourlyTotals = {
                name: 'Hourly Totals',
                cookiesPerHour: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            };


            stores.forEach(store => {
                this.renderStore(store, 'tbody');
                this.calcTotals(store);
            });

            this.renderStore(this.hourlyTotals, 'tfoot');

            return dom;
        }
    }

    module.StoreList = StoreList;

})(window.module = window.module || {});