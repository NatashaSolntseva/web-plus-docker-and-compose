FROM node:16-alpine AS builder
# установили ноду
WORKDIR /app
#аналог команды cd
COPY package*.json ./
# регулярное выражение, чтобы не писать 2 строки  - *
RUN npm i
COPY . .
# из текущей папки в папку app
# RUN npm run build

CMD ["npm", "run", "start:dev"]
# контейнер автоматически остановится, когда завершится указанный процесс