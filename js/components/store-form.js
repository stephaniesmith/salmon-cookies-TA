'use strict';

(function(module){

    const html = module.html;

    const template = () => {
        return html`
            <form>
                <input placeholder="name" required/>
                <input type="number" placeholder="min" required/>
                <input type="number" placeholder="max" required/>
                <input type="number" placeholder="average" required/>
                <button>Add Store</button>
            </form>
        `;
    };

    class StoreForm {
        constructor(props) {
            this.onAdd = props.onAdd;
        }

        render() {
            const dom = template();
            const form = dom.querySelector('form');

            form.addEventListener('submit', (event) => {
                event.preventDefault();

                const inputs = event.target.querySelectorAll('input');

                const data = [];

                for(let i = 0; i < inputs.length; i++) {
                    const store = inputs[i].value;
                    data.push(store);
                }

                console.log(data);

                this.store = {
                    name: data[0],
                    min: data[1],
                    max: data[2],
                    averageCookiesSoldPerHour: data[3],
                    cookiesPerHour: []
                };

                console.log(this.store);
                // this.store = inputs.map(input => input.value);

                this.onAdd(this.store);
            });

            return dom;
        }
    }

    module.StoreForm = StoreForm;

})(window.module = window.module || {});