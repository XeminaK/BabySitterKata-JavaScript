describe("Tests for startJob function", function() {

    it("Testing to see if 'startJob' function is defined", function() {
        expect(startJob).toBeDefined();
    });
    //I am using military time so the numbers I pass through should reflect the number the user would use
    it("Testing startJob to return 18 if 18 is passed through", function() {
        expect(startJob(18)).toBe(18);
    });
    //Again using military time so the numbers should reflect what the user would input
    it("Testing startJob to return 20 if 20 is passed through", function() {
        expect(startJob(20)).toBe(20);
    });

    it("Testing startJob to accept the startTime that is in range (before midnight)", function() {
        expect(startJob(17)).toBe(17);
        expect(startJob(20)).toBe(20);
    });
    //startTime can start no earlier than 5pm (17:00)
    it("Testing to see if startJob will take a time that is not in range and return an error message", function() {
        expect(startJob(5)).toBe("The hours are out of range");
    });

    //To have the code not break after midnight, I chose to add +24 to the numbers that start after midnight
    it("Testing to see startJob will take a time in range (after midnight) and return the appropriate number (startTime +24)", function() {
        expect(startJob(3)).toBe(27);
        expect(startJob(2)).toBe(26);
    });

}); //end test case for startJob function (6 cases)

describe("Tests for endJob function", function() {
    
    it("Testing to see if 'endJob' function is defined", function() {
        expect(endJob).toBeDefined();
    });

    it("Testing endJob to return 18 if 18 is passed through", function() {
        expect(endJob(18)).toBe(18);
    });

    it("Testing endJob to return 20 if 20 is passed through", function() {
        expect(endJob(20)).toBe(20);
    });
    //Range is: 18:00 - 24:00
    it("Testing endJob to accept the endTime that is in range (before midnight)", function() {
        expect(endJob(18)).toBe(18);
        expect(endJob(21)).toBe(21);
    });
    
    it("Testing to see if endJob will take a time that is not in range and return an error message", function() {
        expect(endJob(10)).toBe("The hours are out of range");
    });
    //To have the code not break after midnight, I chose to add +24 to the numbers that start after midnight
    it("Testing to see endJob will take a time in range (after midnight) and return the appropriate number (endTime + 24)", function() {
        expect(endJob(1)).toBe(25);
        expect(endJob(2)).toBe(26);
    });

}); //end test case for endJob function (6 cases/ total 12)

describe("Tests for startCheckInteger function", function() {
    it("Testing to see if 'startCheckInteger' is defined", function() {
        expect(startCheckInteger).toBeDefined();
    });

    it("Testing to see if a 1 passes through, startCheckInteger function will return a 1", function() {
        expect(startCheckInteger(1)).toBe(1);
    });

    it("Testing to see if a 2 is passed through, startCheckInteger function will return a 2", function() {
        expect(startCheckInteger(2)).toBe(2);
    });
    //If a user enters 5:30, it should return 5pm to keep it a non-fractional number
    it("Testing for a non-integer to be returned as an integer that is rounded down", function() {
        expect(startCheckInteger(17.5)).toBe(17);
        expect(startCheckInteger(13.7)).toBe(13);
    });

}); //end test case for StartCheckInteger function (4 cases/ total 16)

describe("Tests for endCheckInteger function", function() {

    it("Testing to see if endCheckInteger function is defined", function() {
        expect(endCheckInteger).toBeDefined();
    });

    it("Testing to see if an integer passes through, endCheckInteger function will return that integer", function() {
        expect(endCheckInteger(1)).toBe(1);
        expect(endCheckInteger(2)).toBe(2);
    });
    //If a user enters 5:30, it should return 6pm to keep it a non-fractional number
    it("Testing for a non-integer to be returned as an integer that is rounded up", function() {
        expect(endCheckInteger(17.5)).toBe(18);
        expect(endCheckInteger(13.3)).toBe(14);
    });

}); //end test case for endCheckInteger function (3 cases/ total 19)

describe("Tests for totalHoursCalculated function", function() {
    it("Testing to see if totalHours is defined", function() {
        expect(totalHoursCalculated).toBeDefined();
    });
    //22 -> 10pm , 25 -> 1am (24 + 1 conversion was created earlier)
    it("Testing to see if totalHoursCalculated returns the total hours between start time and end time", function() {
        expect(totalHoursCalculated(17, 19)).toBe(2);
        expect(totalHoursCalculated(22, 25)).toBe(3);
    });

    it("Testing to see if an error message returs if endTime is smaller than startTime", function() {
        expect(totalHoursCalculated(19, 17)).toBe("End time is smaller than start time");
        expect(totalHoursCalculated(25, 22)).toBe("End time is smaller than start time");
    });

}); //end test case for totalHoursCalculated function (3 cases/ total 22)

describe("Tests for familyA function", function() {

    it("Testing to see if familyA function is defined", function() {
        expect(familyA).toBeDefined();
    });
    //17 (5pm) - 18 (6pm)
    it("Testing startTime and endTime before 11pm equals a value 15 dollars an hour", function() {
        expect(familyA(17, 18)).toBe(15);
        expect(familyA(17, 20)).toBe(45);
    });
    //11pm -> 23:00 , 26 -> 2am (24 + 2), 27 -> 3am (24 + 3)
    it("Testing startTime and endTime after 11pm equals a value of 20 dollars an hour", function() {
        expect(familyA(24, 26)).toBe(40);
        expect(familyA(24, 27)).toBe(60);
    });

    it("Testing for varying wage rates that begin before 11pm and end after 11pm", function() {
        expect(familyA(22, 24)).toBe(35);
        expect(familyA(20, 24)).toBe(65);
    });

}); //end test case for familyA function (4 cases/ total 26)

