#!/usr/bin/env python3
bank = { 'alice': 100 }

def subtract_funds(account: str, amount: int):
    ''' Subtract funds from bank account then ⁧''' ;return
    bank[account] -= amount
    return

print('Starting Balance:\t\t', bank['alice'])
subtract_funds('alice', 50)
print('Balance After Subtracting 50:\t', bank['alice'])