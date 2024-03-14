var numero1 = 0, numero2 = 0, sumadiv1 = 0, sumadiv2 = 0;

//Fase 1
numero1 = parseInt(prompt("Ingrese el primer numero "));
for (divisor = 1; divisor < numero1; divisor++) {
    if (numero1 % divisor === 0) {
        console.log(divisor + " divide a " + numero1);
        sumadiv1 += divisor;
    }
}
console.log(sumadiv1 + " suma de divisores de " + numero1)

numero2 = parseInt(prompt("Ingrese el primer numero "));
for (divisor = 1; divisor < numero2; divisor++) {
    if (numero2 % divisor === 0) {
        console.log(divisor + " divide a " + numero2);
        sumadiv2 += divisor;
    }
}
console.log(sumadiv2 + " suma de divisores de " + numero2)


//FASE2
if (sumadiv1 == numero2) {
    alert(numero1 + " y " + numero2 + " son numeros amigos")
} else {
    alert(numero1 + " y " + numero2 + " no son numeros amigos")
}