describe("Tests for familyB function", function() {
    it("Testing to see if familyB function is defined", function() {
        expect(familyB).toBeDefined();
    });
    //10pm -> 22:00
    it("Testing startTime and endTime before 10pm equals a value of 12 dollars an hour", function() {
        expect(familyB(20, 22)).toBe(24);
        expect(familyB(18, 22)).toBe(48);
    });
    //22 (10pm) - 24 (12am)
    it("Testing hours between 10 and midnight will result in 8 dollars an hour", function() {
        expect(familyB(22, 24)).toBe(16);
        expect(familyB(22, 23)).toBe(8);
    });
    //After 24 (midnight)
    it("Testing startTime and endTime after midnight equals a value of 16 dollars an hour", function() {
        expect(familyB(24, 27)).toBe(48);
        expect(familyB(24, 28)).toBe(64);
    });

    it("Testing varying wage rates for all 3 wages", function() {
        expect(familyB(20,28)).toBe(104);
        expect(familyB(22,28)).toBe(80);
    });

}); //end test case for familyB function (5 cases/ total 31)

describe("Tests for familyC function", function() {
    it("Testing to see if familyC function is defined", function() {
        expect(familyC).toBeDefined();
    });
    //9pm -> 21:00
    it("Testing startTime and endTime before 9pm to be a value of 21 dollars an hour", function() {
        expect(familyC(18, 19)).toBe(21);
        expect(familyC(18, 20)).toBe(42);
    });
    //After 22 (9pm) rate;
    it("Testing startTime and endTime after 9pm equals a value of 15 dollars an hour", function() {
        expect(familyC(22, 24)).toBe(30);
        expect(familyC(25, 26)).toBe(15);
    });

    it("Testing for varying wage rates that begin before 9pm and end after 9pm", function() {
        expect(familyC(17, 21)).toBe(84);
        expect(familyC(22, 24)).toBe(30);
        expect(familyC(17, 24)).toBe(129);
    });

}); //end test case for familyC function (4 cases/ total 35)

describe("Tests for sitterRates function", function() {

    it("Testing to see if sitterRates function is defined", function() {
        expect(sitterRates).toBeDefined();
    });

    it("Test to see if 'A' is passed through for family parameter, sitterRates will calculate value based on familyA wages", function() {
        expect(sitterRates(22, 24, "A")).toBe(35);
        expect(sitterRates(20, 24, 'a')).toBe(65);
    });

    it("Test to see if 'B' is passed through for family parameter, sitterRates will calculate value based on familyB wages", function() {
        expect(sitterRates(22, 24, "B")).toBe(16);
        expect(sitterRates(20, 24, 'b')).toBe(40);
    });

    it("Test to see if 'C' is passed through for family parameter, sitterRates will calculate value based on familyC wages", function() {
        expect(sitterRates(22, 24, "C")).toBe(30);
        expect(sitterRates(20, 24, 'c')).toBe(66);
    });

    it("Testing if A, B, or C are not passed through for family parameter, an error message will return", function() {
        expect(sitterRates(20, 24, "d")).toBe("Not a selectable family, try again!");
        expect(sitterRates(20, 24, 20)).toBe("Not a selectable family, try again!");
    });
    
    it("Testing if console.log message printed when A, B, or C was not passed through for family parameter", function() {
        const logSpy = spyOn(console, "log");
        sitterRates(20, 24, "d");
        expect(logSpy).toHaveBeenCalledWith("Not a selectable family, try again!");
    });

    it("Testing if times after midnight pass through sitterRates function, are converted with +24, and return an accurate value", function() {
        expect(sitterRates(23, 1, "C")).toBe(30); //11pm - 1am 
        expect(sitterRates(1, 3, "A")).toBe(40);
        expect(sitterRates(22, 2, "B")).toBe(48); //10pm - 4am
    });

    it("Testing to see if a non-integer is passed, sitterRates will change the non-integer to an integer and return an accurate value", function() {
        expect(sitterRates(22.5, 24, "A")).toBe(35);
        expect(sitterRates(17, 19.5, "B")).toBe(36);
        expect(sitterRates(19.5, 1.5, "C")).toBe(117);
    });

    it("Test to see if startTime is out of range, sitterRates will console.log an error message and stop the function", function() {
        const logSpy = spyOn(console, "log");
        sitterRates(7, 24, "A");
        expect(logSpy).toHaveBeenCalledWith("The startTime number is out of range, try again!");
    });

    it("Test to see if endTime is out of range, sitterRates will console.log an error message and stop the function", function() {
        const logSpy = spyOn(console, "log");
        sitterRates(24, 7, "A");
        expect(logSpy).toHaveBeenCalledWith("The endTime number is out of range, try again!");
    });

    it("Test to see if endTime is smaller than startTime, sitterRates will console.log an error message and stop the function", function() {
        const logSpy = spyOn(console, "log");
        sitterRates(24, 18, "A");
        sitterRates(24, 18, "B");
        sitterRates(24, 18, "C");
        expect(logSpy).toHaveBeenCalledWith("The end time is smaller than the start time, please try again!");
        expect(logSpy).toHaveBeenCalledTimes(3);
    });

    

}); //end test case for sitterRates function (11 cases/ total 46);