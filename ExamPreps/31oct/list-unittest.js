class SortedList {
    constructor() {
        this.list = [];
    }

    add(element) {
        this.list.push(element);
        this.sort();
    }

    remove(index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }

    get(index) {
        this.vrfyRange(index);
        return this.list[index];
    }

    vrfyRange(index) {
        if (this.list.length == 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }

    sort() {
        this.list.sort((a, b) => a - b);
    }

    get size() {
        return this.list.length;
    }
}


let expect = require('chai').expect;

describe('sortedList',function () {
    let theList;
    beforeEach(function () {
       theList = new SortedList();
    });
    describe('initial state', function () {
       it('add property exists',function () {
           expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
       });
        it('remove property exists',function () {
            expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
        });
        it('get property exists',function () {
            expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
        });
        it('get property exists',function () {
            expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
        });
    });
    
    describe('add function',function () {
        it('add one works properly',function () {
            theList.add(13);
            expect(theList.list.toString()).to.equal('13');
        });
        it('add many works properly',function () {
            theList.add(13);
            theList.add(3);
            theList.add(154);
            theList.add(2);
            theList.add(7);
            expect(theList.list.toString()).to.equal('2,3,7,13,154');
        })
    });
    describe('remove function',function () {
        it('list is empty',function () {
           expect(() => theList.remove()).to.throw(Error);
        });
        it('index is small',function () {
            theList.add(13);
            theList.add(3);
            theList.add(154);
            theList.add(2);
            theList.add(7);
            expect(() => theList.remove(-3)).to.throw(Error);
        });
        it('index is big',function () {
            theList.add(13);
            theList.add(3);
            theList.add(154);
            theList.add(2);
            theList.add(7);
            expect(() => theList.remove(6)).to.throw(Error);
        });
        it('index is equal to length',function () {
            theList.add(13);
            theList.add(3);
            theList.add(154);
            theList.add(2);
            theList.add(7);
            expect(() => theList.remove(5)).to.throw(Error);
        });
        it('remove correct',function () {
            theList.add(13);
            theList.add(3);
            theList.add(154);
            theList.remove(1);
            expect(theList.list.toString()).to.equal('3,154');
        })
    });
    describe('get function',function () {
        it('list is empty',function () {
            expect(() => theList.get()).to.throw(Error);
        });
        it('index is small',function () {
            theList.add(13);
            theList.add(3);
            theList.add(154);
            theList.add(2);
            theList.add(7);
            expect(() => theList.get(-3)).to.throw(Error);
        });
        it('index is big',function () {
            theList.add(13);
            theList.add(3);
            theList.add(154);
            theList.add(2);
            theList.add(7);
            expect(() => theList.get(6)).to.throw(Error);
        });
        it('index is equal to length',function () {
            theList.add(13);
            theList.add(3);
            theList.add(154);
            theList.add(2);
            theList.add(7);
            expect(() => theList.get(5)).to.throw(Error);
        });
        it('get correct',function () {
            theList.add(13);
            theList.add(3);
            theList.add(154);
            expect(theList.get(1)).to.equal(13);
        })
    });
    describe('get size',function () {
        it('size more than 0',function () {
            theList.add(13);
            theList.add(3);
            theList.add(154);
            expect(theList.size).to.equal(3);
        });
        it('size 0',function () {
            expect(theList.size).to.equal(0);
        })
    });
});