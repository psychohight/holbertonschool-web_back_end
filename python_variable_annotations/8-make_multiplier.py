#!/usr/bin/env python3
def make_multiplier(multiplier: float) -> callable[[float], float]:
    """Retourne une fonction qui multiplie un float par un multiplicateur donné."""
    return lambda x: x * multiplier
