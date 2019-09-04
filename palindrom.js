function palindrome (kata) {
    /**fungsi ini akan mengembalikan true jika kata berupa polindrom */
    var newKata = "";
    for (var i = kata.length-1; i >= 0; i--) {
        newKata += kata[i]
    }
    return newKata === kata;
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false