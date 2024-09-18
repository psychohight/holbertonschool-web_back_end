// 3-read_file_async.js
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Lecture asynchrone du fichier
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // Rejet de la promesse en cas d'erreur
        reject(new Error('Cannot load the database'));
      } else {
        // Traitement des données
        const lines = data.trim().split('\n');
        const students = [];
        const fields = {};

        // Suppression de la ligne d'en-tête
        const header = lines.shift();

        // Parcours des lignes restantes
        for (const line of lines) {
          const trimmedLine = line.trim();

          // Ignorer les lignes vides
          if (trimmedLine) {
            const values = trimmedLine.split(',');

            // Vérifier que la ligne a 4 valeurs
            if (values.length === 4) {
              const [firstname, lastname, age, field] = values.map((value) => value.trim());

              // Ajouter l'étudiant à la liste
              students.push({ firstname, lastname, age, field });

              // Regrouper les étudiants par filière
              if (!fields[field]) {
                fields[field] = [];
              }
              fields[field].push(firstname);
            }
          }
        }

        // Afficher le nombre total d'étudiants
        console.log(`Number of students: ${students.length}`);

        // Afficher le nombre d'étudiants par filière et leurs prénoms
        for (const field in fields) {
          if (fields.hasOwnProperty(field)) {
            const list = fields[field];
            console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
          }
        }

        // Résolution de la promesse
        resolve();
      }
    });
  });
}

module.exports = countStudents;
