# Stage: BUILD
FROM node:14.4-alpine
COPY . /src
WORKDIR /src
ENV PATH /src/node_modules/.bin:$PATH
RUN npm install && \ 
   npm install react-scripts@3.4.1 -g && \ 
   npm run build-storybook && \ 
   mv storybook-static /app

# Stage: RUN
FROM nginx:1.19-alpine
RUN cp /src/docker/nginx.conf /etc/nginx/nginx.conf && \ 
    mv /app /var/www && \ 
    rm -Rf /src
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
