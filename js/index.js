var modalMovieDetails = document.getElementsByClassName('details')[0];
var bodyTable = document.getElementsByTagName('tbody')[0];

window.onload = function() {

    let response = getAllMovies();
    
    generateTable(response);
    
}

bodyTable.addEventListener('click', (event) => {
    getMovieDetails(event.target.id);
});

function getAllMovies() {
    return request('');
}

function getMovieDetails(movieId){
    let response = request(`details/${movieId}`);
    localStorage.clear();
    localStorage.setItem('details', JSON.stringify(response));
    location.href = `file:///home/mateusdreher/Desktop/Projetos/Teste%20Quickdev/app.test_QuickDev/pages/movieDetails.html`;
}

