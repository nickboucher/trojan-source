# Python

## Instructions

These POCs can be executed using the following command:
```sh
python3 commenting-out.py
```
where `commenting-out` is substituted for the relevant POC. Vulnerable code viewers for reviewing the source code can be found in the [parent README](https://github.com/nickboucher/trojan-source#code-viewers).

## Validation

### Commenting-Out

- Confirmed working on Python 3.9.5 (on MacOS via clang 12.0.0)
- Confirmed working on Python 3.7.10 (on Ubuntu via GCC 7.5.0)

### Invisible Function

- Does not work on Python 3.9.5 (on MacOS via clang 12.0.0): Throws Syntax Error

### Homoglyph Function

- Confirmed working on Python 3.9.5 (on MacOS via clang 12.0.0)
- Confirmed working on Python 3.7.10 (on Ubuntu via GCC 7.5.0)