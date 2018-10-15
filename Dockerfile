FROM node:9.5-alpine

RUN mkdir /app
WORKDIR /app

RUN apk update && \
    apk add --update --repository http://dl-3.alpinelinux.org/alpine/edge/testing vips-tools vips-dev fftw-dev gcc g++ make libc6-compat util-linux && \
    apk add python && \
    rm -rf /var/cache/apk/*

COPY package.json yarn.lock .env.development gatsby-browser.js gatsby-config.js gatsby-node.js gatsby-ssr.js /app/
COPY static /app/static
COPY src /app/src

RUN yarn install

EXPOSE 8000