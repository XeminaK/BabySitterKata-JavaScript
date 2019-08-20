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
    startTime = Math.floor(startTime);
    return startTime;
    };
};

function endCheckInteger(endTime) {
    if (Number.isInteger(endTime)) {
        return endTime;
    } else {
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
    
    while (hour < totalHours) {
        //before 11pm rate
        if (startTime < 23) {
            startTime++
            value = value + 15;
        //after 11pm rate
        } else {
            value = value + 20
        }; //end if else statment
        hour++;
    }; //end while loop
    return value;
};

function familyB(startTime, endTime) {
    let value = 0;
    let hour = 0;
    let totalHours = totalHoursCalculated(startTime, endTime);

    while (hour < totalHours) {
        //before 10pm rate
        if (startTime < 22) {
            startTime++;
            value = value + 12;
        //between 10pm and midnight rate
        } else if (startTime >= 22 && startTime < 24) {
            startTime++;
            value = value + 8;
        //after midnight rate
        } else if (startTime >= 24) {
            value = value + 16;
        }; //end if else statement
        hour++;
    }; //end while loop
    return value;
};

function familyC(startTime, endTime) {
    let value = 0;
    let hour = 0;
    let totalHours = totalHoursCalculated(startTime, endTime);

    while (hour < totalHours) {
        //before 9pm rate
        if (startTime < 21) {
            startTime++
            value = value + 21;
        //after 9pm rate
        } else {
            value = value + 15;
        };
        hour++;
    };
    return value;

};