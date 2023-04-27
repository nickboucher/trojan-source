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
- Confirmed working on Python 3.9.7 (on Windows 10.0.19042 Build 19042)

### Invisible Function

- Does not work on Python 3.9.5 (on MacOS via clang 12.0.0)
- Does not work on Python 3.9.2 (on Ubuntu via GCC 10.2.1)
- Does not work on Python 3.9.7 (on Windows 10.0.19042 Build 19042)
```py
Traceback:
File "/home/js-on/trojan-source/Python/invisible-function.py", line 6
    def is_​admin():
           ^
SyntaxError: invalid non-printable character U+200B
```

### Homoglyph Function

- Confirmed working on Python 3.9.5 (on MacOS via clang 12.0.0)
- Confirmed working on Python 3.7.10 (on Ubuntu via GCC 7.5.0)
- Confirmed working on Python 3.9.7 (on Windows 10.0.19042 Build 19042)