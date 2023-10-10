# Base image with Node.js
FROM node:18-alpine AS deps

# Set work directory
RUN mkdir /app
WORKDIR /app
COPY . /app/
RUN npm i
RUN npm run prisma:gen
RUN npm run build

# Set the command to run your app
CMD ["npm", "run", "start"]
