# Étape 1 : Build de l'application React
FROM node:18-alpine as build
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : Serveur avec `serve`
FROM node:18-alpine
WORKDIR /app

# Installer `serve` globalement
RUN npm install -g serve

# Copier le build depuis l'étape précédente
COPY --from=build /app/build ./build

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]

