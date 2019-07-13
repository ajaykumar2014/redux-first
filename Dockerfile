# base image
FROM node:10.15.0

# set working directory
#RUN mkdir /home/node/app

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json

#COPY /public /src ./

RUN npm install --silent
RUN npm install react-scripts -g --silent


# start app
CMD ["npm", "start"]
