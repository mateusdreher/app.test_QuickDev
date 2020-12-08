var mainTable = document.getElementsByClassName('table')[0];
var bodyTable = document.getElementsByTagName('tbody')[0];

function generateTable(movies) {
    movies = ordenar(movies);

    bodyTable.innerHTML = "";
    Object.keys(movies).forEach((index) => {

        let lineValues = [movies[index].title, movies[index].release_date, movies[index].genre_names, movies[index].vote_average];

        let newLine = addTableLine(movies[index].id, lineValues);

        bodyTable.appendChild(newLine);

    });

    mainTable.appendChild(bodyTable);
    mainTable.style.display = 'block';


}

function addTableLine(id, lineInfo) {
    
    let newLine = document.createElement('tr');

    lineInfo.forEach((value) => {
        let newColumn = document.createElement('th');
        newColumn.appendChild(document.createTextNode(value));
        newColumn.id = id;
        newLine.appendChild(newColumn);
    });

    return newLine;
}


function ordenar(value, param) {
    
    return value.sort((a, b) => {
        return (a.title > b.title) ? 1 : -1;
    });
}