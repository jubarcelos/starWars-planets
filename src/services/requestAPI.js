const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default async function getPlanets() {
  try {
    const response = await fetch(url);
    const dataAPI = await response.json();
    return dataAPI.results;
  } catch (error) {
    console.log(error);
  }
}
// sempre tratar a resposta depois do resultado do json, sábias palavras de Rafael! =)
