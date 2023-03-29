### Unzip the router folders
### Install dependencies

sudo apt-get update --yes
sudo apt-get upgrade --yes

echo "***\nInstalling Docker\n***"
apt-get install --yes docker.io

echo "***\nInstalling tshark\n***"
sudo apt-get install --yes tshark

echo "***\nInstalling screen\n***"
sudo apt-get install --yes screen

echo "***\nInstalling docker-compose\n***"
sudo apt-get install --yes docker-compose



### Start routers in screen

# Start tl-wr840n
cd tl-wr840n
screen -d -m -S w840 bash -c "sudo docker-compose up"

# Start tl-wr841n
cd ../tl-wr841n/
screen -d -m -S w841 bash -c "sudo docker-compose up"

cd ../

# Start pcapcron.sh for capturing pcap files
screen -d -m -S pcapcron bash -c "bash pcapcron.sh"

# Start extract_automizer.sh for to extract pcaps to txt files every 5 minutes
screen -d -m -S extract_auto bash -c "bash extract_automizer.sh"
