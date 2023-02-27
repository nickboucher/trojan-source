#!/usr/bin/env python3
from sqlite3 import connect

con = connect(':memory:')
cur = con.cursor()
cur.execute('CREATE TABLE user(username, isAdmin)')
cur.execute("""
    INSERT INTO user VALUES
        /* ‮,⁦Alice is an admin */ ('alice', TRUE)
        /* ‮⁦('bob',   TRUE)⁩⁦Bob is an admin   */ 
""")
con.commit()
res = cur.execute("SELECT username FROM user WHERE isAdmin")
print('Admins:')
for admin in res.fetchall():
    print(admin[0])