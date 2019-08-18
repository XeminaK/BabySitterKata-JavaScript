describe("Tests for BabySitter Kata", function() {
    it("Testing to see if 'startJob' function is defined", function() {
        expect(startJob).toBeDefined();
    });

    it("Testing startJob to return 1 if 1 is passed through", function() {
        expect(startJob(1)).toBe(1);
    });

    it("Testing startJob to return 2 if 2 is passed through", function() {
        expect(startJob(2)).toBe(2);
    });


}); //end test case