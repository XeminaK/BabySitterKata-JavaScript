"use strict";
function startJob(startTime) {
    //StartTime between 5pm and midnight
    if (startTime >= 17 && startTime <=24) {
        return startTime;
    //StartTime between 1am - 3am (cannot be 4am since that is the latest end time)
    } else if (startTime >= 1 && startTime <=3) {
        return startTime + 24;
    } else {
        return "The hours are out of range";
    }
};

function endJob(endTime) {
    //endTime between 6pm and midnight (cannot be 5pm since that is the earliest start)
    if (endTime >=18 && endTime <=24){
        return endTime;
    //endTime between 1am and 4am
    } else if (endTime >= 1 && endTime <=4) {
        return endTime + 24;
    } else {
    //4am -> 4 hours after midnight (24) -> 24 + 4 = 28
    return "The hours are out of range";
    }
};

function startCheckInteger(startTime) {
    if (Number.isInteger(startTime)) {
        return startTime;
    } else {
    //round down startTime
    startTime = Math.floor(startTime);
    return startTime;
    };
};

function endCheckInteger(endTime) {
    if (Number.isInteger(endTime)) {
        return endTime;
    } else {
    //round up endTime
      endTime = Math.ceil(endTime);
      return endTime;  
    };
};

function totalHoursCalculated(startTime, endTime) {
    if (endTime < startTime) {
        return "End time is smaller than start time";
    } else {
    return endTime - startTime;
    };
};

function familyA(startTime, endTime) {
    let value = 0;
    let hour = 0;
    let totalHours = totalHoursCalculated(startTime, endTime);
    if (isNaN(totalHours)) {
        console.log("The end time is smaller than the start time, please try again!");
        return;
    }
    
    while (hour < totalHours) {
        //before 11pm rate
        if (startTime < 23) {
            startTime++
            value += 15;
        //after 11pm rate
        } else {
            value += 20
        }; //end if else statment
        hour++;
    }; //end while loop
    return value;
};

function familyB(startTime, endTime) {
    let value = 0;
    let hour = 0;
    let totalHours = totalHoursCalculated(startTime, endTime);
    if (isNaN(totalHours)) {
        console.log("The end time is smaller than the start time, please try again!");
        return;
    }

    while (hour < totalHours) {
        //before 10pm rate
        if (startTime < 22) {
            startTime++;
            value += 12;
        //between 10pm and midnight rate
        } else if (startTime >= 22 && startTime < 24) {
            startTime++;
            value += 8;
        //after midnight rate
        } else if (startTime >= 24) {
            value += 16;
        }; //end if else statement
        hour++;
    }; //end while loop
    return value;
};

function familyC(startTime, endTime) {
    let value = 0;
    let hour = 0;
    let totalHours = totalHoursCalculated(startTime, endTime);
    if (isNaN(totalHours)) {
        console.log("The end time is smaller than the start time, please try again!");
        return;
    }

    while (hour < totalHours) {
        //before 9pm rate
        if (startTime < 21) {
            startTime++
            value += 21;
        //after 9pm rate
        } else {
            value += 15;
        };
        hour++;
    };
    return value;
};

function sitterRates(startTime, endTime, family) {
    let value = 0;
    startTime = startJob(startTime);
    if (isNaN(startTime)) {
        console.log("The startTime number is out of range, try again!");
        return;
    };
    startTime = startCheckInteger(startTime);
    endTime = endJob(endTime);
    if (isNaN(endTime)) {
        console.log("The endTime number is out of range, try again!");
        return;
    }
    endTime = endCheckInteger(endTime);
    if (family == "A" || family == "a") {
        value = familyA(startTime, endTime);
    } else if (family == "B" || family == "b") {
        value = familyB(startTime, endTime);
    } else if (family == "C" || family == "c") {
        value = familyC(startTime, endTime);
    } else {
        console.log("Not a selectable family, try again!");
        return "Not a selectable family, try again!";
    }
    return value;
};