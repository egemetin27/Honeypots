while true; do
  if ps -ef | grep -v grep | grep "tcpdump"; then
    echo "tcpdump is running"
  else
    echo "tcpdump is not running"
    # start tcpdump here
    # check if screen session is running
    if ! screen -list | grep -q "pcapcron"; then
        # if screen does not exist
        screen -dmS pcapcron bash -c 'bash pcapcron.sh'
    else
        # if screen exists, just run pcapcron.sh
        screen -S pcapcron -X stuff 'bash pcapcron.sh\n'
    fi
  fi
  sleep 600
done
