#!/usr/bin/env python3
from sqlite3 import connect

con = connect(':memory:')
cur = con.cursor()
cur.execute('CREATE TABLE user(username, isAdmin)')
cur.execute("""
    /* Populate admins ‮/*
    INSERT INTO user VALUES
        ('alice', TRUE),
        ('bob', TRUE)
""")
con.commit()
res = cur.execute("SELECT username FROM user WHERE isAdmin")
print('Admins:')
for admin in res.fetchall():
    print(admin[0])