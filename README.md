# axon-landing

## Docker
```sh
docker build -t targun/pjtargun:v1 .; docker push targun/pjtargun:v1;

# PROD IP ADDRESS:
ssh root@142.93.120.26

docker pull targun/pjtargun:v1; docker stop app1; docker rm app1; docker run -d --name app1 --restart=on-failure:5 -p 80:5000 targun/pjtargun:v1;

docker images -q | xargs docker rmi
```