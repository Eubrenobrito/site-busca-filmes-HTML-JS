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
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
}