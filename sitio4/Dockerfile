FROM node:21-alpine

WORKDIR /app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install 

# add app
COPY . ./

# start app
CMD ["npm", "start"]