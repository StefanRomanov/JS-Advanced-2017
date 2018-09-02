function wikiParser() {
    "use strict";
    let text = $(`#wiki`).text();

    let boldPattern = /'''(.+?)'''/g;
    let itPattern = /''(.+?)''/g;
    let headerOnePattern = /=(.+?)=/g;
    let headerTwoPattern = /==(.+?)==/g;
    let headerThreePattern = /===(.+?)===/g;
    let linkPattern = /\[\[(.+?)]]/g;
    let secondLinkPattern = /\[\[(.+?)|(.+?)]]/g;

    $(`#wiki`).html(text.replace(/'''([^'=\[]*?)'''/g, `<b>$1</b>`)
                        .replace(/''([^'=\[]*?)''/g, `<i>$1</i>`)
                        .replace(/===([^'=\[]*?)===/g, `<h3>$1</h3>`)
                        .replace(/==([^'=\[]*?)==/g, `<h2>$1</h2>`)
                        .replace(/=([^'=\[]*?)=/g, `<h1>$1</h1>`)
                        .replace(/\[\[([^'=\[\|]*?)]]/g, `<a href="/wiki/$1">$1</a>`)
                        .replace(/(\[\[([^'=\[]*?)\|([^'=\[]*)]])/g, `<a href="/wiki/$2">$3</a>`));

}
