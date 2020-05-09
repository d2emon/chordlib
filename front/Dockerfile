FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

# COPY ts*.json ./
# COPY config ./config
# COPY src ./src

# RUN mkdir ./data
# RUN mkdir ./data/artists
# RUN mkdir ./data/wiki

# COPY data/artists ./data/artists
# COPY data/db ./data/db

COPY ./ /app/

ENV DEBUG 1
ENV HOST 0.0.0.0
# EXPOSE 8080
EXPOSE 3000

ENTRYPOINT [ "npm", "start"]
