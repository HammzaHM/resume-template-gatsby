FROM node:13

WORKDIR /usr/src/app

COPY package.json .

RUN yarn global add gatsby-cli

RUN yarn install

COPY . .

EXPOSE 8000

CMD ["gatsby", "develop", "-H", "0.0.0.0"]