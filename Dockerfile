FROM node:12.18.4-alpine

LABEL maintainer="rogerkondrat.work@gmail.com || rogerkondrat.lhl@gmail.com"
LABEL author="Roger Kondrat"

RUN mkdir -p /src/app/node_modules && chown -R node:node /src/app
WORKDIR /src/app


COPY package*.json ./
RUN npm install --silent

COPY . ./

ENV PORT=5000

EXPOSE 5000

CMD [ "npm", "run", "local" ]