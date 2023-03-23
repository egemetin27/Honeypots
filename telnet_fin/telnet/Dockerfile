FROM python:2.7

EXPOSE 23

#ADD server.py /

RUN apt-get update
RUN apt-get install python
RUN apt-get install zip
RUN pip install requests

COPY ./telnetsrv /telnetsrv
COPY ./zip_malwares /zip_malwares
COPY ./malware_files /malware_files
COPY ./telnetsrv /telnetsrv
COPY ./csv_functions.py /csv_functions.py
COPY ./deneme_1.csv /deneme_1.csv
COPY ./server.py /server.py

CMD [ "python", "server.py" ]
