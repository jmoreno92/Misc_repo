describe("decreaseOrder", function () {

    it("sort in decreasing order", function () {

        let arr = [5, 2, 1, -10, 8];

        arr2 = decreaseOrder(arr);

        assert.deepEqual(arr2, [8, 5, 2, 1, -10]);
    });

});