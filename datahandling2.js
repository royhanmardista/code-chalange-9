function dataHandling2 (array) {
    array.splice(1,2,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    array.splice(4,1, "Pria", "SMA Internasional Metro")
    console.log(array);
    var ttl = array[3].split("/");      
    switch (ttl[1]) {
        case "01" : {console.log("Januari"); break;}
        case "02" : {console.log("February" ); break;}
        case "03" : {console.log( "Maret"); break;}
        case "04" : {console.log("April"); break;}
        case "05" : {console.log("Mei"); break;}
        case "06" : {console.log("Juni"); break;}
        case "07" : {console.log("juli"); break;}
        case "08" : {console.log("Agustus"); break;}
        case "09" : {console.log("September"); break;}
        case "10" : {console.log("Oktober"); break;}
        case "11" : {console.log("November"); break;}
        case "12" : {console.log("Desember"); break;}
        default : {console.log("data yang anda masukkan salah silahkan ikuti aturan yang ada"); break;}
    }
    console.log(ttl.sort(function(value1, value2) { return value2 - value1 }))
    console.log(ttl.join("-"))
    console.log(array[1].slice(0,15))
}

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

//["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]

dataHandling2(input)