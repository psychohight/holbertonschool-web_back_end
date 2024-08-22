// Ce script liste tous les documents dans la collection 'school'
db = db.getSiblingDB("my_db"); // Remplacer "my_db" par le nom de la base de données si différent
db.school.find().forEach(doc => printjson(doc));