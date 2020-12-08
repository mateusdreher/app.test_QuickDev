const BASE_URI = 'http://localhost:3000/api/movies';

function request(endpoint) {
    let url = `${BASE_URI}/${endpoint}`;

    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open('GET', url, false);
    xmlHttpRequest.send(null);
   
    if (xmlHttpRequest.status === 200) {
        return JSON.parse(xmlHttpRequest.responseText);
    }
    
    return {
        status: `Error ${xmlHttpRequest.status}`,
        error: xmlHttpRequest.responseText
    }
}
