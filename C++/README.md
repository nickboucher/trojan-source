# C++

## Instructions

These POCs can be compiled using either of the following commands:

clang
```sh
clang++ commenting-out.cpp -o commenting-out
./commenting-out
```

GCC
```sh
g++ commenting-out.cpp -o commenting-out
./commenting-out
```
where `commenting-out` is substituted for the relevant POC. Vulnerable code viewers for reviewing the source code can be found in the [parent README](https://github.com/nickboucher/trojan-source#code-viewers).

## Validation

### Commenting-Out

- Confirmed working on Apple clang++ version 12.0.5
- Confirmed working on Ubuntu g++ version 7.5.0
- Confirmed working on Windows (10.0.19042 Build 19042) g++ MinGW-W64 11.1.0

### Stretched String

- Confirmed working on Apple clang++ version 12.0.5
- Confirmed working on Ubuntu g++ version 7.5.0
- Confirmed working on Windows (10.0.19042 Build 19042) g++ MinGW-W64 11.1.0

### Invisible Character Function

- Does not work on Apple clang++ version 12.0.5
- Does not work on Ubuntu g++ version 7.5.0
- Confirmed working on Windows (10.0.19042 Build 19042) g++ MinGW-W64 11.1.0

### Homoglyph Function

- Confirmed working on Apple clang++ version 12.0.5 (MacOS) and clang++ 6.0.0 (Ubuntu)
- Does not work on Ubuntu g++ version 7.5.0
- Confirmed working on Windows (10.0.19042 Build 19042) g++ MinGW-W64 11.1.0