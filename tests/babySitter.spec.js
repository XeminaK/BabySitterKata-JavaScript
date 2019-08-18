describe("Tests for BabySitter Kata", function() {
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
        expect(startJob(16)).toBe(17);
        expect(startJob(5)).toBe(17);
    })

    //To have the code not break after midnight, I chose to add +24 to the numbers that start after midnight
    it("Testing to see startJob will take a time in range (after midnight) and return an appropriate number", function() {
        expect(startJob(3)).toBe(27);
        expect(startJob(2)).toBe(26);
    });


}); //end test case