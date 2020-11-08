FROM node
 
ADD . .
WORKDIR /frontend
COPY package.json yarn.lock ./
 
EXPOSE 3000

CMD yarn && yarn run start
