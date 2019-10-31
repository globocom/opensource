FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app

RUN apk update && \
    apk add --update fftw-dev gcc g++ make libc6-compat util-linux && \
    apk add --no-cache --repository https://alpine.global.ssl.fastly.net/alpine/edge/community vips-dev vips-tools && \
    rm -rf /var/cache/apk/*

COPY package.json yarn.lock .env.development gatsby-*.js /app/
COPY static /app/static
COPY src /app/src
COPY data /app/data

RUN yarn install

EXPOSE 8000

CMD ["yarn", "develop", "-H", "0.0.0.0" ]