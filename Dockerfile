# Dockerfile
FROM node:14-alpine

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy application code
COPY . .

# Expose port
EXPOSE 3005

# Command to run the application
CMD ["node", "app.js"]
