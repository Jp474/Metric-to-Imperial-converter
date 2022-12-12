const resultInput = document.getElementById("result")
const convertBtn = document.getElementById("convert-btn")
const lengthPar = document.getElementById("length-p")
const volumePar = document.getElementById("volume-p")
const massPar = document.getElementById("mass-p")

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
3 decimal places
*/

convertBtn.addEventListener ("click", function() {
        length()
        volume()
        mass()
})

function length() {
    let meterVal = (resultInput.value / 3.281).toFixed(3)
    let feetVal = (resultInput.value * 3.281).toFixed(3)

    if (resultInput.value === 0) {
        lengthPar.textContent = ""
    }  else if (resultInput.value === 1) {
        lengthPar.textContent = `${resultInput.value} meter = ${feetVal} feet | ${resultInput.value} foot = ${meterVal} meters`
    } else {lengthPar.textContent = `${resultInput.value} meters = ${feetVal} feet | ${resultInput.value} feet = ${meterVal} meters`
}
    
}

function volume() {
    let literVal = (resultInput.value * 0.264).toFixed(3)
    let gallonVal = (resultInput.value / 0.264).toFixed(3)

    if (resultInput.value === 1) {
        volumePar.textContent = `${resultInput.value} liter = ${literVal} gallons | ${resultInput.value} gallon = ${gallonVal} liters`
    } else if (resultInput.value === 0) {
        volumePar.textContent = ""
    } else {volumePar.textContent = `${resultInput.value} liters = ${literVal} gallons | ${resultInput.value} gallons = ${gallonVal} liters`
}
}

function mass() {
    let kilogramVal = (resultInput.value * 2.204).toFixed(3)
    let poundVal = (resultInput.value / 2.204).toFixed(3)

    if (resultInput.value === 1) {
        massPar.textContent = `${resultInput.value} kilogram = ${kilogramVal} pounds | ${resultInput.value} pound = ${poundVal} kilograms`
    } else if (resultInput.value === 0) {
        massPar.textContent = ""
    } {massPar.textContent = `${resultInput.value} kilograms = ${kilogramVal} pounds | ${resultInput.value} pounds = ${poundVal} kilograms`
}
}