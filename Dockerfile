# Image that builds all POCs in this repository on Ubuntu 20.04
FROM ubuntu:20.04
SHELL ["/bin/bash", "-c"]
WORKDIR /trojan-source
COPY . .

# Install compilers
ENV DEBIAN_FRONTEND noninteractive
## GCC, Golang, OpenJDK
RUN apt-get update && apt-get install -y \
    gcc-7 \
    g++-7 \
    clang-12 \
    wget \
    golang-1.16 \
    openjdk-16-jdk-headless \
    software-properties-common \
    curl \
    && echo 'alias gcc=gcc-7' >> ~/.bashrc \
    && echo 'alias g++=g++-7' >> ~/.bashrc \
    && echo 'alias clang=clang-12' >> ~/.bashrc \
    && echo 'alias clang++=clang++-12' >> ~/.bashrc
## Python
RUN add-apt-repository ppa:deadsnakes/ppa \
    && apt-get update \
    && apt install -y python3.7 \
    && echo 'alias python=python3.7' >> ~/.bashrc
## .NET
RUN declare repo_version=$(if command -v lsb_release &> /dev/null; then lsb_release -r -s; else grep -oP '(?<=^VERSION_ID=).+' /etc/os-release | tr -d '"'; fi) \
    && wget https://packages.microsoft.com/config/ubuntu/$repo_version/packages-microsoft-prod.deb -O packages-microsoft-prod.deb \
    && dpkg -i packages-microsoft-prod.deb \
    && rm packages-microsoft-prod.deb \
    && apt-get update \
    && apt-get install -y dotnet-sdk-5.0 \
    && dotnet tool install -g dotnet-script --version 1.3.0 \
    && rm -rf /var/lib/apt/lists/*
ENV PATH $PATH:$HOME/.dotnet/tools:/usr/lib/go-1.16/bin
## NodeJS
ENV NVM_DIR $HOME/.nvm
RUN mkdir $NVM_DIR \
    && wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install 16.4.1 \
    && nvm alias default 16.4.1 \
    && nvm use default
## Rust
RUN curl --proto '=https' --tlsv1.3 -sSf https://sh.rustup.rs | bash -s -- -y --default-toolchain=1.53.0

# Compile POCs
## C
RUN clang-12 C/commenting-out.c -o C/commenting-out; \
    clang-12 C/early-return.c -o C/early-return; \
    clang-12 C/homoglyph-function.c -o C/homoglyph-function; \
    clang-12 C/invisible-function.c -o C/invisible-function; \
    clang-12 C/stretched-string.c -o C/stretched-string
## C++
RUN clang++-12 C++/commenting-out.cpp -o C++/commenting-out; \
    clang++-12 C++/homoglyph-function.cpp -o C++/homoglyph-function; \
    clang++-12 C++/invisible-function.cpp -o C++/invisible-function; \
    clang++-12 C++/stretched-string.cpp -o C++/stretched-string
## Go
RUN go build -o Go/commenting-out Go/commenting-out.go; \
    go build -o Go/early-return Go/early-return.go; \
    go build -o Go/homoglyph-function Go/homoglyph-function.go; \
    go build -o Go/stretched-string Go/stretched-string.go
## Java
RUN javac -encoding utf8 Java/CommentingOut.java; \
    javac -encoding utf8 Java/HomoglyphFunction.java; \
    javac -encoding utf8 Java/StretchedString.java
## Rust
RUN ~/.cargo/bin/rustc Rust/commenting-out.rs -o Rust/commenting-out; \
    ~/.cargo/bin/rustc Rust/homoglyph-function.rs -o Rust/homoglyph-function; \
    ~/.cargo/bin/rustc Rust/stretched-string.rs -o Rust/stretched-string