class SortedList {

    constructor(){
        this.array = [];
        this.size = 0;
    }

    add(element){
        this.array.push(element);
        this.array = this.array.sort((a,b) => a - b);
        this.size++;
    }

    remove(index){
        if(index < 0 || index > this.size - 1){
            return;
        }
        this.size--;
        return this.array.splice(index,1);
    }

    get(index){
        if(index < 0 || index > this.size - 1){
            return;
        }
        return this.array[index];
    }
}

let list = new SortedList();
list.add(5);
list.remove(-1);
console.log(list.get(-1));
console.log(list);
