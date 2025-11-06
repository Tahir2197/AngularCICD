# ==========================================================
# Dockerfile to serve built Angular app using Nginx
# ==========================================================

# Use official Nginx lightweight image
FROM nginx:stable-alpine

# Remove default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular build output (adjust if your dist folder name differs)
COPY dist/angular-practice/ /usr/share/nginx/html/

# Copy custom Nginx configuration
# Use /etc/nginx/conf.d/default.conf (preferred for modular configs)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Set proper permissions for Nginx user
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
