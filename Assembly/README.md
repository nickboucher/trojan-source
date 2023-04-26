# Assembly
*x86_64 GAS ASM*

## Instructions

These POCs can be executed using the following command:
```sh
clang commenting-out.s -o commenting-out
./commenting-out
```
where `commenting-out` is substituted for the relevant POC. Vulnerable code viewers for reviewing the source code can be found in the [parent README](https://github.com/nickboucher/trojan-source#code-viewers).

Note that these Assembly POCs are written in a syntax that assumes compilation on MacOS using Apple `clang`. Compilation on other platforms may require syntax modification.

## Validation

### Commenting-Out

- Confirmed working on Apple clang version 14.0.0 (MacOS)

### Stretched String

- Confirmed working on Apple clang version 14.0.0 (MacOS)

### Early Return

- Confirmed working on Apple clang version 14.0.0 (MacOS)

### Homoglyph Function

- Confirmed NOT working on Apple clang version 14.0.0 (MacOS)

### Invisble Function

- Confirmed NOT working on Apple clang version 14.0.0 (MacOS)