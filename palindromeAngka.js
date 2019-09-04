function angkaPalindrome(angka) {
    /**fungsi akan mengembalikan nilai palindrom dari angka setelah angka yang dimasukkan */
    if (angka < 9) {
        return angka + 1;
    } else {
        while (true) {
            angka += 1;                      
            var palindrom = String(angka).split("").reverse().join(""); 
            palindrom = Number(palindrom);        
            if (angka === palindrom) {
                return palindrom;
            }
        }
    }
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
