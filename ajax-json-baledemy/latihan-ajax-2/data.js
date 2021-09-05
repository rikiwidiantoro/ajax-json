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