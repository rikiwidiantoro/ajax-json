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

        $.each(datas, function(index, menus) {

            // // console.log(index);
            // console.log(menus[1].nama);
            $.each(menus, function(index, menu) {
                // console.log(menu.nama);



                $('.row1').html(
                    `
                        <div class="col-sm-4 text-center mt-2">
                            <div class="card">
                                <div class="card-header">
                                    ${menu.nama}
                                </div>
                                <div class="card-body">
                                    <img src="../images/${menu.gambar}" alt="${menu.nama}" width="200">
                                    <p><strong class="badge badge-warning"><h5>${menu.kategori}</h5></strong></p>
                                    <p class="card-text">${menu.deskripsi}</p>
                                    <a href="#" class="btn btn-primary">See Detail</a>
                                </div>
                            </div>
                        </div>
                    `
                ) 



            });

        });


    });

});