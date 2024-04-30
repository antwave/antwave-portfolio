FROM node:22-alpine3.18
WORKDIR /portfolio_antwave/

COPY public/ /portfolio_antwave/public
COPY src/ /portfolio_antwave/src
COPY package.json /portfolio_antwave/

RUN npm install
RUN npm run build

CMD ["serve", "-s", "start"]