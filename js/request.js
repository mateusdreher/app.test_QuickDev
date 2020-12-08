const BASE_URI = 'http://localhost:3000/api/movies';

function request(endpoint) {
    showLoader();
    let url = `${BASE_URI}/${endpoint}`;

    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open('GET', url, false);
    xmlHttpRequest.send(null);
   
    if (xmlHttpRequest.status === 200) {
        hideLoader();
        return JSON.parse(xmlHttpRequest.responseText);
    }
    
    hideLoader();

    return {
        status: `Error ${xmlHttpRequest.status}`,
        error: xmlHttpRequest.responseText
    }
}

