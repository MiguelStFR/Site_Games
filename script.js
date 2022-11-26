const xhr = new XMLHttpRequest();
const xhr2 = new XMLHttpRequest();
const xhr3 = new XMLHttpRequest();

var url = 'https://api.rawg.io/api/games?key=a4a3e4ecc06c4cb696ad30b75439ba7a&dates=2019-09-01%2C2019-09-30&platforms=18%2C1%2C7'
var url_2 = 'https://api.rawg.io/api/platforms?key=a4a3e4ecc06c4cb696ad30b75439ba7a'

// xhr4.open('GET', url, true)

function Destaque() {
    var dados = JSON.parse(xhr.responseText)
    var str = '';
    console.log(dados);

    str += `
            <div class="col-12" id="Destaque_Principal">
                <div class="row">
                    <div class="col-12" id="img_Destaque">
                        <img src="${dados.results[0].background_image}" />
                    </div>

                    <div class="col-12" id="Detalhes_Destaque">
                        <h2><b>${dados.results[0].name}</b></h2>
                        <h4>Nota: ${dados.results[0].rating}</h4>
                        <h4>Categoria: ${dados.results[0].genres[0].name}, ${dados.results[0].genres[1].name}</h4>
                        <p>Atualizado: ${dados.results[0].updated}</p>
                        <a href="detalhes.html?id=${dados.results[0].id}" target="_blank" id="Saiba_mais">SAIBA MAIS</a>
                    </div>
                </div>
            </div>

            <div class="col-12"  id="Destaque_Secundário">
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div class="row">
                        <div class="col-12" id="img_Destaque_2">
                            <img src="${dados.results[1].background_image}" />
                        </div>
                        <div class="col-12" id="">
                        <h2><b>${dados.results[1].name}</b></h2>
                        <h4>Nota: ${dados.results[1].rating}</h4>
                        <h4>Categoria: ${dados.results[1].genres[0].name}, ${dados.results[0].genres[1].name}</h4>
                        <p>Atualizado: ${dados.results[1].updated}</p>
                            <a href="detalhes.html?id=${dados.results[1].id}" target="_blank" id="Saiba_mais">SAIBA MAIS</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="row">
                        <div class="col-12" id="img_Destaque_2">
                            <img src="${dados.results[5].background_image}" />
                        </div>
                        <div class="col-12" id="">
                        <h2><b>${dados.results[5].name}</b></h2>
                        <h4>Nota: ${dados.results[5].rating}</h4>
                        <h4>Categoria: ${dados.results[5].genres[0].name}, ${dados.results[0].genres[1].name}</h4>
                        <p>Atualizado: ${dados.results[5].updated}</p>
                            <a href="detalhes.html?id=${dados.results[5].id}" target="_blank" id="Saiba_mais">SAIBA MAIS</a>    
                        </div>
                    </div>
                </div>
                </div>
            </div>
    `
    document.getElementById('Destaques').innerHTML = str;

}

function Mostrar_Games() {
    var dados = JSON.parse(xhr3.responseText)
    var str = '';
    console.log(dados);

    for (i = 6; i < 18; i++) {
        str +=
            `
                <div class="col-md-4 col-6" id="Games">
                    <a href="detalhes.html?id=${dados.results[i].id}" id="Img_plataformas" target="_blank">
                        <img src="${dados.results[i].background_image}"/>       
                        <h2>${dados.results[i].name}</h2>
                    </a>
                </div>
            `
    }
    document.getElementById('Games').innerHTML = str;
}

function getDados() {
    var str = ''
    console.log(dados)
}



function Plataformas() {
    var dados = JSON.parse(xhr2.responseText)
    var str = '';
    console.log(dados);
    for (i = 0; i < 6; i++) {
        str +=
            ` <div class="col-lg-4 col-12" id="plataformas">
                <a href="detalhes.html?id=${dados.results[i].id}" id="Img_plataformas" target="_blank">
                    <h3>${dados.results[i].name}</h3>
                    <img src="${dados.results[i].image_background}"/>
                    </a>

                <div class="Principais_P">
                    <h4>Jogos</h4>
                    <ul>
                        <li>
                            <a href="#">
                                <p>${dados.results[i].games[0].name}</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <p>${dados.results[i].games[1].name}</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <p>${dados.results[i].games[2].name}</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>`
    }
    document.getElementById('Plataformas').innerHTML = str;

}

function getData() {
    xhr.onload = Destaque
    xhr2.onload = Plataformas
    xhr3.onload = Mostrar_Games

    xhr.open('GET', url, true);
    xhr2.open('GET', url_2, true);
    xhr3.open('GET', url, true);

    xhr.send();
    xhr2.send();
    xhr3.send();
}