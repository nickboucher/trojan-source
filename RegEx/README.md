# RegEx

This directory contains a collection of regular expressions that can be used to help identify Trojan Source attacks.

These expressions are designed to detect Bidi-based Trojan Source attacks, but not other variants such as homoglyph attacks. They work by capturing unbalanced Bidi expressions within comments and string literals for most languages. Please note that false positives are possible: results should be analyzed to differentiate benign and adversarial use cases of unbalanced Bidi control characters.

RegEx's are provided in two common syntaxes: PCRE2 and Java (which is approximately PCRE1).