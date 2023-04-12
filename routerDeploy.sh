### Unzip the router folders
### Install dependencies

sudo apt-get update --yes
sudo apt-get upgrade --yes

echo "*** Installing Docker ***"
apt-get install --yes docker.io

echo "*** Installing tshark ***"
echo "wireshark-common wireshark-common/install-setuid boolean true" | sudo debconf-set-selections
sudo DEBIAN_FRONTEND=noninteractive apt-get -y install tshark

echo "*** Installing screen ***"
sudo apt-get install --yes screen

echo "*** Installing docker-compose ***"
sudo apt-get install --yes docker-compose



### Start routers in screen

# First, kill port 80 processes
sudo kill $(sudo lsof -t -i:80)
sudo kill $(sudo lsof -t -i:8000)
sudo docker rm -f tl-wr840n_nginx_1
sudo docker rm -f tl-wr840n_django_1
screen -ls w840 | awk '/\./{system("screen -XS "$1" quit")}'

# Start tl-wr840n on port 80
cd tl-wr840n
screen -d -m -S w840 bash -c "sudo docker-compose up"


# First, kill port 8080 processes
sudo kill $(sudo lsof -t -i:8080)
sudo kill $(sudo lsof -t -i:8001)
sudo docker rm -f tl-wr841n_nginx_1
sudo docker rm -f tl-wr841n_django_1
screen -ls w841 | awk '/\./{system("screen -XS "$1" quit")}'

# Start tl-wr841n on port 8080
cd ../tl-wr841n/
screen -d -m -S w841 bash -c "sudo docker-compose up"

cd ../

# Start pcapcron.sh for capturing pcap files
screen -ls pcapcron | awk '/\./{system("screen -XS "$1" quit")}'
screen -d -m -S pcapcron bash -c "bash pcapcron.sh"

# Start extract_automizer.sh for to extract pcaps to txt files every 5 minutes
screen -ls extract_auto | awk '/\./{system("screen -XS "$1" quit")}'
screen -d -m -S extract_auto bash -c "bash extract_automizer.sh"
