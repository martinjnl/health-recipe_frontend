# Build stage
FROM node:26-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM node:26-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/package.json package-lock.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.* ./

EXPOSE 3000
CMD ["npm", "run", "start"]
