class Hardware {
    constructor(manufacturer) {
        if (new.target === Hardware) {
            throw Error('Nope!');
        }
        this.manufacturer = manufacturer;
    }
}

class Keyboard extends Hardware {
    constructor(manufacturer, responseTime) {
        super(manufacturer);
        this.responseTime = responseTime;
    }
}

class Monitor extends Hardware {
    constructor(manufacturer, width, height) {
        super(manufacturer);
        this.width = width;
        this.height = height;
    }
}

class Battery extends Hardware {
    constructor(manufacturer, expectedLife) {
        super(manufacturer);
        this.expectedLife = expectedLife;
    }
}

class Computer extends Hardware {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
        if (new.target === Computer) {
            throw Error('Nope!')
        }
        super(manufacturer);
        this.processorSpeed = processorSpeed;
        this.ram = ram;
        this.hardDiskSpace = hardDiskSpace;
    }
}

class Laptop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace,weight, color, battery) {
        super(manufacturer, processorSpeed, ram, hardDiskSpace);
        this.weight = weight;
        this.color = color;
        this.battery = battery;
    }

    get battery() {
        return this._battery;
    }

    set battery(bat) {
        if (!(bat instanceof Battery)) {
            throw new TypeError('Check again!')
        }
        this._battery = bat;
    }
}

class Desktop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace,keyboard, monitor) {
        super(manufacturer, processorSpeed, ram, hardDiskSpace);
        this.keyboard = keyboard;
        this.monitor = monitor;
    }

    get keyboard() {
        return this._keyboard;
    }

    set keyboard(value) {
        if (!(value instanceof Keyboard)) {
            throw new TypeError;
        }
        this._keyboard = value;
    }

    get monitor() {
        return this._monitor;
    }

    set monitor(value) {
        if (!(value instanceof Monitor)) {
            throw new  TypeError;
        }
        this._monitor = value;
    }
}