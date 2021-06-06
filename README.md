# Babel Webpack Starter with Docker

A starter pack to build JavaScript applications using standards from ES2015, ES2016 & ES2017. It uses webpack, Babel and webpack-dev-server to compile and serve. It is fully compatible with Async/Await as it uses the Babel polyfill.

### Version
1.1.0

## Usage

### Installation

If you do not have NodeJS and NPM install on your machine, this will install the dependencies into an image.

```sh
$ docker compose run modernjs npm install
```

### To start the container and serve
To serve in the browser  - Runs webpack-dev-server

```sh
$ docker compose up
```

App running on http://localhost:8080
Mock JSON DB on http://localhost:3000

<!-- ### Build
Compile and build

```sh
$ npm run build
```

## More Info -->

### Author

[Melissa Kipp](https://melissajkipp.com)

### License

This project is licensed under the MIT License