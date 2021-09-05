const Hero = {
    nama : 'Riki Widiantoro',
    umur : 22,
    pekerjaan : [
        'mahasiswa', 'frontend developer', true
    ]
}

console.log(Hero);





// merubah object menjadi json dengan JSON.stringify()
console.log(JSON.stringify(Hero));

// // merubah json menjadi object dengan JSON.parse()
// // json vanila javascript/ javascript murni
// const ajax = new XMLHttpRequest();

// ajax.open('GET', '../buat-json/aot.json', true);

// ajax.onreadystatechange = function() {
//     if(ajax.readyState === 4 && ajax.status === 200) {
//         // merubah json menjadi object
//         console.log(JSON.parse(this.responseText));
//     }
// }

// ajax.send();

console.log('--------------------------')





// ajax dengan jQuery = dengan getJSON()
$(document).ready(function() {

    // parameter 1 => source/sumber data
    // parameter 2 => fungsi untuk mengambil data
    $.getJSON('../buat-json/aot.json', function(data) {
        console.log(data);
    });
});


// CATATAN PENTING!!
// pada metode mengambil data menggunakan ajax jQuery dengan getJSON() => hasil dari data langsung dalam bentuk objek sehingga tidak perlu parsing,
// jika menggunakan ajax vanila javascript => hasil dari responseText / data masih dalam bentuk JSON sehingga perlu di ubah menjadi objek dengan method JSON.parse()
