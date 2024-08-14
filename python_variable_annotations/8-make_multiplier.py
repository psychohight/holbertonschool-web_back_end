#!/usr/bin/env python3
from typing import Callable

def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Retourne une fonction qui multiplie un float par un multiplicateur donné."""
    return lambda x: x * multiplier
