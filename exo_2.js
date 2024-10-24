function iseven(number) {
    if (number % 2 === 0) { 
        return true;
    } else {
        return false;
    }
}

// Appels de la fonction à l'extérieur
console.log(iseven(4)); // Affiche true
console.log(iseven(7)); // Affiche false
