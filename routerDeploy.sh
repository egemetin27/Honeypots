### Unzip the router folders
#sudo apt install unzip
#unzip hp_2103.zip -d hp_router

### Install dependencies

#sudo apt install screen
sudo apt update
sudo apt upgrade
apt install docker.io
sudo apt install tshark

pip install --upgrade pip
pip install docker-compose




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
