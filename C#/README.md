# C#

## Instructions

These POCs can be executed using the following command:
```sh
dotnet-script commenting-out.csx
```
where `commenting-out` is substituted for the relevant POC. Vulnerable code viewers for reviewing the source code can be found in the [parent README](https://github.com/nickboucher/trojan-source#code-viewers).

## Validation

### Commenting-Out

- Confirmed working .NET 5.0 script (CSX on MacOS)
- Confirmed working scriptcs.exe v0.17.1 (CSX on Windows 10.0.19042 Build 19042)
- Confirmed working dotnet 3.1.408 with Microsoft.AspNetCore.App 3.1.14 and Microsoft.NETCore.App 3.1.14 (Ubuntu)

### Stretched String

- Confirmed working .NET 5.0 script (CSX on MacOS)
- Confirmed working scriptcs.exe v0.17.1 (CSX on Windows 10.0.19042 Build 19042)
- Confirmed working dotnet 3.1.408 with Microsoft.AspNetCore.App 3.1.14 and Microsoft.NETCore.App 3.1.14 (Ubuntu)

### Invisible Functions

- Does not work on .NET 5.0 script (CSX on MacOS)
- Does not work with scriptcs.exe v0.17.1 (CSX on Windows 10.0.19042 Build 19042)
- Does not work with dotnet 3.1.408 with Microsoft.AspNetCore.App 3.1.14 and Microsoft.NETCore.App 3.1.14 (Ubuntu)

### Homoglyph Function

- Confirmed working .NET 5.0 script (CSX on MacOS)
- Confirmed working scriptcs.exe v0.17.1 (CSX on Windows 10.0.19042 Build 19042)
- Confirmed working dotnet 3.1.408 with Microsoft.AspNetCore.App 3.1.14 and Microsoft.NETCore.App 3.1.14 (Ubuntu)