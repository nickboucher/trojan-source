#!/usr/bin/env php
<?php

function isAdmin() {
    return false;
}

function is​Admin() {
    return true;
}

if (is​Admin()) {
    echo "You are an admin\n";
} else {
    echo "You are NOT an admin.\n";
}
