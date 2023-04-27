FROM node:16-alpine AS builder
# установили ноду
WORKDIR /app
#аналог команды cd
COPY package*.json ./
# регулярное выражение, чтобы не писать 2 строки  - *
RUN npm ci
COPY . ./
# из текущей папки в папку app
RUN npm run build \
  && rm -rf ./src \
  && rm -rf ./node_modules

FROM nginx:1.23-alpine AS production
COPY --from=builder /app/build ./usr/share/nginx/html
COPY /nginx/conf.d/default.conf ./etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# daemon off; чтобы контейнер не останавливался