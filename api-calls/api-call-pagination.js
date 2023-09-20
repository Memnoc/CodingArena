/* A basic pagination logic for fetching API results
 *
 * We need:
 *
 * 1 - an empty data structure to store the fetched results
 * and merge them as one.
 * 2 - the url for the next prop ?page=1 or similar; (APIs with cursors like
 * like the zendesk one provide null if there are no pages). The poke API instead offers
 * a limit plus an offset for the next property, so we target that as the url; as long as you
 * hit that url, the api paginates forward.
 * 3 - we need an iterator, to keep track of the pages fetched; again, not needed in
 * APIs with cursor pagination.
 * 4 - A limit boundary in the form of a variable - i.e. how many pages to fetch
 *
 * The rest of the logic is a while-loop that keeps iterating until
 * the url is true and/or the limit boundaies are equal to the iterator
 * i.e. until there is a next page, and the mount of pages is less or equal the
 * maxPages, keep going.
 *
 * */

const makeRequest = async () => {
  let allData = [];
  let nextPage = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";
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

makeRequest().then((data) => console.log(data));
