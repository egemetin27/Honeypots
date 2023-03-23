###@Orcun#####
if ps ax | grep -v grep | grep 'tcpdump -G 3600' > /dev/null
then
    echo "$dt: TCPdump already running"
else
    echo "$dt: Starting TCPdump"
    DIR="pcaps_new/"
    if [ ! -d "$DIR" ]; then
      # Create DIR if it doesn't exist
      echo "$dt: Making directory: ${DIR}"
      mkdir $DIR
    fi
    sudo tcpdump -G 3600 -w "${DIR}trace_%Y-%m-%d_%H:%M:%S.pcap" 'port 80' or 'port 8080'
    echo "$dt: TCPdump Finished"
fi
