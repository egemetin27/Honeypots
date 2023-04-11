# Kill port 80 processes
sudo kill $(sudo lsof -t -i:80)
sudo kill $(sudo lsof -t -i:8000)
docker rm -f tl-wr840n_nginx_1
docker rm -f tl-wr840n_django_1
screen -ls w840 | awk '/\./{system("screen -XS "$1" quit")}'

# Kill port 8080 processes
sudo kill $(sudo lsof -t -i:8080)
sudo kill $(sudo lsof -t -i:8001)
sudo docker rm -f tl-wr841n_nginx_1
docker rm -f tl-wr841n_django_1
screen -ls w841 | awk '/\./{system("screen -XS "$1" quit")}'

screen -ls pcapcron | awk '/\./{system("screen -XS "$1" quit")}'

screen -ls extract_auto | awk '/\./{system("screen -XS "$1" quit")}'
