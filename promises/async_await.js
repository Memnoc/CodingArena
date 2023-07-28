// async awaut offers some syntactic sugar on top of promises
// it's still promises under the hood
// but a much shorter syntax
// much easier and you get to customise the error handling part

const makeRequest = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};

makeRequest("https://pokeapi.co/api/v2/pokemon?limit=50").then((data) =>
  console.log(data)
);
