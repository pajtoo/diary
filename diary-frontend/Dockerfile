##
## Stage 1: Build React App
##
FROM node:23-alpine3.20 AS frontend-build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code of the application
COPY . .

# Build the application
RUN npm run build

##
## Stage 2: Nginx to serve static files
##
FROM nginx:1.27.3-alpine3.20-slim

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Add custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d

# Copy the built React app to the directory served by Nginx
COPY --from=frontend-build /app/build /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]
