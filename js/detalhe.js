
function mostrarFilme(){
    var filmeID = sessionStorage.getItem('filmeID');
  
    axios.get('https://www.omdbapi.com?apikey=623bf177&i=' + filmeID)
            .then(function (response) {
              var filme = response.data;
              console.log(filme);

              var detalheFilme = `
                    <div class="col-md-6">
                        <img src="${filme.Poster}" class="img-rounded">
                            <h3><strong>${filme.Title}</strong></h3>
                    </div>
                                              
                        
                      
                    <div class="col-md-6">
                        <div class="well clearfix">
                                <ul class="list-group">
                                    <li class="list-group-item"><strong>Gênero: </strong>${filme.Genre}</li>
                                    <li class="list-group-item"><strong>lançamento: </strong>${filme.Released}</li>
                                    <li class="list-group-item"><strong>Duração: </strong>${filme.Runtime}</li>
                                    <li class="list-group-item"><strong>Idioma: </strong>${filme.Language}</li>
                                    <li class="list-group-item"><strong>Prêmios: </strong>${filme.Awards}</li>
                                    <li class="list-group-item"><strong>Atores: </strong>${filme.Actors}</li>
                                    <li class="list-group-item"><strong>Pais: </strong>${filme.Country}</li>
                                    <li class="list-group-item"><strong>Diretor: </strong>${filme.Writer}</li>
                                </ul>  
                
                                <h3>Descrição</h3>
                                ${filme.Plot}
                                <hr>
                                <a href="http://imdb.com/title/${filme.imdbID}" target="blank" class="btn btn-success" pull-left">Ver no IMDB</a>
  
                                <a href="index.html" class="btn btn-default" pull-right">Retornar</a>
                        </div>    
                    </div>
              `
  
              document.getElementById('detalheFilme').innerHTML = detalheFilme;
            })
            .catch(function (error) {
              console.log(error);
            });
  }



mostrarFilme();





