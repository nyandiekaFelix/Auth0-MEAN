/*
    Detect the host environment and set the app's base URI
    and the API's base URI  
*/

function getHost(){
    const protocol = window.location.protocol;
    const host = window.location.host;

    return `${protocol}//${host}`;
}

const _isDev = window.location.port.indexOf('4200') > -1;
const apiURI = _isDev ? 'http://localhost:5555/api/' : '/api/';

export const ENV = {
    BASE_URI: getHost(),
    BASE_API: apiURI
};