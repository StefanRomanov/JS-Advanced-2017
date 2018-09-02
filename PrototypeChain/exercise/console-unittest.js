class Console {

    static get placeholder() {
        return /{\d+}/g;
    }

    static writeLine() {
        let message = arguments[0];
        if (arguments.length === 1) {
            if (typeof (message) === 'object') {
                message = JSON.stringify(message);
                return message;
            }
            else if (typeof(message) === 'string') {
                return message;
            }
        }
        else {
            if (typeof (message) !== 'string') {
                throw new TypeError("No string format given!");
            }
            else {
                let tokens = message.match(this.placeholder).sort(function (a, b) {
                    a = Number(a.substring(1, a.length - 1));
                    b = Number(b.substring(1, b.length - 1));
                    return a - b;
                });
                if (tokens.length !== (arguments.length - 1)) {
                    throw new RangeError("Incorrect amount of parameters given!");
                }
                else {
                    for (let i = 0; i < tokens.length; i++) {
                        let number = Number(tokens[i].substring(1, tokens[i].length - 1));
                        if (number !== i) {
                            throw new RangeError("Incorrect placeholders given!");
                        }
                        else {
                            message = message.replace(tokens[i], arguments[i + 1])
                        }
                    }
                    return message;
                }
            }
        }
    }
}

let expect = require('chai').expect;

describe('C# Console',function () {

    it('Console with single string',function () {
        expect(Console.writeLine('vafla')).to.be.equal('vafla')
    });
    it('Console with object', function () {
        let obj = {};
        expect(Console.writeLine(obj)).to.be.equal(JSON.stringify(obj));
    });
    it('Console with not string', function () {
        expect(Console.writeLine(3)).to.equal(undefined);
    })
    it('Template is not a string',function () {
        expect(() => Console.writeLine(3,3)).to.throw(TypeError);
    })
    it('Nothing passed',function () {
        expect(() => Console.writeLine()).to.throw(TypeError);
    })
    it('Too much parameters',function () {
        expect(() => Console.writeLine('aaaa {0} aaa',3,4)).to.throw(RangeError);
    })
    it('Wrong placeholder',function () {
        expect(() => Console.writeLine('aaaa {16} aaa',3,4)).to.throw(RangeError);
    })
    it('Placeholder working correctly',function () {
        expect(Console.writeLine('aaaa {0} aaa {1}',3,4)).to.be.equal('aaaa 3 aaa 4');
    })
});
