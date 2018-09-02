function solve(baseClass){
    baseClass.prototype.species = 'Human';
    baseClass.prototype.toSpeciesString= function(){
        return `I am ${this.species}. ${this.toString()}`
    }
}
