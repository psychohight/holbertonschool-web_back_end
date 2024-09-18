const fs = require('fs');

function countStudents(path) {
  try {
    // Lecture synchrone du fichier
    const data = fs.readFileSync(path, 'utf8');

    // Séparation des données en lignes
    const lines = data.split('\n');
    const students = [];
    const fields = {};
    const fieldNames = [];

    // Parcours des lignes en ignorant l'en-tête
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();

      // Ignorer les lignes vides
      if (line) {
        const values = line.split(',');

        // Vérifier que la ligne a le bon nombre de valeurs
        if (values.length === 4) {
          const [firstname, lastname, age, field] = values.map((value) => value.trim());

          // Ajouter l'étudiant à la liste
          students.push({ firstname, lastname, age, field });

          // Organiser les étudiants par filière
          if (!fields[field]) {
            fields[field] = [];
            fieldNames.push(field);
          }
          fields[field].push(firstname);
        }
      }
    }

    // Affichage du nombre total d'étudiants
    console.log(`Number of students: ${students.length}`);

    // Affichage du nombre d'étudiants par filière et de leurs prénoms
    for (const field of fieldNames) {
      const list = fields[field];
      console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
    }
  } catch (err) {
    // Gestion de l'erreur si le fichier n'est pas accessible
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
