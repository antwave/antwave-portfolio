FROM node:22-alpine3.18
WORKDIR /portfolio_antwave/
RUN apk update && apk add bash
COPY . .

RUN npm install
RUN npm run build

CMD ["npx", "serve", "-s", "start"]