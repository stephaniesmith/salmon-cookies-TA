'use strict';

(function(module) {

    let stores;

    const hourlyCookieSales = store => {
        const { min, max, averageCookiesSoldPerHour, cookiesPerHour } = store;

        for(let i = 0; i < 13; i++) {
            const customersPerHour = Math.random() * (max - min) + min;
            const cookieSales = Math.floor(customersPerHour * averageCookiesSoldPerHour);
    
            cookiesPerHour.push(cookieSales);
        }
    };

    const cookiesSoldPerStore = store => {
        const { cookiesPerHour } = store;
        store.totalCookiesSold = cookiesPerHour.reduce((acum, sum) => acum + sum);
    };

    const createStores = () => {
        stores = [
            {
                name: 'Pike Place Market',
                min: 23,
                max: 65,
                averageCookiesSoldPerHour: 6.3,
                cookiesPerHour: []
            },
            {
                name: 'SeaTac Airport',
                min: 3,
                max: 24,
                averageCookiesSoldPerHour: 1.2,
                cookiesPerHour: []
            },
            {
                name: 'Seattle Center',
                min: 11,
                max: 38,
                averageCookiesSoldPerHour: 3.7,
                cookiesPerHour: []
            },
            {
                name: 'Capitol Hill',
                min: 20,
                max: 38,
                averageCookiesSoldPerHour: 2.3,
                cookiesPerHour: []
            },
            {
                name: 'Alki',
                min: 2,
                max: 16,
                averageCookiesSoldPerHour: 4.6,
                cookiesPerHour: []
            }
        ];

        stores.forEach(store => {
            hourlyCookieSales(store);
            cookiesSoldPerStore(store);
        });
    };

    let json = window.localStorage.getItem('stores');
    json && json !== 'undefined' ? stores = JSON.parse(json) : createStores();

    window.resetStores = createStores;

    window.addEventListener('beforeunload', () => {
        window.localStorage.setItem('fruits', JSON.stringify(stores));
    });

    const storeApi = {
        get: () => stores,
        add: (store) => {
            hourlyCookieSales(store);
            cookiesSoldPerStore(store);
            stores.push(store);
        },
        remove: (storeToRemove) => {
            stores.forEach((store, index) => {
                store === storeToRemove ? stores.splice(index, 1) : console.log('not the store you are looking for');
            });
        }
    };

    module.storeApi = storeApi;

})(window.module = window.module || {});