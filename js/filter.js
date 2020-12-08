var filterType = document.getElementById('filter-type');
var filterNameValue = document.getElementById('filter-name-value');
var filterGenreValue = document.getElementById('filter-genre-value');

function listGenres() {
    let response = request('genres');

    response.genres.forEach((value) => {
        let newOption = document.createElement('option');
        newOption.value = value.id;
        newOption.appendChild(document.createTextNode(value.name));
        filterGenreValue.appendChild(newOption);
    });
}

function showInputField() {
    let value = filterType.value;

    if (value === 'genre') {
        showFilterGenre();
    }
    else if (value === 'name') {
        showFilterName();
    }
}

function showFilterGenre() {
    listGenres();
    filterNameValue.style.display = 'none';
    filterGenreValue.style.display = 'block';
}

function showFilterName() {
    filterGenreValue.style.display = 'none';
    filterNameValue.style.display = 'block';
}

function filterMovie() {
    let type = filterType.value;
    let value = {
        'name': filterNameValue.value,
        'genre': filterGenreValue.value
    }
    let response = request(`filter/${type}/${value[type]}`);
    generateTable(response);

}