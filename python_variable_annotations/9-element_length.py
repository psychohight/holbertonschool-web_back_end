#!/usr/bin/env python3
def element_length(lst: list) -> list[tuple]:
    """Retourne une liste de tuples avec chaque séquence et sa longueur."""
    return [(i, len(i)) for i in lst]
