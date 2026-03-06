//! Start by creating the variables for the data recorded
let temps = [
    { degree: 32, unit: "F" },
    { degree: 25, unit: "C" },
    { degree: 70, unit: "F" },
    { degree: 18, unit: "C" },
    { degree: 80, unit: "F" },
    { degree: 15, unit: "C" },
    { degree: 72, unit: "F" },
    { degree: 28, unit: "C" },
    { degree: 68, unit: "F" },
    { degree: 20, unit: "C" },
    { degree: 75, unit: "F" },
    { degree: 23, unit: "C" },
    { degree: 82, unit: "F" },
    { degree: 30, unit: "C" },
    { degree: 65, unit: "F" },
    { degree: 22, unit: "C" },
    { degree: 77, unit: "F" },
    { degree: 26, unit: "C" },
    { degree: 78, unit: "F" },
    { degree: 24, unit: "C" },
    { degree: 73, unit: "F" },
    { degree: 21, unit: "C" },
    { degree: 79, unit: "F" },
    { degree: 27, unit: "C" },
    { degree: 71, unit: "F" },
    { degree: 19, unit: "C" },
    { degree: 74, unit: "F" },
    { degree: 17, unit: "C" },
    { degree: 76, unit: "F" },
    { degree: 29, unit: "C" },
    
];

//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)
function convertTempFahrenheit(tempInCelsius) {
    return (tempInCelsius * 9 / 5) + 32;
}

function convertTempCelsius(tempInFahrenheit) {
    return (tempInFahrenheit - 32) * 5 / 9;

}


//! Start the calculation of the total temperatures
let fahrenheitTemp = [];

for (let i  = 0; i < temps.length; i++) {
    if (temps[i].unit === "C") {
        fahrenheitTemp.push(convertTempFahrenheit(temps[i].degree));
    } else {
        fahrenheitTemp.push(temps[i].degree);
    }
}

let celsiusTemp = [];
for (let i  = 0; i < temps.length; i++) {
    if (temps[i].unit === "F") {
        celsiusTemp.push(convertTempCelsius(temps[i].degree));
    } else {
        celsiusTemp.push(temps[i].degree);
    }
};


//* Then apply the conversion to calculate the total in the other unit of measurement

function averageFahrenheit(listOfTemps) {
    let tot_temperature_in_fahrenheit = 0
    for (let i = 0; i < listOfTemps.length; i++) {
        tot_temperature_in_fahrenheit = tot_temperature_in_fahrenheit + listOfTemps[i];
        };
    let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / listOfTemps.length;
    return {
        avg_temperature_in_fahrenheit,
        tot_temperature_in_fahrenheit
    };
};

function averageCelsius(listOfTemps) {
    let tot_temperature_in_celsius = 0
    for (let i = 0; i < listOfTemps.length; i++) {
    tot_temperature_in_celsius = tot_temperature_in_celsius + listOfTemps[i];
    };
    let avg_temperature_in_celsius = tot_temperature_in_celsius / listOfTemps.length;
    return {
        avg_temperature_in_celsius,
        tot_temperature_in_celsius
    };
};
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius


const fahrenheitResults = averageFahrenheit(fahrenheitTemp);
const celsiusResults = averageCelsius(celsiusTemp);

const tot_temperature_in_fahrenheit = fahrenheitResults.tot_temperature_in_fahrenheit;
const avg_temperature_in_fahrenheit = fahrenheitResults.avg_temperature_in_fahrenheit;

const tot_temperature_in_celsius = celsiusResults.tot_temperature_in_celsius;
const avg_temperature_in_celsius = celsiusResults.avg_temperature_in_celsius;

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

console.log({
    tot_temperature_in_fahrenheit,
    avg_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_celsius
});

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};