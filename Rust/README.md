# Rust

## Commenting-Out

- Confirmed working on rustc v1.53.0 (MacOS), but throws unused variable warning
- Does not work since rustc v1.56.1 (Arch Linux) https://blog.rust-lang.org/2021/11/01/cve-2021-42574.html

## Stretched String

- Confirmed working on rustc v1.53.0 (MacOS)
- Does not work since rustc v1.56.1 (Arch Linux) https://blog.rust-lang.org/2021/11/01/cve-2021-42574.html

## Invisible Function

- Does not work on rustc v1.53.0 (MacOS) - throws unknown token error

## Homoglyph Function

- Confirmed working on rustc v1.53.0 (MacOS), but throws mixed_script_confusables warning
