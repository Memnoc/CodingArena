let nextPage = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";
let allData = [];
const load_more_button = document.getElementById("load-btn");

const makeRequest = async (url) => {
  try {
    const response = await fetch(nextPage);
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    const data = await response.json();

    allData = [...allData, ...data.results];
    nextPage = data.next;

    return allData;
  } catch (error) {
    console.error(`Something went wrong fetching the data: ${error}`);
  }
};

// usage
load_more_button.addEventListener("click", () => {
  makeRequest().then((data) => console.log(data));
});
