"use strict";
function startJob(startTime) {
    //StartTime between 5pm and midnight
    if (startTime >= 17 && startTime <=24) {
        return startTime;
    //StartTime between 1am - 3am (cannot be 4am since that is the latest end time)
    } else if (startTime >= 1 && startTime <=3) {
        return startTime + 24;
    } else {
        return 17;
    }
};

function endJob() {
    
};