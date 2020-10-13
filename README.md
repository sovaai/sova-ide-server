[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# CREATE SSL CERT for Local development

- [Install mkcert](https://github.com/FiloSottile/mkcert)
- Follow instactions to create a root certificate and localhost certificate and key
- Copy localhost certificate and key into a certs folder of the project. In case it doesnt exist create one.
- sudo chown YOUR_USER_NAME \*-key.pem
- add your .env file (dublicate from .template.env)
