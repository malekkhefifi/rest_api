// server.js

// Importation des dépendances nécessaires
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Charger les variables d'environnement depuis .env
const User = require("./models/user");
const app = express();
app.use(express.json());



// Connexion à la base de données MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err))

/***********************************get */
/*app.get('/users', async (req, res) => {
    const users = await User.find()
    res.json(users)
})*/
//GET all persons
/*app.get('/api/persons', async (req, res) => {
    try {
        const persons = await Person.find()
        res.json(persons)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})*/
// Définir une route de base (facultative)
app.get('/', (req, res) => {
    res.send('Bienvenue sur le serveur Express');
  });
  
// POST
app.post('/', async (req, res) => {
    const user = new User(req.body)
    await user.save()
    res.json(user)
})

// PUT
app.put('/users/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json(user)
})

// DELETE
app.delete('/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json({message: 'User deleted'})
})


// Lancer le serveur sur le port défini dans .env ou par défaut 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Le serveur Express est en cours d'exécution sur le port ${port}`);
});