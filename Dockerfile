FROM node:12.22-bullseye-slim

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 80

CMD [ "node", "dist/index.js" ]