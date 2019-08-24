#
# Stage 1 - the build process
#

FROM node:12.9-alpine as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

#
# Stage 2 - use NGINX to serve static content
#

FROM nginx:1.17.3-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
# Create new config with PORT env variable - since NGINX has a 
# static config we have to rewrite its config using the env
# variable and `envsubst` before we start NGINX.  This allows 
# the container to run on GCP for example.  
COPY default.template /etc/nginx/conf.d/default.template
CMD ["/bin/sh", "-c", "envsubst '${PORT}' < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]

# 
# USING THIS IMAGE
#

# build the container: `$ docker build -t sample:app .`
# run the container: `$ docker run -it  -e "PORT=3000" -p 3000:3000 --rm sample:app`
