const greeting = 'Hello World';
console.log(greeting);

const getData = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
};

getData('https://jsonplaceholder.typicode.com/posts');

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