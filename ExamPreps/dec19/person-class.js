class Player{
    constructor(nickName){
        this.nickName = nickName;
        this._scores = [];
    }

    get scores(){
        return this._scores;
    }

    set scores(value){
        this._scores = value;
    }

    addScore(score){
        if(score !== null && !isNaN(score)){
            this.scores.push(Number(score));
            this.scores = this.scores.sort((a,b) => b - a);
        }
        return this;
    }

    get scoreCount(){
        return this.scores.length;
    }

    get highestScore(){
        return this.scores[0];
    }

    get topFiveScore(){
        return this.scores.slice(0,5);
    }

    toString(){
        return `${this.nickName}: [${this.scores.toString()}]`
    }
}

let peter = new Player("Peter");
peter.addScore(undefined);
console.log(peter.toString());
console.log(peter.highestScore);
console.log(peter.topFiveScore.length);
console.log(peter.scoreCount);

peter.addScore(null);
console.log(peter.toString());
console.log(peter.highestScore);
console.log(peter.topFiveScore.length);
console.log(peter.scoreCount);