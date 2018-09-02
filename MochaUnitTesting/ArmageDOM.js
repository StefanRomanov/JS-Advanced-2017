let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
}
describe(`nuke`,function() {
    let htmlSelector;
    let oldHTML;
    beforeEach(function () {
        document.body.innerHTML = `<body>
                                <div id="target">
                                    <div class="nested target">
                                        <p>This is some text</p>
                                    </div>
                                    <div class="target">
                                        <p>Empty div</p>
                                    </div>
                                    <div class="inside">
                                        <span class="nested">Some more text</span>
                                        <span class="target">Some more text</span>
                                    </div>
                                </div>
                            </body>`;

        htmlSelector = $(`#target`);
        oldHTML = htmlSelector.html();
    });
    it(`selectors are equal`, function(){
        let selector = $('.inside');
        nuke(selector,selector);
        expect(htmlSelector.html()).to.be.equal(oldHTML);
    });
    it(`first is missing`, function(){
        nuke($('.inside'));
        expect(htmlSelector.html()).to.be.equal(oldHTML);
    });
    it(`first invalid`, function(){
        let selector1 = 3;
        let selector2 = $('.inside');
        nuke(selector1,selector2);
        expect(htmlSelector.html()).to.be.equal(oldHTML);
    });

    it('bla', function(){
        let selector1 = $('.target');
        let selector2 = $('.nested');
        nuke(selector1, selector2);
        expect(htmlSelector.html()).to.not.be.equal(oldHTML);
    });
    it(`works properly`,function(){
        let selector1 = $('.target');
        let selector2 = $('.inside');
        nuke(selector1,selector2);
        expect(htmlSelector.html()).to.be.equal(oldHTML);
    });
});

