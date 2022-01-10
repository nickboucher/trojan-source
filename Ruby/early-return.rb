#!/usr/bin/env ruby

$bank = { 'alice' => 100 }

def subtract_funds account, amount
  ⁧⁦ = amount and return # ⁩⁦# Subtract from acct the value⁩⁩
  $bank[account] -= amount
end

subtract_funds 'alice', 50
puts $bank.inspect
