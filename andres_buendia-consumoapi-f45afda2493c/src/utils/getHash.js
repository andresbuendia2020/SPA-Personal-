const getHash= () =>
location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
//['','1','']
//http://LocalLhost:8080/#/1/

export default getHash;
