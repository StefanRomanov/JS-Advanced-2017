(function(){
    String.prototype.ensureStart = function(str){
        if(!this.startsWith(str)){
            return str + this;
        } else {
            return this.toString();
        }
    };

    String.prototype.ensureEnd = function(str){
        if(!this.endsWith(str)){
            return this + str;
        } else {
            return this.toString();
        }
    };

    String.prototype.isEmpty = function(){
        return this.length === 0;
    };

    String.prototype.truncate = function(n){
        if(n < 4){

            return '.'.repeat(n);
        }

        if(this.length <= n){
            return this.toString();
        }

        if(this.includes(" ")){
            let stringParts = this.split(" ");
            console.log(stringParts);
            let result = "";
            for(let i = 0; i < stringParts.length; i++){
                if(result.length + stringParts[i].length + 3 <= n){
                    result += stringParts[i] + " ";
                } else {
                    result = result.trim();
                    break;
                }
            }
            result += "...";
            return result;
            } else {
                return this.slice(0, n - 3) + "...";
            }
    };

    String.format = function(string,...params){
        let placeholderPattern = /{\d}/g;
        let matches = string.match(placeholderPattern);
        let result = string.toString();
        for(let i = 0; i < params.length; i++){
            result = result.replace(matches[i],params[i]);
        }
        return result;
    }

})()

let str = 'my string';
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('jumps {0} {1}',
    'dog'
);
console.log(str);