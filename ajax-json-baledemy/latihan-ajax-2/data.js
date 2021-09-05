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

// merubah json menjadi object dengan JSON.parse()
// json vanila javascript/ javascript murni
const ajax = new XMLHttpRequest();

ajax.open('GET', '../buat-json/aot.json', true);

ajax.onreadystatechange = function() {
    if(ajax.readyState === 4 && ajax.status === 200) {
        // merubah json menjadi object
        console.log(JSON.parse(this.responseText));
    }
}

ajax.send();

console.log('--------------------------')

// ajax dengan jQuery


