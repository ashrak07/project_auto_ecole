// server.js
const express = require("express");
const http = require("http");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectionDB } = require("./Config/dbConnection");

// Charger les variables d'environnement
dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

// Connexion à la base de données MongoDB
connectionDB();

// Middlewares globaux
app.use(cors());
app.use(express.json());

// Routes
app.use("/auto-ecole", require("./Routes/userRoute"));
app.use("/auto-ecole", require("./Routes/courseRoutes"));

// Création du serveur HTTP
const httpServer = http.createServer(app);

httpServer.listen(port, () => {
  console.log(`✅ Serveur lancé sur le port ${port}`);
});
