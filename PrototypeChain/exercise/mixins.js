function result(){
    function computerQualityMixin(cl){
        cl.prototype.getQuality = function (){
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };
        cl.prototype.isFast = function() {
            return this.processorSpeed > (this.ram / 4);
        };
        cl.prototype.isRoomy = function() {
            return this.hardDiskSpace  > Math.floor(this.ram * this.processorSpeed);
        }
    }

    function styleMixin(cl){
        cl.prototype.isFullSet = function () {
            return this.manufacturer === this.keyboard.manufacturer && this.monitor.manufacturer === this.keyboard.manufacturer;
        };

        cl.prototype.isClassy = function () {
            return this.battery.expectedLife >= 3 && (this.color === "Silver" || this.color === "Black") && this.weight < 3;
        }
    }

    return {
        computerQualityMixin,
        styleMixin
    }
}