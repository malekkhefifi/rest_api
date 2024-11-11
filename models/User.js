// models/User.js
const mongoose = require('mongoose');

// Définir un schéma pour l'utilisateur (User)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
});

// Créer et exporter le modèle User basé sur le schéma
const User = mongoose.model('User', userSchema);

module.exports = User; // Exporter le modèle User
