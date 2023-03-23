infile=$1
echo "Reading ${infile}..."
outfile=extract_file
ext=txt

rm -f ${outfile}_all.${ext}
touch ${outfile}_all.${ext}

IP="IP: "
for stream in $(tshark -nlr "$infile" -Y "tcp.flags.syn==1" -T fields -e tcp.stream | sort -n | uniq | sed 's/\r//')
do
    echo "Processing stream $stream: ${outfile}_${stream}.${ext}"
    tshark -r "${infile}" -Y "ip.dst == 172.24.107.78" -w "${outfile}.pcap"

    #src_ip=$(tshark -r "${outfile}.pcap" -T fields -e ip.src | head -n 1) # broken pipeline error
    tshark -nlr "${outfile}.pcap" -qz "follow,tcp,raw,$stream" | tail -n +7 | sed 's/^\s\+//g' | xxd -r -p | tee extract_txts/${outfile}_${stream}.${ext} >> ${outfile}_all.${ext}

    # Get the source IP address and insert it at the beginning of the extracted text file
    #src_ip=$(tshark -r "${outfile}.pcap" -T fields -e ip.src | head -n 1)
    #sed -i "1i${src_ip}\n" extract_txts/${outfile}_${stream}.${ext}

done

python3 ./mal_downloader.py
