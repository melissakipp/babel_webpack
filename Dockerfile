FROM node:14.16.1-alpine3.10
WORKDIR /usr/src/app
COPY ["package*.json", "./"]
RUN npm install && mv node_modules ../
COPY . .
EXPOSE 3000
CMD npm start