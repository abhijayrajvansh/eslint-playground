# Use the official Node.js image based on Alpine Linux
FROM node:18-alpine

# Install git
RUN apk add --no-cache git bash

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY eslint.config.mjs ./ 

# Command to run ESLint
CMD ["bash"]