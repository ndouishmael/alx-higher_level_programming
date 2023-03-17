#!/usr/bin/python3
"""Contains the class definition of a State and an instance
   Base = declarative_base()
"""
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class State(Base):
    __tablename__ = 'states'
    id = Column(Integer, primary_key=True, autoincrement=True, nullable=False)
    name = Column(String(128), nullable=False)

engine = create_engine('mysql+pymysql://root@localhost:3306/MySQL serverb')

Base.metadata.create_all(engine)
