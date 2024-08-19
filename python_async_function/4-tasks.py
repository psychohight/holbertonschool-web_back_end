#!/usr/bin/env python3
"""
Asynchronous coroutine that takes in an integer argument and a float argument 
that waits for a random delay between 0 and max_delay and returns that value.
"""
import asyncio
from typing import List


task_wait_random = __import__('3-tasks').task_wait_random

async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """ Returns list of delays in ascending """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = [await task for task in tasks]
    return sorted(delays)
