describe("The matchingDays function", () => {
    describe("set first date value", () => {
        it("should be able to return the input of the first date", () => {
            let test = matchingDays();
            test.setFirstDate("12-05-2022");
            assert.equal(test.getFirstDate(), "12-05-2022");
        })

        it("should return '24-12-2021' if the input date is '24-12-2021'", () => {
            let test = matchingDays();
            test.setFirstDate("24-12-2021");
            assert.equal(test.getFirstDate(), "24-12-2021");
        })
    })

    describe("set second date value", () => {
        it("should be able to return the input of the second date", () => {
            let test = matchingDays();
            test.setSecondDate("15-10-2022");
            assert.equal(test.getSecondDate(), "15-10-2022");
        })

        it("should return '30-12-2015' if the input date is '30-12-2015'", () => {
            let test = matchingDays();
            test.setSecondDate("24-12-2021");
            assert.equal(test.getSecondDate(), "24-12-2021");
        })
    })

    describe("set the day of the first date value", () => {
        it("should return 'Monday' for the input date '25/04/2022'", () => {
            let test = matchingDays();
            test.setFirstDate("2022-04-25");
            assert.equal(test.getFirstDay(), "Monday");
        })

        it("should return 'Wednesday' if the input date is '25/05/2022'", () => {
            let test = matchingDays();
            test.setFirstDate("2022-05-25");
            assert.equal(test.getFirstDay(), "Wednesday");
        })
    })

    describe("set the day of the second date value", () => {
        it("should return 'Sunday' for the input date '29/05/2022'", () => {
            let test = matchingDays();
            test.setSecondDate("2022-05-29");
            assert.equal(test.getSecondDay(), "Sunday");
        })

        it("should return 'Friday' if the input date is '18/09/2020'", () => {
            let test = matchingDays();
            test.setSecondDate("2020-09-18");
            assert.equal(test.getSecondDay(), "Friday");
        })
    })

    describe("use value, test if days are matching", () => {
        it("should return 'false' if the days of the input dates are not matching", () => {
            let test = matchingDays();

            test.setFirstDate("18-10-2022");
            test.setSecondDate("15-10-2022");

            assert.equal(test.isMatchingDays(), false);
        })

        it("should return 'true' if the days of the input dates are matching", () => {
            let test = matchingDays();
            
            test.setFirstDate("21-05-2022")
            test.setSecondDate("11-12-2010");

            assert.equal(test.isMatchingDays(), true);
        })
    })

    describe("use value, to test the colors", () => {
        it("should return the 'green' if the days matching", () => {
            let test = matchingDays();

            test.setFirstDate("21-05-2022")
            test.setSecondDate("11-12-2010");

            assert.equal(test.getDayColors(), "green");
        })

        it("should return a list of first day and second day colors - ['purple', 'red'] if days are not matching", () => {
            let test = matchingDays();

            test.setFirstDate("21-05-2022")
            test.setSecondDate("22-05-2022");

            assert.deepEqual(test.getDayColors(), ['purple', 'red']);
        })

        it("should return ['purple', 'red'] if days are not matching", () => {
            let test = matchingDays();

            test.setFirstDate("13-10-2010")
            test.setSecondDate("12-10-2010");

            assert.deepEqual(test.getDayColors(), ["purple", "red"]);
        })
    })
})