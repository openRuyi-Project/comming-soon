FROM nginx:1.27-alpine

# Serve the static site from the repository root.
COPY index.html /usr/share/nginx/html/index.html
COPY assets /usr/share/nginx/html/assets

EXPOSE 80
