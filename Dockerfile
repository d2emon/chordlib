FROM node
ENV DEBUG chordlib:*
RUN mkdir -p /usr/www
WORKDIR /usr/www
COPY ./package.json /usr/www/
RUN npm install -g babel-cli
RUN npm install
COPY src /usr/www/src
EXPOSE 3000
CMD [ "npm", "start" ]
