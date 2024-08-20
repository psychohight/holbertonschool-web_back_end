#!/usr/bin/env python3
"""
Hypermedia pagination module.
"""


import math


Server = __import__('1-simple_pagination').Server


class Server(Server):
    """Server class to paginate a database of popular baby names."""

    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict:
        """Returns a dictionary with pagination metadata."""
        data = self.get_page(page, page_size)
        total_pages = math.ceil(len(self.dataset()) / page_size)

        return {
            "page_size": len(data),
            "page": page,
            "data": data,
            "next_page": page + 1 if page < total_pages else None,
            "prev_page": page - 1 if page > 1 else None,
            "total_pages": total_pages
        }
