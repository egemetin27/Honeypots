#!/bin/bash
echo sudo apt-get update
var=$(sudo apt-get install docker docker-compose)
if  [[ $var =~ "0 upgraded, 0 newly installed" ]] 
then
	echo "already latest version" 
else
	#down all images and tcpdump
	cd /home/nes/Desktop/HP/tl-wr841n && sudo docker-compose down
	cd /home/nes/Desktop/HP/tl-wr840n && sudo docker-compose down
	cd /home/nes/Desktop/HP/telnet_fin/telnet && sudo docker stop telnet_fin
	cd /home/nes/Desktop/HP && pkill -f pcapcron.shsudo apt-get upgrade

	#restart all images and tcpdump,

	cd /home/nes/Desktop/HP && bash pcapcron.sh
	cd /home/nes/Desktop/HP/telnet_fin/telnet && cd sudo docker build -t telnet_fin .
	cd /home/nes/Desktop/HP/telnet_fin/telnet && sudo docker run -p 10.50.148.80:23:23 telnet_fin
	cd /home/nes/Desktop/HP/tl-wr840n && sudo docker-compose build
	cd /home/nes/Desktop/HP/tl-wr840n && sudo docker-compose up
	cd /home/nes/Desktop/HP/tl-wr841n && sudo docker-compose build
	cd /home/nes/Desktop/HP/tl-wr841n && sudo docker-compose up
fi