while true; do
  # Check if the container is running
  if ! docker container ls | grep -q "my_container"; then
    # If the container is not running, start it
    docker run --name tel_con -p 23:23 telnet
  fi
    docker rm tel_con
    docker run --name tel_con -p 23:23 telnet
  # Sleep for 15 minutes
  sleep 900
done
