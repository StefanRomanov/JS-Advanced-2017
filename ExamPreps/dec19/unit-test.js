function makeList() {
    let data = [];
    return {
        addLeft: function(item) {
            data.unshift(item);
        },
        addRight: function(item) {
            data.push(item);
        },
        clear: function() {
            data = [];
        },
        toString: function() {
            return data.join(", ");
        }
    };
}

let expect = require('chai').expect;

describe('add left and right',function () {
   let list;
   beforeEach(function () {
       list = makeList();
   });
   describe('initial state',function () {
       it('addLeft function',function () {
           expect(list.hasOwnProperty('addLeft')).to.equal(true);
           expect(typeof list.addLeft).to.equal('function');
       });
       it('addRight function',function () {
           expect(list.hasOwnProperty('addRight')).to.equal(true);
           expect(typeof list.addRight).to.equal('function');
       });
       it('clear function',function () {
           expect(list.hasOwnProperty('clear')).to.equal(true);
           expect(typeof list.clear).to.equal('function');
       });
       it('toString function',function () {
           expect(list.hasOwnProperty('toString')).to.equal(true);
           expect(typeof list.toString).to.equal('function');
       })
   });
   describe('addLeft',function () {
       it('no elements',function () {
           list.addLeft();
           expect(list.toString()).to.equal("");
       });
       it('one element',function () {
           list.addLeft(1);
           expect(list.toString()).to.equal("1");
       });
       it('many elements',function () {
           list.addLeft(1);
           list.addLeft('vafla');
           list.addLeft(true);
           expect(list.toString()).to.equal("true, vafla, 1");
       });
   });
    describe('addRight',function () {
        it('no elements',function () {
            list.addRight();
            expect(list.toString()).to.equal("");
        });
        it('one element',function () {
            list.addRight(1);
            expect(list.toString()).to.equal("1");
        });
        it('many elements',function () {
            list.addRight(1);
            list.addRight('vafla');
            list.addRight(true);
            expect(list.toString()).to.equal("1, vafla, true");
        });
        it('rotation',function () {
            list.addRight(1);
            list.addLeft('vafla');
            list.addRight(true);
            list.addLeft(2);
            expect(list.toString()).to.equal("2, vafla, 1, true");
        });
    });
    describe("clear",function () {
        it('no elements',function () {
            list.clear();
            expect(list.toString()).to.equal("");
        });
        it('with elements',function () {
            list.addRight(1);
            list.addLeft('vafla');
            list.addRight(true);
            list.addLeft(2);
            list.clear();
            expect(list.toString()).to.equal("");
        })
    })
});