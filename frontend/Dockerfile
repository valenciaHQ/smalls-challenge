FROM node

ARG app_env
ENV NODE_ENV $app_env


RUN mkdir /frontend
 
WORKDIR /frontend
COPY package.json /frontend
 
RUN yarn install --silent
COPY . /frontend
 
RUN yarn build --silent
EXPOSE 3000

CMD ["yarn", "run", "start"]
