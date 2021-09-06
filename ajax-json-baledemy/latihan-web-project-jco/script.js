// javascript biasa
function ajx() {
    let ajax = new XMLHttpRequest();

    ajax.open('GET', 'data/donuts.json', true);

    ajax.onreadystatechange = function() {
        if( ajax.readyState === 4 && ajax.status === 200 ) {
            let data = JSON.parse(this.responseText);

            console.log(data.menu[0].nama);

        }
    }

    ajax.send();
}

ajx();