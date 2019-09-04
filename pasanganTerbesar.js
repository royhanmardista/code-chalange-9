function pasanganTerbesar(angka) {
    /**fungsi ini akan mengembalikan pasangan angka terbesar */
    var kata = String(angka).split("");
    var arr = [];
    for (var i=0; i<kata.length-1; i++) {
        arr[i] = Number(kata[i]+kata[i+1]);
    }
    return arr.sort((a,b) => {return b-a})[0];
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99