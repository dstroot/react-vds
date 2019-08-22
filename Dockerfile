# We’ll build upon the latest official NodeJS Docker image, which comes with yarn pre-installed.

FROM node:7.10 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build
