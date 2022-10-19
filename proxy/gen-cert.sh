#!/bin/sh

# remove old certs
rm certs/ca/*.pem
rm certs/server/*.pem
rm certs/ca/*.srl

# Generate a self-signed certificate for the proxy
openssl req -nodes -x509 -newkey rsa:4096 -sha256 -days 365 -keyout certs/ca/ca-key.pem -out certs/ca/ca-cert.pem -subj "/C=BR/ST=Parana/L=Toledo/O=Envcity/OU=IoT/CN=*.envcity.com/emailAddress=envcity@gmail.com"

# Generate a certificate signing request for the proxy
openssl req -nodes -newkey rsa:4096 -sha256 -keyout certs/server/server-key.pem -out certs/server/server-req.pem -subj "/C=BR/ST=Parana/L=Toledo/O=Sentilo/OU=Server/CN=localhost.com/emailAddress=sentilo@gmail.com"

# Sign the proxy's certificate with the CA's certificate
openssl x509 -req -sha256 -in certs/server/server-req.pem -CA certs/ca/ca-cert.pem -CAkey certs/ca/ca-key.pem -CAcreateserial -out certs/server/server-cert.pem

# debug info
#echo "CA's self-signed certificate"
#openssl x509 -in certs/ca/ca-cert.pem -noout -text