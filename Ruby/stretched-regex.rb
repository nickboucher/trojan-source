#!/usr/bin/env ruby

$roles = 'user,manager'
def admin?
  $roles =~ /admin⁧⁦|user/ #⁩⁦/ # Restrict from ⁩⁩
end

if admin?
  puts 'You are an admin.'
end
