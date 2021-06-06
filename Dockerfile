FROM node:14.16.1-alpine3.10
WORKDIR /usr/src/babel_webpack_starter
COPY ["package*.json", "./"]
# RUN npm install && mv node_modules ../
RUN npm install && npm install -g json-server
COPY . .
EXPOSE 8080
CMD npm start