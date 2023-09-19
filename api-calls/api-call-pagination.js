const makeRequest = async (url) => {
  let allData = [];
  let nextPage = url;
  let pagesFetched = 0;
  const maxPages = 5;

  try {
    while (nextPage && pagesFetched < maxPages) {
      console.log(nextPage);
      const response = await fetch(nextPage);
      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`);
      }
      const data = await response.json();

      allData = [...allData, ...data.results];
      nextPage = data.next;
      pagesFetched++;

      if (pagesFetched >= maxPages) {
        console.log(`Reached the limit of ${maxPages} pages.`);
        break;
      }
    }

    return allData;
  } catch (error) {
    console.error("An error occurred fetching the data", error);
  }
};

makeRequest("https://pokeapi.co/api/v2/pokemon").then((data) =>
  console.log(data),
);
