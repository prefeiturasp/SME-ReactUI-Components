# Stage: BUILD
FROM node:12.18-alpine
COPY . /src
WORKDIR /src
ENV PATH /src/node_modules/.bin:$PATH
RUN npm install && \ 
#    npm install react-scripts@3.4.1 -g && \ 
   npm run build-storybook && \ 
   mv storybook-static /app

# Stage: RUN
FROM nginx:1.19-alpine
COPY --from=0 /src /src
COPY --from=0 /app /app
RUN cp /src/docker/nginx.conf /etc/nginx/nginx.conf && \ 
    mv /app /var/www && \ 
    rm -Rf /src
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
