FROM node:22-alpine3.18
RUN mkdir /app/
WORKDIR /app/

COPY ./public/ /app/public
COPY ./src/ /app/src
COPY ./package.json /app/

RUN npm install
RUN npm install serve
RUN npm run build

CMD ["serve", "-s", "start"]