# !/bin/sh
openssl x509 -in Production.cer -inform DER -outform PEM -out Production-cert.pem
openssl pkcs12 -in Production.p12 -out Production-key.pem -nodes
openssl x509 -in Development.cer -inform DER -outform PEM -out Development-cert.pem
openssl pkcs12 -in Development.p12 -out Development-key.pem -nodes
