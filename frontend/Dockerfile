FROM node
 
WORKDIR /frontend
COPY package.json yarn.lock ./
 
RUN yarn --silent
COPY . ./
 
RUN yarn build --silent
EXPOSE 3000

CMD ["yarn", "run", "start"]
