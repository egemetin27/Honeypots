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

# Start tl-wr840n
cd tl-wr840n
sudo kill $(sudo lsof -t -i:80)
screen -ls w840 | awk '/\./{system("screen -XS "$1" quit")}'
screen -d -m -S w840 bash -c "sudo docker-compose up"

# Start tl-wr841n
cd ../tl-wr841n/
sudo kill $(sudo lsof -t -i:8080)
screen -ls w841 | awk '/\./{system("screen -XS "$1" quit")}'
screen -d -m -S w841 bash -c "sudo docker-compose up"

cd ../

# Start pcapcron.sh for capturing pcap files
screen -ls pcapcron | awk '/\./{system("screen -XS "$1" quit")}'
screen -d -m -S pcapcron bash -c "bash pcapcron.sh"

# Start extract_automizer.sh for to extract pcaps to txt files every 5 minutes
screen -ls extract_auto | awk '/\./{system("screen -XS "$1" quit")}'
screen -d -m -S extract_auto bash -c "bash extract_automizer.sh"
