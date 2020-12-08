var divPoster = document.getElementsByClassName('poster')[0];
var divMainInfos = document.getElementsByClassName('main-infos')[0];
var divOverview = document.getElementsByClassName('overview')[0];
var mainTable = document.getElementsByClassName('table')[0];
var bodyTable = document.getElementsByTagName('tbody')[0];
var divBackground = document.getElementsByTagName('header')[0];
var pageTitle = document.getElementsByTagName('title')[0];

window.onload = function(){

    let movieInfos = JSON.parse(localStorage.getItem('details'));
    console.log(movieInfos);
    setPageTitle(movieInfos.title);
    setPoster(movieInfos.poster_path);
    setBackground(movieInfos.backdrop_path);
    setMainInfos(movieInfos.title, movieInfos.genres);
    setOverview(movieInfos.overview);

    let aditionalInfos = { 
        'Release Date': movieInfos.release_date,
        'Average': movieInfos.vote_average,
        'Budget': movieInfos.budget.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}),
        'Original Lanaguage': movieInfos.original_language,
        'Original title': movieInfos.original_title,
        'Popularity': movieInfos.popularity,
        'Productors': movieInfos.production_companies,
        'Duration time': movieInfos.runtime,
        'Spoken Languages': movieInfos.spoken_languages,
        'Status': movieInfos.status
    };

    setAditionalInfos(aditionalInfos);
    
}

function setPageTitle(title) {
    pageTitle.innerHTML = title;
}

function setMainInfos(title, genres) {
    divMainInfos.children[0].innerHTML = `<i>${title}</i>`;

    Object.keys(genres).forEach((index) => {
        let genre = genres[index];

        let newTagGenre = document.createElement('div');
        newTagGenre.setAttribute('class', 'tag-genre');
        newTagGenre.appendChild(document.createTextNode(genre.name));
        divMainInfos.children[1].appendChild(newTagGenre);
    });
    
}
function setAditionalInfos(infos) {
    let production_companies = [];
    let spoken_languages = [];

    infos.Productors.forEach((value) => {
        production_companies.push(value.name);
    });

    infos['Spoken Languages'].forEach((value) => {
        spoken_languages.push(value.name);
    });

    infos.Productors = production_companies;
    infos['Spoken Languages'] = spoken_languages;

    Object.keys(infos).forEach((index) => {
        let newLine = document.createElement('tr');
        let newTh = document.createElement('th');
        let newTd = document.createElement('td');

        newTh.innerHTML = `<i>${index}</i>`;
        newTd.innerHTML = infos[index];

        newLine.appendChild(newTh);
        newLine.appendChild(newTd);

        mainTable.appendChild(newLine);
    });
}

function setOverview(overview) {
    divOverview.children[1].innerHTML =overview;
}

function setPoster(path) {
    let posterUrl = returnImageUrl(path);
    
    divPoster.children[0].setAttribute('src', posterUrl);
}

function setBackground(path) {
    let backgroundUrl = returnImageUrl(path);
    
    divBackground.children[0].setAttribute('src', backgroundUrl);
}

function returnImageUrl(path) {
    return `https://image.tmdb.org/t/p/original/${path}`;
}
