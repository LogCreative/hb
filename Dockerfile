FROM node:latest

WORKDIR /app

COPY packeg*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD ["node", "index.js"]