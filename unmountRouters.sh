sudo kill $(sudo lsof -t -i:80)
screen -ls w840 | awk '/\./{system("screen -XS "$1" quit")}'

sudo kill $(sudo lsof -t -i:8080)
screen -ls w841 | awk '/\./{system("screen -XS "$1" quit")}'

screen -ls pcapcron | awk '/\./{system("screen -XS "$1" quit")}'

screen -ls extract_auto | awk '/\./{system("screen -XS "$1" quit")}'
