const express = require('express');
const fs = require('fs');

const app = express();

const args = process.argv.slice(2);
const databaseFile = args[0];

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const students = [];
        const fields = {};

        // Remove the header line
        const header = lines.shift();

        for (const line of lines) {
          const trimmedLine = line.trim();

          // Ignore empty lines
          if (trimmedLine) {
            const values = trimmedLine.split(',');

            if (values.length === 4) {
              const [firstname, lastname, age, field] = values.map((value) => value.trim());
              students.push({ firstname, lastname, age, field });

              if (!fields[field]) {
                fields[field] = [];
              }
              fields[field].push(firstname);
            }
          }
        }

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

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');

  countStudents(databaseFile)
    .then((output) => {
      res.end(output);
    })
    .catch((err) => {
      res.end(err.message);
    });
});

app.listen(1245);

module.exports = app;
