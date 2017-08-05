FROM node:7

WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app

# `npm run serve` will build the dist files and serve from dist
CMD npm run serve
EXPOSE 8081
