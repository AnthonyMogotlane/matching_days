//Dom elements reference
const firstDate = document.querySelector("#first-date");
const secondDate = document.querySelector("#second-date");

//instance of matchingDays function
const matchingDay = matchingDays();

//values from localStorage
let theFirstDate = (localStorage.getItem("firstDate") !== null) ? JSON.parse(localStorage.getItem("firstDate")) : "";
let theSecondDate = (localStorage.getItem("secondDate") !== null) ? JSON.parse(localStorage.getItem("secondDate")) : "";
let theColors = (localStorage.getItem("colors") !== null) ? JSON.parse(localStorage.getItem("colors")) : "";

firstDate.value = theFirstDate;
secondDate.value = theSecondDate;
matchingDay.setFirstDate(firstDate.value);
matchingDay.setSecondDate(secondDate.value);

//get the first date event
firstDate.addEventListener("change", () => {
    matchingDay.setFirstDate(firstDate.value);
    matchingDay.setSecondDate(secondDate.value);

    weekDaysTemplate(matchingDay.getFirstDay(), matchingDay.getSecondDay(), matchingDay.getDayColors());

    localStorage.setItem("firstDate", JSON.stringify(matchingDay.getFirstDate()))
    localStorage.setItem("colors", JSON.stringify(matchingDay.getDayColors()))
})
//get the second date event
secondDate.addEventListener("change", () => {
    matchingDay.setFirstDate(firstDate.value);
    matchingDay.setSecondDate(secondDate.value);

    weekDaysTemplate(matchingDay.getFirstDay(), matchingDay.getSecondDay(), matchingDay.getDayColors());

    localStorage.setItem("secondDate", JSON.stringify(matchingDay.getSecondDate()))
    localStorage.setItem("colors", JSON.stringify(matchingDay.getDayColors()))
})

function weekDaysTemplate(theDayOne, theDayTwo, theColors) {
    let theColor = theColors;
    let styleClass = "flex column justify-center align-center"
    // compile the template
    let daysTemplate = document.querySelector(".days-content").innerHTML;
    // custom helper for color behavior
    Handlebars.registerHelper('color', str => {
        if (str === theDayOne) {
            return `<li class="${theColor[0]} ${theColor} ${styleClass}">${str}</li>`;
        } else if (str === theDayTwo) {
            return `<li class="${theColor[1]} ${theColor} ${styleClass}" >${str}</li>`;
        } else {
            return `<li class="${styleClass}">${str}</li>`;
        }
    })
    //template function
    let daysTemplateFunction = Handlebars.compile(daysTemplate);

    let weekDays = {
        listOfDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    }

    document.querySelector(".days-container").innerHTML = daysTemplateFunction(weekDays);
}
weekDaysTemplate(matchingDay.getFirstDay(), matchingDay.getSecondDay(), matchingDay.getDayColors());


