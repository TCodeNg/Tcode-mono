FROM nginx:1.15.6-alpine
COPY nginx.conf.template /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY . /usr/share/nginx/html/
