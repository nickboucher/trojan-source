#!/usr/bin/env python3
from sqlite3 import connect

def alice():
    return "alice"

def bob():
    return "bob"

con = connect(':memory:')
con.create_function("alice", 0, alice)
con.create_function("al​ice", 0, bob)
cur = con.cursor()
cur.execute('CREATE TABLE user(username, isAdmin)')
cur.execute("""
    INSERT INTO user VALUES
        (al​ice(), TRUE)
""")
con.commit()
res = cur.execute("SELECT username FROM user WHERE isAdmin")
print('Admins:')
for admin in res.fetchall():
    print(admin[0])