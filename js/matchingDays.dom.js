//Dom elements reference
const firstDate = document.querySelector("#first-date");
const secondDate = document.querySelector("#second-date");

//instance of matchingDays function
let matchingDay = matchingDays();

firstDate.addEventListener("change", () => {
    matchingDay.setFirstDate(firstDate.value);
})

secondDate.addEventListener("change", () => {
    matchingDay.setSecondDate(secondDate.value);
})


function weekDaysTemplate() {
    // compile the template
    let daysTemplate = document.querySelector(".days-content").innerHTML;
    // custom helper for color behavior
    Handlebars.registerHelper('color', str =>  { 
        return `<li class="red">${str}</li>`
    })
    //template function
    let daysTemplateFunction = Handlebars.compile(daysTemplate);

    let weekDays = {
        monday : "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday"
    }

    document.querySelector(".days-container").innerHTML = daysTemplateFunction(weekDays);
}
weekDaysTemplate();


