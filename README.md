# 🛒 Ecom-app – Application e-commerce avec microservices

Ce projet est une application e-commerce basée sur une architecture **microservices** avec :
- Un frontend React
- Trois services Node.js (`user-service`, `product-service`, `order-service`)
- Trois bases MongoDB (une par service)

---

## 📦 Structure du projet

---

## 🚀 Instructions d'installation

### 1. Cloner le projet

```bash
git clone git@github.com:dimitri1502/Ecom-app.git
cd Ecom-app

2. Lancer l’environnement avec Docker

docker-compose up --build

Cela construira les services et exposera :

    Frontend : http://localhost (port 80 → 3000)

    API user-service : http://localhost:3001

    API product-service : http://localhost:3002

    API order-service : http://localhost:3003

3. Installer Node.js via NVM (si Docker non utilisé)

# Installer NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"

# Installer Node.js LTS
nvm install 18
nvm use 18

4. Lancer le frontend localement (hors Docker)

cd frontend
rm -rf node_modules package-lock.json
npm install
npm start

Accès via : http://localhost:3000

5. Résolution d'erreurs communes

    🔧 Erreur react-scripts not found : faire npm install

    🔧 react-scripts build échoue : vérifier que src/index.js et public/index.html existent
