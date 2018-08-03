'use strict';

(function(module) {
    const App = module.App;
    const root = document.getElementById('root');

    const app = new App();
    const dom = app.render();
    root.appendChild(dom);

})(window.module = window.module || {});