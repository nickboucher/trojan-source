# Go

## Instructions

These POCs can be executed using the following command:
```sh
go build -o commenting-out commenting-out.go
./commenting-out
```
where `commenting-out` is substituted for the relevant POC. Vulnerable code viewers for reviewing the source code can be found in the [parent README](https://github.com/nickboucher/trojan-source#code-viewers).

## Validation

### Commenting-Out

- Confirmed working on go version go1.16.6 darwin/amd64 (MacOS); requires using each variable to avoid throwing unused variable error

### Stretched String

- Confirmed working on go version go1.16.6 darwin/amd64 (MacOS)

### Homoglyph Function

- Confirmed working on go version go1.16.6 darwin/amd64 (MacOS)