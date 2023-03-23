infile=$1
echo "Reading ${infile}..."
outfile=extract_file
ext=txt

rm -f ${outfile}_all.${ext}
touch ${outfile}_all.${ext}

for stream in $(tshark -nlr "$infile" -Y "tcp.flags.syn==1" -T fields -e tcp.stream | sort -n | uniq | sed 's/\r//')
do
    echo "Processing stream $stream: ${outfile}_${stream}.${ext}"
    tshark -r "${infile}" -w "${outfile}.pcap"
    tshark -nlr "${outfile}.pcap" -qz "follow,tcp,raw,$stream" | tail -n +7 | sed 's/^\s\+//g' | xxd -r -p | tee extract_txts/${outfile}_${stream}.${ext} >> ${outfile}_all.${ext}
done

python3 ./mal_downloader.py
