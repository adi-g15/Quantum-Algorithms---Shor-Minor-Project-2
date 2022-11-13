1. .pem file contains base64 encoded data, where the data itself is similar to
binary DER fomatted file (ref: https://www.cryptosys.net/pki/rsakeyformats.html)

To read in base64: new Buffer(data, "base64")

2. Data/Text on breaking RSA (ref:
   https://www.technologyreview.com/2019/05/30/65724/how-a-quantum-computer-could-break-2048-bit-rsa-encryption-in-8-hours/)

3. RSA v/s Quantum: Text about Shor's (ref:
   https://www.scip.ch/en/?labs.20220519)

4. Factoring 2048-bit RSA integers in 8 hours using 20 million noisy qubits: https://arxiv.org/pdf/1905.09749.pdf

5. Getting n and e from public key .pem file:
   https://jpassing.com/2021/11/30/using-pem-to-encode-public-keys/

5.1. ASN.1 Decoder: https://lapo.it/asn1js/

6. Apne keys ka e,d,n pta kr le, phir show kar sakte hai ki ssh keys ko break
   krke kaise remote system pe root access le skte hai, if have enough power,
   create the ec2 instance in front of them, and hack it

7. .pem private key file syntax: https://datatracker.ietf.org/doc/html/rfc3447#appendix-A

8. Creating .pem private key from n,p,q,e

> Creating public key from private keys: https://stackoverflow.com/a/64492227/12339402
