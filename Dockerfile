FROM node:24
WORKDIR /app
COPY app.js .
COPY package*.json .
RUN npm install
EXPOSE 3000
CMD [ "node", "app.js" ]