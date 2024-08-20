#!/usr/bin/env python3
"""
Async comprehension
"""
import asyncio
from 0-async_generator import async_generator


async def async_comprehension():
    """ Collect 10 random numbers using an async comprehensing over async_generator """
    return [i async for i in async_generator()]
