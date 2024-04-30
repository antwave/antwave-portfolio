FROM node:22-alpine3.18
WORKDIR /portfolio_antwave/

COPY public/ /react-docker-example/public
COPY src/ /react-docker-example/src
COPY package.json /react-docker-example/

RUN npm install

CMD ["npm", "start"]