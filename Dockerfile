FROM nginx
RUN mkdir /app
COPY --from=0 dist/ /app
COPY nginx.conf /etc/nginx/nginx.conf