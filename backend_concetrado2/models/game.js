// backend/models/Game.js
const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  board: [[Number]],
  revealed: [[Boolean]],
  currentPlayer: Number,
  players: [String],
  score: [Number],
  turnTime: Number,  // en segundos
  lastMove: Date
});

module.exports = mongoose.model('Game', gameSchema);