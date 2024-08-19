#!/usr/bin/env python3
"""
0. Async Generator
"""

import asyncio
import random

async def async_generator():
    """ Coroutine that generates 10 random numbers """
    for _ in range(10):
        await asyncio.sleep(1)  # Attend 1 seconde de manière asynchrone
        yield random.uniform(0, 10)  # Génère un nombre aléatoire entre 0 et 10
