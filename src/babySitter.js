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

function familyA(startTime, endTime) {
    
};