while true; do bash ./extract2.sh pcaps_new/$(ls pcaps_new -Art | tail -n 1); sleep 300; done
