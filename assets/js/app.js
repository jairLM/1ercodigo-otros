const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //.name
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) { //se agrego async
  $n.textContent = 'cargando...';
  const responseJson = await fetch(baseEndpoint `${usersEndpoint}/${username}`);
  const response = await responseJson.json(); //se paso los datos de json a object
  console.log(response);
  $n.textContent = `${response.name}`; //se agrego ``
  $b.textContent = `${response.blog}`;//se agrego ``
  $l.textContent = `${response.location}`;//se agrego ``
  return response//return
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').then().catch(handleError);