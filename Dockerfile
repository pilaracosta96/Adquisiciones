FROM node:20.11-alpine3.18

WORKDIR /app

COPY package*.json ./


RUN npm install

COPY . .

EXPOSE 4200

# ENV BACKEND_URL=http://localhost:8080/api/

CMD ["npm", "start"] 
