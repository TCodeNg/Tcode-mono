FROM nginx:1.15.6-alpine
COPY nginx.conf.template /etc/nginx/nginx.conf.template
RUN rm -rf /usr/share/nginx/html/*
COPY ./build/* /usr/share/nginx/html/
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/nginx.conf.template > /etc/nginx/conf.d/nginx.conf" && nginx -g 'daemon off;'
