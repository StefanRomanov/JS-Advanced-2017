class Stringer{

    constructor(string,length){
        this.innerString = string;
        this.innerLength = length;
    }

    get innerLength() {
        return this._innerLength;
    }

    set innerLength(value){
        if(value < 0){
            value = 0;
        }

        this._innerLength = value;
    }

    increase(length){
        this.innerLength = this.innerLength + length;
    }

    decrease(length){
        this.innerLength = this.innerLength - length;
    }

    toString(){
        let result = "";
        if(this.innerLength < this.innerString.length){
            result = this.innerString.slice(0,this.innerLength) + '...'
        } else {
            result = this.innerString;
        }

        return result;
    }
}


let stringer = new Stringer("vafla", 1);

stringer.decrease(4);
console.log(stringer);

console.log(stringer.toString());