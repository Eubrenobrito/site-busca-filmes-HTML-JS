document.getElementById('formulario').addEventListener('submit', pesquisarFilme);

function pesquisarFilme(e){
    var filmePesquisa = document.getElementById('pesquisar').value;
    buscarFilmes(filmePesquisa);
    e.preventDefault();
}
function buscarFilmes(filmePesquisa){
    axios.get('https://www.omdbapi.com?apikey=623bf177&s=' + filmePesquisa)
          .then(function (response) {
            // handle success
            console.log(response);
            var filmes = response.data.Search;
            var mostrarFilme = '';

            for(var i = 0; i < filmes.length; i++){
              mostrarFilme += `
                <div class="col-sm-6 col-md-4">
                  <div class="thumbnail" >
                    <img src="${filmes[i].Poster}" class="img-thumbnail" onclick="filmeDetalhes('${filmes[i].imdbID}')">
                    <h4> ${filmes[i].Title}</h4>
                      <p><a href="#" class="btn btn-primary" role="button" onclick="filmeDetalhes('${filmes[i].imdbID}')">Ver Detalhes</a></p>
                  </div>
                </div> 
              `
              // a função buscarFilmes retorna o monstrarFilmes
            }

            document.getElementById('filmes').innerHTML = mostrarFilme;
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
}
// --------------------------------------------

function filmeDetalhes(id){
  sessionStorage.setItem('filmeID', id);
  window.location ='detalhes.html';
  return false;
}

