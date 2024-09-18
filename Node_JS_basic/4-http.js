const http = require('http');

const app = http.createServer((req, res) => {
  // Définir l'en-tête de la réponse en texte brut
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Envoyer le corps de la réponse
  res.end('Hello Holberton School!');
});

app.listen(1245, () => {
  // Console.log optionnel pour indiquer que le serveur a démarré
  // console.log('Server is listening on port 1245');
});

module.exports = app;
