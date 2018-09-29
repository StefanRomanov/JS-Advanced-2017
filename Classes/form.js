let result = (function(){
    class Textbox{
        constructor(selector,regex){
            this.selector = selector;
            this._elements = $(this.selector);
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
            for(let element of this.elements){
                $(element).val(text);
            }
        }

        isValid() {
            return !this._invalidSymbols.test(this.value);
        }
    }

    class Form{
        constructor(...textboxes){
            this._element = $(`<div class="form">`);
            if(textboxes.some(t => !(t instanceof Textbox))){
                throw  Error('whatevs');
            } else {
                for(let textbox of textboxes){
                    this._element.append($(textbox.selector));
                }
                this._textboxes = textboxes;
            }
        }

        submit(){
            return validateTextboxes();
        }

	validateTextboxes(){
	   let allValid = true;
            for(let textbox of this._textboxes){
                if(textbox.isValid() === true){
                    $(textbox.selector).css('border', '2px solid green')
                } else {
                    $(textbox.selector).css('border', '2px solid red');
                    allValid = false;
                }
            }
	}

        attach(selector){
            $(this._element).appendTo($(selector));
        }
    }


    return {
        Textbox: Textbox,
        Form: Form
    };
})();

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username",/[^a-zA-Z0-9]/);
let password = new Textbox("#password",/[^a-zA-Z]/);
username.value = "username";
password.value = "password3";
let form = new Form(username,password);
form.attach("#root");
