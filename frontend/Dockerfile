FROM node

WORKDIR /frontend
COPY package.json  yarn.lock /frontend/

RUN yarn --silent
COPY . ./

RUN yarn build --silent 
EXPOSE 3000

CMD yarn && yarn run start
