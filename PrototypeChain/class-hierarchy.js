function solve(){
    class Figure{
        constructor(){
            if(new.target === Figure){
                throw Error("vafla");
            }
        }

        get area(){
            switch(this.constructor.name){
                case "Rectangle":
                    return this.width * this.height;
                case "Circle":
                    return this.radius * this.radius * Math.PI;
            }
        }

        toString(){
            let myClass = this.constructor.name;
            let props = Object.getOwnPropertyNames(this);
            return myClass + ' - ' + props.map(p => `${p}: ${this[p]}`).join(', ');
        }
    }

    class Rectangle extends Figure{
        constructor(width,height){
            super();
            this.width = width;
            this.height = height;
        }
    }

    class Circle extends Figure{
        constructor(radius){
            super();
            this.radius = radius;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

let result = solve();
let Figure = result.Figure;
let fig = new Figure();
