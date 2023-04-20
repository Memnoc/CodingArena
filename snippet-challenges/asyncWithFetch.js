
const url = 'https://jsonplaceholder.typicode.com/todos/1';
const posts = 'https://jsonplaceholder.typicode.com/posts';
const users = 'https://jsonplaceholder.typicode.com/users';

export const fetchData = () => {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
};


export const fetchPostData = () => {
  fetch(posts)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
};


export const fetchUsersData = () => {
  fetch(users)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
}

