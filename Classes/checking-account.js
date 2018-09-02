class CheckingAccount{
    constructor(id,email,firstName, lastName){
        this.clientId = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId(){
        return this._clientId;
    }

    set clientId(value){
        let idPattern = /^\d{6}$/g;
        if(!idPattern.test(value)){
            throw TypeError("Client ID must be a 6-digit number");
        }

        this._clientId = value;
    }

    get email(){
        return this._email;
    }

    set email(value){
        let emailPattern = /[a-zA-Z0-9]+@[a-zA-Z.]+/g;
        if(!emailPattern.test(value)){
            throw TypeError("Invalid e-mail");
        }
        this._email = value;
    }

    get firstName(){
        return this._firstName;
    }

    set firstName(value){
        let firstNamePattern =  /^[A-Za-z]{3,20}$/g;
        if(value.length > 20 || value.length < 3){
            throw TypeError("First name must be between 3 and 20 characters long");
        } else if (!firstNamePattern.test(value)){
            throw TypeError("First name must contain only Latin characters")
        }

        this._firstName = value;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(value){
        let firstNamePattern =  /^[A-Za-z]{3,20}$/g;
        if(value.length > 20 || value.length < 3){
            throw TypeError("Last name must be between 3 and 20 characters long");
        } else if (!firstNamePattern.test(value)){
            throw TypeError("Last name must contain only Latin characters")
        }

        this._lastName = value;
    }
}

let acc = new CheckingAccount('423413333345', 'petkan@another.co.uk', 'Petkan', 'Draganov')