FROM node:16.17-alpine3.15

RUN mkdir client

WORKDIR /client

ENV PATH /client/node_modules/.bin:$PATH

COPY ./package.json ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["yarn","start"]