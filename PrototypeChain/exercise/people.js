function solve() {
    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw Error("Nope!");
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            switch (this.constructor.name) {
                case "Junior":
                    this.tasks = [`${this.name} is working on a simple task.`];
                    break;
                case "Senior":
                    this.tasks = [`${this.name} is working on a complicated task.`,
                        `${this.name} is taking time off work.`,
                        `${this.name} is supervising junior workers.`];
                    break;
                case "Manager":
                    this.tasks = [`${this.name} scheduled a meeting.`,
                        `${this.name} is preparing a quarterly report.`];
                    break;
            }
        }

        work() {
            let currentTask = this.tasks.shift();
            console.log(currentTask);
            this.tasks.push(currentTask);
        }

        collectSalary() {
            if (this.constructor.name === "Manager") {
                console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
            } else {
                console.log(`${this.name} received ${this.salary} this month.`);
            }
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}

let classes = solve();

let manager = new classes.Manager('vafla',12);

console.log(manager.hasOwnProperty('salary'));
manager.salary = 3000;
manager.dividend = 500;

manager.collectSalary();