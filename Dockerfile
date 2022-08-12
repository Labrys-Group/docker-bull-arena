FROM node:lts-alpine

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install --ci

COPY . .

RUN npm run build

EXPOSE 3000

HEALTHCHECK --interval=5m --timeout=3s CMD curl -f http://localhost:3000/ || exit 1

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

USER appuser

CMD npm run start
