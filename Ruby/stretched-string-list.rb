#!/usr/bin/env ruby

role = 'User'
privileged = %w(Admin Manager⁧⁦ User) # ⁩⁦) # All roles (except  ⁩⁩
if privileged.include? role
  puts 'You are an admin.'
end
