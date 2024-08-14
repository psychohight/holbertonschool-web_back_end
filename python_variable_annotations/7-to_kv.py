#!/usr/bin/env python3
from typing import Union, Tuple

def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Retourne un tuple avec une chaîne et le carré d'un nombre."""
    return (k, float(v ** 2))
