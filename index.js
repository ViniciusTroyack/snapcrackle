//Função SnapCrackle

function snapCrackle(maxValue) {

    let frase = "";

    for (let i = 1; i <= maxValue; i++) {
        if (i % 2 !== 0 && i % 5 === 0) {
            frase += "SnapCrackle, ";
        }
        else if (i % 5 === 0) {
            frase += "Crackle, "
        }
        else if (i % 2 !== 0) {
            frase += "Snap, ";
        }
        else {
            frase += i + ", ";
        }
    }
    console.log(frase);
}
//Função SnapeCraclePrime - Entrega Bonus \o/

//Função para verificar se é primo
function isPrime(num) {
    let prime = false
    let aux = 0
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            aux += 1;
        }
    }
    if (aux === 2) {
        prime = true;
    }
    return prime;
}
//Função bonus
function snapCracklePrime(maxValue) {

    let frase = "";

    for (let i = 1; i <= maxValue; i++) {
        if (isPrime(i) === true && i % 2 !== 0 && i % 5 === 0) {
            frase += "SnapCracklePrime, ";
        }
        else if (i % 2 !== 0 && i % 5 === 0) {
            frase += "SnapCrackle, ";
        }
        else if (i % 5 === 0) {
            frase += "Crackle, "
        }
        else if (isPrime(i) === true && i % 2 !== 0) {
            frase += "SnapPrime, ";
        }
        else if (i % 2 !== 0) {
            frase += "Snap, ";
        }
        else if (isPrime(i) === true) {
            frase += "Prime, ";
        }
        else {
            frase += i + ", ";
        }
    }
    console.log(frase);
}
