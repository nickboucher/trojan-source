# Java

## Instructions

These POCs can be executed using the following command:
```sh
javac -encoding utf8 CommentingOut.java
java CommentingOut
```
where `CommentingOut` is substituted for the relevant POC. Vulnerable code viewers for reviewing the source code can be found in the [parent README](https://github.com/nickboucher/trojan-source#code-viewers).

## Validation

### Commenting-Out

- Confirmed working on openjdk 16.0.1 2021-04-20 (MacOS via Homebrew)
- Confirmed working using javac 11.0.13 openjdk 13.0.5.1 2020-11-06 (Ubuntu)
- Confirmed working using javac.exe 11.0.12 and openjdk 11.0.12 (Windows 10.0.19042 Build 19042); `javac -encoding utf-8 filename.class; java filename`

### Stretched String

- Confirmed working on openjdk 16.0.1 2021-04-20 (MacOS via Homebrew)
- Confirmed working using javac 11.0.13 openjdk 13.0.5.1 2020-11-06 (Ubuntu)
- Confirmed working using javac.exe 11.0.12 and openjdk 11.0.12 (Windows 10.0.19042 Build 19042); `javac -encoding utf-8 filename.class; java filename`

### Homoglyph Function

- Confirmed working on openjdk 16.0.1 2021-04-20 (MacOS via Homebrew)
- Confirmed working using javac 11.0.13 openjdk 13.0.5.1 2020-11-06 (Ubuntu)
- Confirmed working using javac.exe 11.0.12 and openjdk 11.0.12 (Windows 10.0.19042 Build 19042); `javac -encoding utf-8 filename.class; java filename`