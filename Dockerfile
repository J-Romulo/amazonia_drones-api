FROM node:lts-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --omit=dev 

COPY . .

RUN npm run build