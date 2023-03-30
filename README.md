# Trojan Source

[*Trojan Source: Invisible Vulnerabilities*](https://trojansource.codes/trojan-source.pdf)

## Overview

We present a new type of attack in which source code is maliciously encoded so that it appears different to a compiler and to the human eye. This attack exploits subtleties in text-encoding standards such as Unicode to produce source code whose tokens are logically encoded in a different order from the one in which they are displayed, leading to vulnerabilities that cannot be perceived directly by human code reviewers.

'Trojan Source' attacks, as we call them, pose an immediate threat both to first-party software and supply-chain compromise across the industry. We present working examples of Trojan-Source attacks in C, C++, C#, JavaScript, Java, Rust, Go, Python, SQL, Bash, Assembly, and Solidity. We propose definitive compiler-level defenses, and describe other mitigating controls that can be deployed in editors, repositories, and build pipelines while compilers are upgraded to block this attack.

Additional details can be found in our [related paper](https://trojansource.codes/trojan-source.pdf) (also on [arXiv](https://arxiv.org/abs/2111.00169)) and at [trojansource.codes](https://trojansource.codes).

## Proofs-of-Concept

This repository is divided into per-language subdirectories. Each subdirectory contains a series of proofs-of-concept implementing various Trojan-Source attacks as well as a README describing the compilers/interpreters with which these attacks were verified. The source code for the [website](https://trojansource.codes) publishing these attacks can is located in the `website/` subdirectory.

### Languages

We include a summary of the languages evaluated in the table below:

| **Language** |**Vulnerable to<br />Early Return**|**Vulnerable to<br />Commenting-Out**|**Vulnerable to<br />Stretched Strings**| **Tool Evaluated** |
|-----|-----|-----|-----|-----|
| **C** | ~ | &check; | &check; | GNU `gcc` v7.5.0<br />Apple `clang` v12.0.5 |
| **C++** | ~ | &check; | &check; | GNU `g++` v7.5.0<br />Apple `clang++` v12.0.5 |
| **C\#** | ~ | &check; | &check; | .NET 5.0 via `dotnet-script` |
| **JavaScript** | ~ | &check; | &check; | Node.js v16.4.1 |
| **Java** | ~ | &check; | &check; | OpenJDK v16.0.1 |
| **Rust** | ~ | &check; | &check; | `rustc` v1.53.0 |
| **Go** | ~ | &check; | &check; | `go` v1.16.6 |
| **Python** | &check; | &check; | &check; | Python 3.9.5 via `clang`<br />Python 3.7.10 via `gcc` |
| **SQL** | &check; | &check; | &check; | SQLite v3.39.4 |
| **Bash** | ~ | &check; | &check; | zsh v5.8.1 |
| **Assembly** | &check; | &check; | ~ | x86_64 gas on Apple `clang` v14.0.0 |
| **Solidity** | &check; | &check; | ~ | Solidity v0.8.16 |

&check; means the rendered code visually matches common style for that language, while ~ means visual renderings adhere to language syntax but deviate from common style (e.g. the multiline comment terminator \*/ is written as /\*/). The proofs-of-concept included in this respository provide explicit examples for clarity.

We note that this list of affected languages is non-exhaustive, and welcome community contributions to expand to further languages.

We further note that some of the above tools have been patched since the disclosure of Trojan-Source attacks, and therefore include the versions of each tool evaluated. For example, `rustc` [now throws](https://blog.rust-lang.org/2021/11/01/cve-2021-42574.html) errors for unterminated Bidi control characters.

Finally, in addition to the Bidi attacks shown above, we evaluated each language against the Homoglyph and Invisible character attacks also described in the [related paper](https://trojansource.codes/trojan-source.pdf). These evaluations can be found in the README files of each language subdirectory.

### Code Viewers

We include a summary of the code viewers evaluated in the table below:

|  | **Bidi Attack (Windows)** | **Bidi Attack (MacOS)** | **Bidi Attack (Ubuntu)** | **Homoglyph Attack (Windows)** | **Homoglyph Attack (MacOS)** | **Homoglyph Attack (Ubuntu)** |
|---|---|---|---|---|---|---|
| **Visual Studio Code** ([v1.61](https://code.visualstudio.com/updates/v1_61)) | &check; | &check; | &check; | &check; | &check; | &check; |
| **Atom** ([v1.58.0](https://github.com/atom/atom/releases/tag/v1.58.0)) | &check; | &check; | &check; | &check; | &check; | &check; |
| **SublimeText** ([v4121](https://www.sublimetext.com/docs/previous_versions.html)) | Bidi unactioned | Bidi unactioned | Bidi unactioned | &check; | &check; | &check; |
| **Notepad++** ([v8.1.9](https://notepad-plus-plus.org/news/v819-released)) | Displays control symbol | &check; | N/A | N/A | N/A | N/A |
| **Eclipse** ([v4.21](https://www.eclipse.org/downloads/packages/release/2021-09/r)) | Mangled | Missing Glyph | &check; | &check; | &check; | &check; |
| **IntelliJ** ([v2021.2.3](https://www.jetbrains.com/idea/download/other.html)) | Displays control char | Displays control char | Displays control char | &check; | &check; | &check; |
| **Visual Studio** ([v16.11.5](https://visualstudio.microsoft.com/vs/older-downloads/)/[v8.10.11](https://learn.microsoft.com/en-us/visualstudio/releasenotes/vs2019-mac-relnotes#--visual-studio-2019-for-mac-version-81011-810118)) | Mangled | &check; | N/A | &check; | &check; | N/A |
| **Xcode** ([v14.0.1](https://xcodereleases.com)) | N/A | &check; | N/A | N/A | &check; | N/A |
| **vim** ([v8.2.1790](https://github.com/vim/vim/releases/tag/v8.2.1790)) | Mangled | Displays codepoint | Displays codepoint | Misrendered | &check; | &check; |
| **emacs** ([v27.2](https://lists.gnu.org/archive/html/emacs-devel/2021-03/msg01249.html)) | &check; | Displays underscores | &check; | &check; | &check; | &check; |
| **GitHub** ([patched Oct '21](https://github.blog/changelog/2021-10-31-warning-about-bidirectional-unicode-text/)) | &check; | &check; (except Safari) | &check; | &check; | &check; | &check; |
| **Bitbucket** ([patched Nov '21](https://confluence.atlassian.com/security/multiple-products-security-advisory-unrendered-unicode-bidirectional-override-characters-cve-2021-42574-1086419475.html)) | &check; | &check; (except Safari) | &check; | &check; | &check; | &check; |
| **GitLab** ([patched Oct '21](https://about.gitlab.com/releases/2021/10/28/security-release-gitlab-14-4-1-released/)) | &check; | &check; (except Safari) | &check; | &check; | &check; | &check; |

&check; means that the code viewer is vulnerable to the attack on that platform. N/A indicates that the code viewer is not available on that platform. All web-based products were tested on October 2021 releases of Google Chrome, Microsoft Edge, Mozilla Firefox, and Apple Safari. Any visualization deviations on non-vulnerable platforms are described.

We note that many of these code viewers have since been patched, and for patched versions Trojan Source defenses may need to be disabled in settings to visualize these attacks as described in the [related paper](https://trojansource.codes/trojan-source.pdf).

### Reproducability

To maximize reproducability, we note that all evaluations were performed on the following operating systems:
- **Windows**: Window 10 build 19043
- **MacOS**: MacOS Big Sur
- **Ubuntu**: Ubuntu 20.04

As noted, many of the compilers, code editors, and repository frontends examined in this work has since been patched with Trojan Source defenses. To reproduce the results, we recommend installing the known-vulnerable versions of software listed above, or disabling any defenses in the settings of later versions.

To validate our results, we recommend opening each of the proofs-of-concept in a vulnerable code viewer, confirming that the code is displayed as depicted in the [related paper](https://trojansource.codes/trojan-source.pdf), and validating that the program executes the hidden logic rather than the visualized logic when compiled/executed with a vulnerable compiler/interpreter.


## Attack Detection

Interested in analyzing source code files for the presence of Trojan Source attacks? Check out [this](https://github.com/nickboucher/bidi-viewer) repo, which visualizes bidirectional overrides.

## Citation

If you use anything in this repository, in the [*Trojan Source*](https://trojansource.codes/trojan-source.pdf) paper, or on [trojansource.codes](https://trojansource.codes) in your own work, please cite the following:

```bibtex
@inproceedings{boucher_trojansource_2023,
    author = {Nicholas Boucher and Ross Anderson},
    title = {Trojan {Source}: {Invisible} {Vulnerabilities}},
    booktitle = {32nd USENIX Security Symposium (USENIX Security 23)},
    year = {2023},
    address = {Anaheim, CA},
    publisher = {USENIX Association},
    month = aug,
    url = {https://arxiv.org/abs/2111.00169}
}
```