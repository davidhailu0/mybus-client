FROM node:16.17-alpine3.15

WORKDIR /client

COPY ./package.json ./package-lock.json /

RUN npm install

COPY . .

CMD ["npm","start"]