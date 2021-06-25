# FROM node:12

# RUN mkdir /usr/src/app
# WORKDIR /usr/src/app

# ENV PATH /usr/src/app/node_modules/.bin:$PATH

# COPY package.json /usr/src/app/package.json
# RUN yarn install

# CMD ["yarn", "start"]

# FROM mhart/alpine-node:11 AS builder
# WORKDIR /app
# COPY . .
# RUN npm install react-scripts -g --silent
# RUN yarn install
# RUN yarn run build
 
# FROM mhart/alpine-node
# RUN yarn global add serve
# WORKDIR /app
# COPY --from=builder /app/build .
# CMD ["serve", "-p", "80", "-s", "."]doc

FROM node:alpine

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

CMD ["yarn", "run", "start"]

# FROM node:14.1-alpine AS builder

# WORKDIR /opt/web
# COPY package.json ./
# RUN npm cache verify
# RUN yarn install

# ENV PATH="./node_modules/.bin:$PATH"

# COPY . ./
# RUN npm run build

# FROM nginx:1.17-alpine
# RUN apk --no-cache add curl
# RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
#     chmod +x envsubst && \
#     mv envsubst /usr/local/bin
# COPY ./nginx.config /etc/nginx/nginx.template
# CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
# COPY --from=builder /opt/web/build /usr/share/nginx/html