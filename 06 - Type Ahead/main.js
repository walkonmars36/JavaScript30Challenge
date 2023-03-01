const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter((placeName) => {
    const regex = new RegExp(wordToMatch, "gi");
    return placeName.city.match(regex) || placeName.state.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((placeName) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = placeName.city.replace(regex, `<span class="hl">${this.value}</span>`);
      const stateName = placeName.state.replace(regex, `<span class="hl">${this.value}</span>`);
      const formattedPopulation = Number(placeName.population).toLocaleString();

      return `
        <li>
            <span class='name'>${cityName}, ${stateName}</span>
            <span class='population'>${formattedPopulation}</span>
        
        </li>
    `;
    })
    .join(" ");
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("keyup", displayMatches);
