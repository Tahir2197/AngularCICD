# Multi-stage Dockerfile for an Angular application

FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --silent

# Copy source and build (adjust script/flags if your project differs)
COPY . .
RUN npm run build -- --configuration production

# Serve with nginx
FROM nginx:stable-alpine
RUN rm -rf /usr/share/nginx/html/*
# Copy built files (handles dist/<project-name> layout)
COPY --from=builder /app/dist/* /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]te