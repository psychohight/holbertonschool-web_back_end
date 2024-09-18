const http = require('http');
const fs = require('fs');
const url = require('url');

// Récupération du nom du fichier de base de données à partir des arguments de ligne de commande
const args = process.argv.slice(2);
const databaseFile = args[0];

// Fonction pour compter les étudiants (similaire à 3-read_file_async.js)
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const students = [];
        const fields = {};

        // Suppression de la ligne d'en-tête
        const header = lines.shift();

        for (const line of lines) {
          const trimmedLine = line.trim();

          // Ignorer les lignes vides
          if (trimmedLine) {
            const values = trimmedLine.split(',');

            // Vérifier que la ligne a 4 valeurs
            if (values.length === 4) {
              const [firstname, lastname, age, field] = values.map((value) => value.trim());

              // Ajouter l'étudiant à la liste générale
              students.push({ firstname, lastname, age, field });

              // Regrouper les étudiants par filière
              if (!fields[field]) {
                fields[field] = [];
              }
              fields[field].push(firstname);
            }
          }
        }

        // Préparation de la chaîne de sortie
        let output = `Number of students: ${students.length}\n`;
        for (const field in fields) {
          if (fields.hasOwnProperty(field)) {
            const list = fields[field];
            output += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
          }
        }
        resolve(output.trim());
      }
    });
  });
}

// Création du serveur HTTP
const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === '/') {
    // Chemin racine : afficher "Hello Holberton School!"
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (reqUrl.pathname === '/students') {
    // Chemin /students : afficher la liste des étudiants
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    countStudents(databaseFile)
      .then((output) => {
        res.end(output);
      })
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    // Pour tout autre chemin, retourner une erreur 404
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Le serveur écoute sur le port 1245
app.listen(1245);

module.exports = app;
