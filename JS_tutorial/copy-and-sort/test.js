describe("copyAndSort", function () {

    it("Sort copy of array but keep original unmodified", function () {

        let arr = ["HTML", "JavaScript", "CSS"];

        arr2 = copyAndSort(arr);

        assert.deepEqual(arr2, ["CSS", "HTML", "JavaScript"]);
    });

});