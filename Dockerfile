FROM nginx:1.23.1-alpine
COPY ./dist /data/Arya/
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80