const sum = (a,b) => {
    return a + b
}

function fromDollarToYen(dolar){
    return dolar*155.69;
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

function fromYenToPound(yen){
    return yen*0.0048;
}

module.exports = {
    sum,
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
}

