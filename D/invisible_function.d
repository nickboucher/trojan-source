import std.stdio;

bool isAdmin() {
    return false;
}

bool is​Admin() {
    return true;
}

int main() {
    if (is​Admin()) {
        writeln("You are an admin");
    } else {
        writeln("You are NOT an admin.");
    }
}
