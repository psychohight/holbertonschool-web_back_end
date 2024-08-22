// Ce script liste tous les documents avec name="Holberton school" dans la collection 'school'
db = db.getSiblingDB("my_db"); // Remplacer "my_db" par le nom de la base de données si différent
db.school.find({ name: "Holberton school" }).forEach(doc => printjson(doc));