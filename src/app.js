import "core-js/stable";
import "regenerator-runtime/runtime";
import { http } from './http';
import { ui } from './ui';

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Get Posts
function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

// Submit Post
function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  const data = {
    title,
    body
  }

  // Create Post
  http.post('http://localhost:3000/posts', data)
    .then(data => {
      ui.showAlert('Post added', 'alert alert-success');
      ui.clearFields();
      getPosts();
    })
    .catch(err => console.log(err));
}

// const getData = async (url) => {
//   const response = await fetch(url);
//   const result = await response.json();
//   console.log(result);
// };

// getData('https://jsonplaceholder.typicode.com/posts');


// Bret Fisher: Docker for Node.js course Video 25
// quit on ctrl-c when running docker in terminal
process.on("SIGINT", function onSigint() {
  console.info("Got SIGINT (aka ctrl-c in docker). Graceful shutdown ", new Date().toISOString());
  shutdown();
});

// quit properly on docker stop
process.on("SIGTERM", function onSigterm() {
  console.info("Got SIGTERM (docker container stop). Graceful shutdown ", new Date().toISOString());
  shutdown();
});

// shut down server
function shutdown() {
  // NOTE: server.close is for express based apps
  // If using hapi, use `server.stop`
  server.close(function onServerClosed(err) {
    if (err) {
      console.error(err);
      process.exitCode = 1;
    }
    process.exit();
  })
};
// END Bret Fisher