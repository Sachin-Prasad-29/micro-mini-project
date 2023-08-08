# get base image of node installed 
FROM node:16-alpine


# Some changes
ENV CI=true
ENV WDS_SOCKET_PORT=0
# Setup working directory
WORKDIR /app

# First copy only package.json to aviod over building of npm install
COPY package.json ./

# run the build command
RUN npm install

# copy the other files from local to container
COPY ./ ./

#default command
CMD ["npm","start"]
