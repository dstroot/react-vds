# Stage 1 - the build process
FROM node:12.9-alpine as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.16.0-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# build the Docker image:
# $ docker build -t sample:app .

# run the container:
# $ docker run -it -p 80:80 --rm sample:app
