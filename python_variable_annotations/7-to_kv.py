#!/usr/bin/env python3
def to_kv(k: str, v: int | float) -> tuple[str, float]:
    """Retourne un tuple avec une chaîne et le carré d'un nombre."""
    return (k, float(v ** 2))
