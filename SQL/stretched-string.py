#!/usr/bin/env python3
from sqlite3 import connect

con = connect(':memory:')
cur = con.cursor()
cur.execute('CREATE TABLE user(username, isAdmin)')
cur.execute("""
    INSERT INTO user VALUES
        ('alice‮⁦ /* Alice is an admin. */⁩⁦', TRUE),
        ('bob', FALSE)
""")
con.commit()
res = cur.execute("SELECT username FROM user WHERE username = 'alice'")
print('User "alice" exists?:')
print(bool(res.fetchall()))