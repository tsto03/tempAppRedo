// ask for input
const name = prompt("What is your name?");

const degFahren = prompt("enter degrees in Fahrenheit");
const degCel = toCelcius(degFahren); 
fahrenMsg(degFahren);

// functions allow for reusability:
// const degBoston = toCelcius(65)
// convert input to celcius
function toCelcius(fahrenheit) {
    const degCel = (5 / 9) * (fahrenheit - 32); 
    return degCel;
}

// display message based on temperature in fahrenheit

function fahrenMsg(fahrenheit) {
    let msg = degFahren + "\xB0 Fahrenheit is " + degCel + "\xB0 "; if (fahrenheit < 69) {
        alert(msg + "\n Oh that's cold!");
    } else if (fahrenheit > 69 && fahrenheit < 83) {
        alert(msg + "\n Temperature is just right!");
    } else {
        alert(msg + "\n Its way too hot!");
    }

}