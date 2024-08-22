#!/usr/bin/env python3
db = db.getSiblingDB("my_db"); // Remplacer "my_db" par le nom de la base de données si différent
db.school.find({ name: "Holberton school" }).forEach(doc => printjson(doc));