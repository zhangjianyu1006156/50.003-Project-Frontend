# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /

# add `/reactjs/node_modules/.bin` to $PATH
#ENV PATH /node_modules/.bin:$PATH

# Copy over and npm install
COPY . ./
RUN npm install

# start app
CMD ["npm", "start"]
