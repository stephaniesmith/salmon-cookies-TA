'use strict';

(function(module){

    const toDOM = html => {
        
        const template = document.createElement('template');
        template.innerHTML = html;
		
        return template.content;
    };
	
    const html = (strings, ...values) => {
        let htmlString = String.raw(strings, ...values);
        return toDOM(htmlString);
    };

    module.html = html;

})(window.module = window.module || {});