FROM node:latest

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

COPY index.js ./

EXPOSE 3000

CMD ["yarn", "start"]
