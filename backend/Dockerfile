FROM node:16-alpine AS builder
# установили ноду
WORKDIR /app
#аналог команды cd
COPY package*.json ./
# регулярное выражение, чтобы не писать 2 строки  - *
RUN npm ci
# в отличе от i не будет обновлять версии, будет ставить зависимости из package-lock
COPY . ./
# из текущей папки в папку app, установили зависимости и удаляем не нужное
RUN npm run build \
  && rm -rf ./src \
  && rm -rf ./node

FROM node:16-alpine as production
WORKDIR /app
# --from указываеm, что копировать нужно из образа builder
COPY --from=builder /app/package*.json ./
# --omit=dev означает пропустить dev-зависимости и проверку 
RUN npm ci --omit=dev --no-audit --no-fund && npm i pm2 -g
# копируем директорию со сборкой приложения из builder, js исходники
COPY --from=builder /app/dist ./dist/
COPY --from=builder /app/ecosystem.config.js ./ecosystem.config.js
EXPOSE 3000
# Указываем команду для запуска приложения
CMD ["pm2-runtime", "start", "ecosystem.config.js"]