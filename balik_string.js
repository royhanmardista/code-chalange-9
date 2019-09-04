var kata = "hello world!";
function balikString(string) {
    var balikKata = "";
    for (var i = kata.length-1; i >= 0; i-- ) {
        balikKata += kata[i];    
    }
    return balikKata;
}
console.log(balikString(kata));
