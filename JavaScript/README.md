# JavaScript

## Instructions

These POCs can be executed using the following command:
```sh
node commenting-out.js
```
where `commenting-out` is substituted for the relevant POC. Vulnerable code viewers for reviewing the source code can be found in the [parent README](https://github.com/nickboucher/trojan-source#code-viewers).

## Validation

### Commenting-Out

- Confirmed working Node.js v16.4.1 (MacOS)
- Confirmed working Node.js v14.17.4 (Ubuntu)
- Confirmed working Node.js v17.0.1 (Windows 10.0.19042 Build 19042)

### Stretched String

- Confirmed working Node.js v16.4.1 (MacOS)
- Confirmed working Node.js v14.17.4 (Ubuntu)
- Confirmed working Node.js v17.0.1 (Windows 10.0.19042 Build 19042)

### Invisible Functions

- Does not work on Node.js v16.4.1 (MacOS) -- throws unexpected token error
- Does not work on Node.js v14.17.4 (Ubuntu) -- throws unexpected token error
- Does not work on Node.js v17.0.1 (Windows 10.0.19042 Build 19042) -- throws unexpected token error

### Homoglyph Function

- Confirmed working Node.js v16.4.1 (MacOS)
- Confirmed working Node.js v14.17.4 (Ubuntu)
- Confirmed working Node.js v17.0.1 (Windows 10.0.19042 Build 19042)