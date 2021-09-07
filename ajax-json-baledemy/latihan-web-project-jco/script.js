// // javascript biasa
// function ajx() {
//     let ajax = new XMLHttpRequest();

//     ajax.open('GET', 'data/donuts.json', true);

//     ajax.onreadystatechange = function() {
//         if( ajax.readyState === 4 && ajax.status === 200 ) {
//             let data = JSON.parse(this.responseText);

//             console.log(data.menu[0].nama);

//         }
//     }

//     ajax.send();
// }

// ajx();



// jQuery
$(document).ready(function() {

    // mengambil data dari json
    $.getJSON('data/donuts.json', function(datas) {

        // console.log(datas.menu[1].deskripsi); >> cara detail


    });

});