const matchingDays = () => {
    //variables
    let theDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let firstDate;
    let secondDate;
    let firstColor;
    let secondColor;

    //set first date
    const setFirstDate = dateOne => firstDate = dateOne;
    //get first date
    const getFirstDate = () => firstDate;
    //set second date
    const setSecondDate = dateTwo => secondDate = dateTwo;
    //get second date
    const getSecondDate = () => secondDate;
    //function to get the day of the week using the input date
    const dayOfTheWeek = getDateFunction => {
        let inputDate = getDateFunction.split("-").map(Number);
        let date = new Date(inputDate[0], inputDate[1] - 1, inputDate[2]);
        return theDays[date.getDay()];
    }
    //set the day of the first input date
    const setFirstDay = () => dayOfTheWeek(getFirstDate());
    //get the day of the first input date
    const getFirstDay = () => setFirstDay();
    //set the day of the second input date
    const setSecondDay = () => dayOfTheWeek(getSecondDate());
    //get the day of the second input date
    const getSecondDay = () => setSecondDay();
    //check if the days of the dates are matching
    const checkMatchingDays = () => (getFirstDay() === getSecondDay());
    //get matching days condition
    const isMatchingDays = () => checkMatchingDays();
    //set background color days
    const setDayColors = () => {
        if(isMatchingDays()) {
            return "green";
        } else {
            firstColor = "purple";
            secondColor = "red";
            return [firstColor, secondColor];
        }
    }
    //get matching color
    const getDayColors = () => setDayColors();

    return {
        setFirstDate,
        getFirstDate,
        setSecondDate,
        getSecondDate,
        getFirstDay,
        getSecondDay,
        isMatchingDays,
        getDayColors
    }
}

let test1 = matchingDays();
test1.setFirstDate("25-05-2022")
test1.setSecondDate("25-05-2022")
console.log(test1.getFirstDay())
console.log(test1.getSecondDay())
