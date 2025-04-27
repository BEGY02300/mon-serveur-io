
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('🎮 Serveur .io en ligne !');
});

io.on('connection', (socket) => {
  console.log('🟢 Un joueur s\'est connecté');

  socket.on('disconnect', () => {
    console.log('🔴 Un joueur s\'est déconnecté');
  });

  // Ici tu peux ajouter tes events .io personnalisés
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`🚀 Serveur prêt sur le port ${PORT}`);
});
