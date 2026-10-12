# Dockerfile — debugging only
FROM node:26-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci                    # full install — dev deps included

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]
