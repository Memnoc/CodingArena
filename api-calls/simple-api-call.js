// let's desgin a simple api call using fetch
const makeRequest = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error status", ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error", error);
  }
};

makeRequest("https://pokeapi.co/api/v2/pokemon?limit=50").then((data) =>
  console.log(data),
);
