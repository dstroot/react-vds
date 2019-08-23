# Stage 1 - the build process
FROM node:12.9-alpine as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.17.3-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html

# Delete default config
RUN rm /etc/nginx/conf.d/default.conf

# Create config with PORT env variable
COPY default.template /etc/nginx/conf.d/default.template
CMD ["/bin/sh", "-c", "envsubst '${PORT}' < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]

# build the Docker image:
# $ docker build -t sample:app .

# run the container:
# $ docker run -it -p 80:80 --rm sample:app
