//5.
const Module = (function () {
    //6. strict
    'use strict';
    //1. Create a function expression named createBicyclePrototye 
    const createBicyclePrototye = function createBicyclePrototye() {
        let obj = {
            speed: 0,
            applyBrake: function (val) { this.speed -= val },
            speedup: function (val) { this.speed += val; }
        }
        return obj;
    }

    //2. Create another function expression named createMountainBikeProtoype   
    const createMountainBikeProtoype = function createMountainBikeProtoype(proto) {
        let MountainBikeProtoype = Object.create(proto);
        MountainBikeProtoype.setGear = function (param) {
            this.gear = param;
        }
        return MountainBikeProtoype;
    }

    //3. Write third function expression named start 
    const start = function start() {
        //4.
        let bicyclePrototype = createBicyclePrototye();
        let mountainBikePrototype = createMountainBikeProtoype(bicyclePrototype);

        let bic1 = Object.create(bicyclePrototype);
        bic1.speed = 10;
        bic1.speedup(50);
        console.log(bic1.speed);
        bic1.applyBrake(8);
        console.log(bic1.speed);

        let bic2 = Object.create(bicyclePrototype);
        bic2.speed = 10;
        bic2.speedup(50);
        bic2.speedup(150);
        console.log(bic2.speed);
        bic2.applyBrake(8);
        console.log(bic2.speed);

        let BMX = Object.create(mountainBikePrototype);
        BMX.setGear(1)
        BMX.speedup(10);
        BMX.setGear(2);
        BMX.speedup(20);
        console.log("BMX speed " + BMX.speed + ", Gear " + BMX.gear);
    }

    start();
})();

var ES6 = (function () {
    class BicyclePrototye {
        constructor() {
            this.speed = 0;
        }

        applyBrake(val) {
            this.speed -= val;
        }

        speedup(val) {
            this.speed += val;
        }

        getSpeed() {
            return this.speed;
        }
        toString(){
            return "BicyclePrototye => Speed::" + this.speed ;
        }
        
    }

    class MountainBikePrototype extends BicyclePrototye {
        constructor() {
            super();
            this.gear = 0;
        }

        setGear(val) {
            this.gear = val;
        }

        toString(){
            return "MountainBikePrototype => Speed::" + this.speed + ", Gear::" + this.gear + ""; 
        }
    }
    
    function start()
    {
        let B1 = new BicyclePrototye();
        B1.speedup(20);
        console.log(B1.toString());

        let B2 = new MountainBikePrototype();
        B2.setGear(10);
        B2.speedup(500);
        console.log(B2.toString());

    }
    start();
})();