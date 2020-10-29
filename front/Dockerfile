FROM node:lts-alpine

WORKDIR /app

# Packages
# COPY ts*.json ./
COPY package*.json ./
# RUN npm install -g babel-cli
RUN npm install

# Folders
# COPY config ./config
# COPY public ./static
COPY public ./public
COPY src ./src

# RUN mkdir ./data

# RUN mkdir ./data/artists
# COPY data/artists ./data/artists

# RUN mkdir ./data/wiki

# COPY data/db ./data/db

# COPY ./ /app/

# Envs
ENV DEBUG 1
ENV HOST 0.0.0.0

# Port to expose
EXPOSE 3000

ENTRYPOINT [ "npm", "start"]
