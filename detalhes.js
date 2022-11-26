function Detalhes(id, data) {
    console.log('ID Detalhes: ' + id)
    var dados = JSON.parse(data)
        // let i = dados.results.findIndex(elem => elem.id = id)

    for (var i = 0; dados.results[i].id != id; i++);
    console.log('i: ' + i)

    var aux = dados.results[i]

    if (i != -1) {
        let str = `
                <div class="col-12" id="img_DETALHES">
                    <h1>${aux.name}</h1>
                    <img src="${aux.background_image}" />
                            <p>Atualizado: ${aux.updated}</p>
                </div>
            
                <div class="col-12" id="DETALHES">
                    <div class="row">                
                        <div class="col-lg-6 col-md-12" id="dados_DETALHES">
                            <h4>Lançamento:</h4><p>${aux.released}</p>
                            <h4>Nota:</h4><p>${aux.rating}</p>
                        </div>

                        <div class="col-lg-6 col-md-12" id="dados_DETALHES">
                            <h4>Categoria:</h4> <p>${aux.genres[0].name}</p>
                            <h4>Tags:</h4> <p>${aux.tags[0].name}, ${aux.tags[1].name}, ${aux.tags[2].name}</p>
                        </div>
                    </div>
                </div>

                <div class="col-12" id="Avaliaçoes">
                    <div class="row">
                        <div class="col-12"><h3>AVALIAÇÕES</h3>
                        </div>
                        
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <h5>${aux.ratings[0].title}</h5>
                            <p>Contagem: ${aux.ratings[0].count}</p>
                            <p>Porcentagem: ${aux.ratings[0].percent}</p>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <h5>${aux.ratings[1].title}</h5>
                            <p>Contagem: ${aux.ratings[1].count}</p>
                            <p>Porcentagem: ${aux.ratings[1].percent}</p>
                        </div>
                        
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <h5>${aux.ratings[2].title}</h5>
                            <p>Contagem: ${aux.ratings[2].count}</p>
                            <p>Porcentagem: ${aux.ratings[2].percent}</p>
                        </div>
                        
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <h5>${aux.ratings[3].title}</h5>
                            <p>Contagem: ${aux.ratings[3].count}</p>
                            <p>Porcentagem: ${aux.ratings[3].percent}</p>
                        </div>
                    </div>
                </div>

                <div class="col-12" id="screenshots">
                    <div class="row">
                        <div class="col-12"><h3>SCREENSHOTS</h3></div>
                        
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <img src="${aux.short_screenshots[0].image}"></img>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <img src="${aux.short_screenshots[1].image}"></img>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <img src="${aux.short_screenshots[2].image}"></img>
                        </div>
                    
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <img src="${aux.short_screenshots[3].image}"></img>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <img src="${aux.short_screenshots[4].image}"></img>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <img src="${aux.short_screenshots[5].image}"></img>
                        </div>
                    </div>
                </div>
            `;

        document.getElementById('detalhes').innerHTML = str;
    } else {
        document.getElementById('detalhes').innerHTML = "ERRO"
    }
}

async function getDetalhes(id) {
    console.log(id)

    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    }

    let response = await fetch("https://api.rawg.io/api/games?key=a4a3e4ecc06c4cb696ad30b75439ba7a&dates=2019-09-01,2019-09-30&platforms=18,1,7", {
        method: "GET",
        headers: headersList
    });

    let data = await response.text();

    Detalhes(id, data)
}