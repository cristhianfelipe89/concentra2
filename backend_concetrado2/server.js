const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Game = require('./models/Game.js');
const app = express();

mongoose.connect('mongodb+srv://cristhianfelipe89:Heracotsioo6i66o52@cluster0.chann.mongodb.net/concentra2?retryWrites=true&w=majority&appName=Cluster0');

app.use(cors());
app.use(express.json());

app.get('/api/game', async (req, res) => {
  const game = await Game.findOne();
  res.json(game);
});

app.post('/api/game/move', async (req, res) => {
  const { action, player } = req.body;
  console.log(`Jugador ${player} realizó: ${action}`);
  res.json({ success: true });
});

app.listen(5000, () => {
  console.log('Backend corriendo en http://localhost:5000');
});