#infile=/home/nes/Desktop/hp_new/HP/trace_2023-01-09_22:19:05.pcap
#infile=./trace_2023-01-10_04:40:43.pcap
infile=pcaps_new/$(ls pcaps_new -Art | tail -n 1)
echo "Reading \"${infile}\" | time: $(date +"%T") ..."
outfile=extract_file
ext=txt

# For router pages

# Extract the HTTP traffic and write it to the output file
rm -f routerTxt/${infile}_extract_HTTP.txt
touch routerTxt/${infile}_extract_HTTP.txt
tshark -r "${infile}" -Y "tcp.port == 80 or tcp.port == 8080" -T fields -e ip.src -e http.request.method -e http.request.uri -e http.response.code -e http.response.phrase >> routerTxt/${infile}_extract_HTTP.${ext}


# For telnet

# Delete the old output file
#rm -f ${outfile}_all.${ext}

# Create a new output file
#touch ${outfile}_all.${ext}

# Extract the Telnet traffic and write it to the output file
#tshark -r "${infile}" -Y "ip.dst == 172.24.107.78 and telnet" -T fields -e ip.src -e telnet.data >> ${outfile}_TELNET.${ext}
