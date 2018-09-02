class TitleBar{
    constructor(title){
        this._html = $(`<header class="header">
                            <div class="header-row">
                                <a class="button">&#9776;</a>
                                <span class="title">${title}</span>
                            </div>
                            <div class="drawer">
                            </div>
                        </header>`)
        this._linkMenu = $(`<nav class="menu">`)
    }

    addLink(href, name){
        let newLink = $(`<a class="menu-link" href="${href}">${name}</a>`);
        this._linkMenu.append(newLink);
    }

    appendTo(selector){
        $(selector).prepend(this._html);
        $('.drawer').append(this._linkMenu);
        $('.header-row .button').on('click',function () {
           let element = $('.drawer');
           if(element.css('display') === 'none'){
               element.css('display',"block");
           } else {
               element.css('display',"none");
           }
        });
    }
}
