FROM node:15-alpine
WORKDIR /app
COPY . .
EXPOSE 3000

CMD ["npm", "start"]
