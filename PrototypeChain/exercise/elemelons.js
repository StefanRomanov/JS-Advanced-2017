function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw Error('Abstract class cannot be instantiated directly');
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }

        toString() {
            let element = this.constructor.name.slice(0, this.constructor.name.length - 5);
            return `Element: ${element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = this.weight * this.melonSort.length;
        }

        get elementIndex() {
            return this._elementIndex;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = this.weight * this.melonSort.length;
        }

        get elementIndex() {
            return this._elementIndex;
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = this.weight * this.melonSort.length;
        }

        get elementIndex() {
            return this._elementIndex;
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = this.weight * this.melonSort.length;
        }

        get elementIndex() {
            return this._elementIndex;
        }
    }

    class Melolemonmelon extends Airmelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._prototypes = ['Fire', 'Earth', 'Air','Water'];
            this._element = "Water";
        }

        morph() {
            let currentElement = this._prototypes.shift();
            this._element = currentElement;
            this._prototypes.push(currentElement);
        }

        toString() {
            return `Element: ${this._element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    return {
        Melon,
        Melolemonmelon,
        Watermelon,
        Earthmelon,
        Firemelon,
        Airmelon
    }
}