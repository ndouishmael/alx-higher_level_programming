#!/usr/bin/python3
'''
Script that adds all arguments to a Python list and then
saves them to a file
'''
from sys import argv
import json
save_to_json_file = __import__('7-save_to_json_file').save_to_json_file
load_from_json_file = __import__('8-load_from_json_file').load_from_json_file

if __name__ == "__main__":
    filename = 'add_item.json'

    try:
        new = load_from_json_file(filename)
    except (ValueError, FileNotFoundError):
        new = []

    new = new + argv[1:]
    save_to_json_file(new, filename)
