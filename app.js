let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))


const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen  = function(valueInDollar) {
    // Convertimos el valor a yen
    let valueInYen = valueInDollar * 156.5;
    // Retornamos el valor en yenes
    return valueInYen;
}

const fromYenToPound  = function(valueInYen) {
    // Convertimos el valor a Pound
    let valueInPound = valueInYen * 0.87;
    // Retornamos el valor oounds
    return valueInPound;
}


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound, sum }
