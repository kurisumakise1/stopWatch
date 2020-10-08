"use strict";
function StopWatch () {
    let a = {
        value : 0,
    };
    let startingTime = {value : null};
    let finishingTime = {value : null};
    let durationTime = {value : null};
    this.start = function() {
        if((a.value)==0) {
            startingTime.value = new Date();
            ++(a.value);
        }else {
            throw new Error("You cannot start again without stopping!");
        }
    }
    this.stop = function() {
        if((a.value)==1) {
            finishingTime.value = new Date()
            durationTime.value = ((finishingTime.value-startingTime.value)/1000);
            console.log(durationTime.value);
            --(a.value);
        }else {
            throw new Error("You cannot stop again without starting!");
        }
    }
    this.duration = function() {
        if(a.value==0) {
            durationTime.value = ((finishingTime.value.getTime()-startingTime.value.getTime())/1000);
            console.log(durationTime.value);
        }else {
            throw new Error("Duration couldnt measured please check your process");
        }
    }
}
let stp = new StopWatch();
