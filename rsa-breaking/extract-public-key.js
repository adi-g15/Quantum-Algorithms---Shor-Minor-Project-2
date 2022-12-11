#!/bin/node

const crypto = require('crypto');
const {readFileSync, writeFileSync} = require('fs');

const private_key_filename = "./rsa-breaking.pem";
const public_key_filename = "./rsa-breaking.pub.pem";

let private_key = readFileSync(private_key_filename, 'utf8');

// Using type: 'pkcs1' will return a PEM-encoded PKCS#1 public key (RSA),
// while using type: 'spki' will return a PEM-encoded SubjectPublicKeyInfo
let public_key = crypto.createPublicKey(private_key).export({
    type: 'pkcs1',
    format: 'pem'
});

writeFileSync(public_key_filename, public_key);

