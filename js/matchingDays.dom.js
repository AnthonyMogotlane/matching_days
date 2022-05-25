//Dom elements reference
const firstDate = document.querySelector("#first-date");
const secondDate = document.querySelector("#second-date");

//instance of matchingDays function
const matchingDay = matchingDays();

firstDate.addEventListener("change", () => {
    matchingDay.setFirstDate(firstDate.value);
    matchingDay.setSecondDate(secondDate.value);
    console.log(matchingDay.getDayColors())
    weekDaysTemplate(matchingDay.getFirstDay(), matchingDay.getSecondDay(), matchingDay.getDayColors());
})

secondDate.addEventListener("change", () => {
    matchingDay.setFirstDate(firstDate.value);
    matchingDay.setSecondDate(secondDate.value);

    weekDaysTemplate(matchingDay.getFirstDay(), matchingDay.getSecondDay(), matchingDay.getDayColors());
})

function weekDaysTemplate(theDayOne, theDayTwo, theColors) {
    // compile the template
    let daysTemplate = document.querySelector(".days-content").innerHTML;
    let theColor = theColors;
    // custom helper for color behavior
    Handlebars.registerHelper('color', str =>  { 
        if(str === theDayOne) {
            return `<li class="${theColor[0]} ${theColor}">${str}</li>`;
        } else if (str === theDayTwo) {
            return `<li class=${theColor[1]} ${theColor}>${str}</li>`;
        } else {
            return `<li>${str}</li>`;
        }
    })
    //template function
    let daysTemplateFunction = Handlebars.compile(daysTemplate);

    let weekDays = {
        listOfDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    }

    document.querySelector(".days-container").innerHTML = daysTemplateFunction(weekDays);
}
weekDaysTemplate();

