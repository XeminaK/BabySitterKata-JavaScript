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
    it("Testing to see if startJob will take a time that is not in range and return a time in range", function() {
        expect(startJob(5)).toBe("The hours are out of range");
    });

    //To have the code not break after midnight, I chose to add +24 to the numbers that start after midnight
    it("Testing to see startJob will take a time in range (after midnight) and return the appropriate number (startTime +24)", function() {
        expect(startJob(3)).toBe(27);
        expect(startJob(2)).toBe(26);
    });

}); //end test case for startJob function

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
    
    it("Testing to see if endJob will take a time that is not in range and return a time in range", function() {
        expect(endJob(10)).toBe("The hours are out of range");
    });
    //To have the code not break after midnight, I chose to add +24 to the numbers that start after midnight
    it("Testing to see endJob will take a time in range (after midnight) and return the appropriate number (endTime + 24)", function() {
        expect(endJob(1)).toBe(25);
        expect(endJob(2)).toBe(26);
    });

}); //end test case for endJob function

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

}); //end test case for StartCheckInteger function

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

}); //end test case for endCheckInteger function

describe("Tests for totalHours function", function() {
    it("Testing to see if totalHours is defined", function() {
        expect(totalHours).toBeDefined();
    });
    //22 -> 10pm , 25 -> 1am (24 + 1 conversion was created earlier)
    it("Testing to see if totalHours returns the total hours between start time and end time", function() {
        expect(totalHours(17, 19)).toBe(2);
        expect(totalHours(22, 25)).toBe(3);
    });

    it("Testing to see if an error message returs if endTime is smaller than startTime", function() {
        expect(totalHours(19, 17)).toBe("End time is smaller than start time");
        expect(totalHours(25, 22)).toBe("End time is smaller than start time");
    });

}); //end test case for totalHours function

describe("Tests for familyA function", function() {

    it("Testing to see if familyA function is defined", function() {
        expect(familyA).toBeDefined();
    });
    //17 (5pm) - 18 (6pm)
    it("Testing startTime before 11pm equals a value 15 dollars an hour", function() {
        expect(familyA(17, 18)).toBe(15);
    });

}); //end test case for familyA function