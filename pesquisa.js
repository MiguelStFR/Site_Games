function pesquisar(string, data) {
    var dados = JSON.parse(data)
    var str = string.toLowerCase()
    let resultado = ''
    var existe = false

    for (i = 0; i < dados.results.length; i++) {
        var aux = dados.results[i].name.toLowerCase()
        if (aux.includes(str)) {
            existe = true
            console.log(dados.results[i].name)

            resultado += `
                        <div class="col-lg-3 col-md-4 col-sm-6" id="Games_P">
                            <a href="detalhes.html?id=${dados.results[i].id}" id="Img_plataformas" target="_blank">
                                <img src="${dados.results[i].background_image}"/>       
                                <h2>${dados.results[i].name}</h2>
                            </a>
                        </div>
                        `
        }

        for (j = 0; j < dados.results[i].genres.length; j++) {
            var aux2 = dados.results[i].genres[j].name.toLowerCase()
            if (!aux.includes(str) && aux2.includes(str)) {
                existe = true
                console.log(dados.results[i].name)
                resultado += `
                        <div class="col-lg-3 col-md-4 col-sm-6" id="Games_P">
                            <a href="detalhes.html?id=${dados.results[i].id}" id="Img_plataformas" target="_blank">
                                <img src="${dados.results[i].background_image}"/>       
                                <h2>${dados.results[i].name}</h2>
                            </a>
                        </div>
                        `
            }
        }
    }

    if (existe != true) {
        alert('Nenhum resultado encontrado')
        document.getElementById('Resultado').innerHTML = resultado

    } else {
        document.getElementById('Resultado').innerHTML = resultado
    }
}

function ocultar() {
    console("Apagar ativado")
    let str = ''
    document.getElementById('Resultado').innerHTML = str
}



async function getResultado(string) {
    // console.log('String: ' + string)

    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    }

    let response = await fetch("https://api.rawg.io/api/games?key=a4a3e4ecc06c4cb696ad30b75439ba7a&dates=2019-09-01,2019-09-30&platforms=18,1,7", {
        method: "GET",
        headers: headersList
    });

    let data = await response.text();

    pesquisar(string, data)
}