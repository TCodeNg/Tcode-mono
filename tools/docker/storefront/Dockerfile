FROM nginx:1.15.6-alpine
COPY nginx.conf.template /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY ./build/ /usr/share/nginx/html/
RUN ls -la /usr/share/nginx/html/*
RUN ls -la /usr/share/nginx/html/assets/img/*
RUN ls -la /usr/share/nginx/html/assets/fonts/*
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
