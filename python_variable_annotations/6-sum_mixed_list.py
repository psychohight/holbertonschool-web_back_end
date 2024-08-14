#!/usr/bin/env python3
from typing import List, Union

def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Retourne la somme d'une liste mixte d'entiers et de flottants."""
    return sum(mxd_lst)
