class Textbox{
    constructor(selector,regex){
        this._elements = $(selector);
        this.value = $(this._elements[0]).val();
        this._invalidSymbols = regex;
        this.onInput();
    }

    onInput(){
        this.elements.on('input', (event) =>{
            this.value = $(event.target).val();
        });
    }

    get elements(){
        return this._elements;
    }

    get value(){
        return this._value;
    }

    set value(text){
        this._value = text;
	setTextOfElements(text)
    }
	
    setTextOfElements(text){
	for(let element of this.elements){
            $(element).val(text);
        }
    }

    isValid() {
        return !this._invalidSymbols.test(this.value);

    }
}

let tb = new Textbox('.vafla',/./g);