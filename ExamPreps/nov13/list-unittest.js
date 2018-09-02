function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}

let expect = require('chai').expect;

describe('List manipulator',function () {
    let list;
   beforeEach(function () {
      list = createList();
   });
   describe('Initial state',function () {
       it('has add',function () {
           expect(list.hasOwnProperty('add')).to.equal(true);
       });
       it('has shiftLeft',function () {
           expect(list.hasOwnProperty('shiftLeft')).to.equal(true);
       });
       it('has shiftRight',function () {
           expect(list.hasOwnProperty('shiftRight')).to.equal(true);
       });
       it('has swap',function () {
           expect(list.hasOwnProperty('swap')).to.equal(true);
       });
       it('has toString',function () {
           expect(list.hasOwnProperty('toString')).to.equal(true);
       })
   });
    describe('add function',function () {
        it('add without parameters',function () {
            list.add();
            expect(list.toString()).to.equal("");
        });
        it('add one',function () {
            list.add('vafla');
            expect(list.toString()).to.equal('vafla');
        });
        it('add many',function () {
            list.add('vafla');
            list.add('kifla');
            list.add('patlajan');
            expect(list.toString()).to.equal('vafla, kifla, patlajan');
        })
    });
    describe('shiftLeft function',function () {
        it('shiftLeft with one element',function () {
            list.add('vafla');
            expect(list.toString()).to.equal('vafla');
        });
        it('shiftLeft once',function () {
            list.add('vafla');
            list.add('kifla');
            list.add('patlajan');
            list.shiftLeft();
            expect(list.toString()).to.equal('kifla, patlajan, vafla');
        });
        it('shiftLeft many times',function () {
            list.add('vafla');
            list.add('kifla');
            list.add('patlajan');
            list.shiftLeft();
            list.shiftLeft();
            expect(list.toString()).to.equal('patlajan, vafla, kifla');
        })
    });
    describe('shiftRight function',function () {
        it('shiftRight with one element',function () {
            list.add('vafla');
            expect(list.toString()).to.equal('vafla');
        });
        it('shiftRight once',function () {
            list.add('vafla');
            list.add('kifla');
            list.add('patlajan');
            list.shiftRight();
            expect(list.toString()).to.equal('patlajan, vafla, kifla');
        });
        it('shiftRight many times',function () {
            list.add('vafla');
            list.add('kifla');
            list.add('patlajan');
            list.shiftRight();
            list.shiftRight();
            expect(list.toString()).to.equal('kifla, patlajan, vafla');
        })
    });
    describe('swap function',function () {
        it('index1 is not integer',function () {
            list.add('vafla');
            list.add('kifla');
            list.add('patlajan');
            expect(list.swap('a',2)).to.equal(false);
            expect(list.toString()).to.equal('vafla, kifla, patlajan');
        });
        it('index2 is not integer',function () {
            list.add('vafla');
            list.add('kifla');
            list.add('patlajan');
            expect(list.swap(1,'r')).to.equal(false);
            expect(list.toString()).to.equal('vafla, kifla, patlajan');
        });
        it('index1 is negative',function () {
            list.add('vafla');
            list.add('kifla');
            list.add('patlajan');
            expect(list.swap(-1,2)).to.equal(false);
            expect(list.toString()).to.equal('vafla, kifla, patlajan');
        });
        it('index2 is negative',function () {
            list.add('vafla');
            list.add('kifla');
            list.add('patlajan');
            expect(list.swap(1,-2)).to.equal(false);
            expect(list.toString()).to.equal('vafla, kifla, patlajan');
        });
        it('index1 is equal to list length',function () {
            list.add('vafla');
            list.add('kifla');
            list.add('patlajan');
            expect(list.swap(3,2)).to.equal(false);
            expect(list.toString()).to.equal('vafla, kifla, patlajan');
        });
        it('index2 is equal to list length',function () {
            list.add('vafla');
            list.add('kifla');
            list.add('patlajan');
            expect(list.swap(1,3)).to.equal(false);
            expect(list.toString()).to.equal('vafla, kifla, patlajan');
        });
        it('index1 is bigger than list length',function () {
            list.add('vafla');
            list.add('kifla');
            list.add('patlajan');
            expect(list.swap(4,2)).to.equal(false);
            expect(list.toString()).to.equal('vafla, kifla, patlajan');
        });
        it('index2 is bigger than list length',function () {
            list.add('vafla');
            list.add('kifla');
            list.add('patlajan');
            expect(list.swap(1,4)).to.equal(false);
            expect(list.toString()).to.equal('vafla, kifla, patlajan');
        });
        it('indexes are equal',function () {
            list.add('vafla');
            list.add('kifla');
            list.add('patlajan');
            expect(list.swap(1,1)).to.equal(false);
            expect(list.toString()).to.equal('vafla, kifla, patlajan');
        });
        it('swap correct with first zero',function () {
            list.add('vafla');
            list.add('kifla');
            list.add('patlajan');
            expect(list.swap(0,2)).to.equal(true);
            expect(list.toString()).to.equal('patlajan, kifla, vafla');
        });
        it('swap correct with second zero',function () {
            list.add('vafla');
            list.add('kifla');
            list.add('patlajan');
            expect(list.swap(1,0)).to.equal(true);
            expect(list.toString()).to.equal('kifla, vafla, patlajan');
        });
        it('swap correct with normal numbers',function () {
            list.add('vafla');
            list.add('kifla');
            list.add('patlajan');
            expect(list.swap(1,2)).to.equal(true);
            expect(list.toString()).to.equal('vafla, patlajan, kifla');
        });
    })
});