docker build --tag sova-ide-server:test .
docker run --rm -p 8443:5000 --name sova-ide-test sova-ide-server:test
