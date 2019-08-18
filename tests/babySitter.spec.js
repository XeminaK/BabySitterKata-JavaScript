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

    it("Testing startJob to accept the startTime that is in range", function() {
        expect(startJob(17)).toBe(17);
        expect(startJob(20)).toBe(20);
    })


}); //end test case