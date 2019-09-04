function palindrome (kata) {
    /**fungsi ini akan mengembalikan true jika kata berupa polindrom */
    var newKata = kata.split("").reverse().join("")
    return newKata === kata;
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false