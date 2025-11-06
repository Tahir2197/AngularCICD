# Dockerfile to serve built Angular dist files

FROM nginx:stable-alpine

# Clear default nginx web content
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular dist output from GitHub pipeline into nginx
COPY dist/angular-practice/ /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
