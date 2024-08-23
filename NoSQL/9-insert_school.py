#!/usr/bin/env python3
"""
Function to insert a new document in a MongoDB collection
"""

def insert_school(mongo_collection, **kwargs):
    """Inserts a new document into a collection"""
    return mongo_collection.insert_one(kwargs).inserted_id
