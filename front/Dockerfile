FROM node:carbon

WORKDIR /usr/www

COPY package*.json ./

RUN npm install

COPY ./ /usr/www/

ENV DEBUG=1
ENV HOST=0.0.0.0
# EXPOSE 8080
EXPOSE 3000

ENTRYPOINT [ "npm", "start"]
