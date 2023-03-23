FROM python:3.9.0-alpine

EXPOSE 80

RUN pip install --upgrade pip

COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY ./tl_wr840n_http /app
WORKDIR /app

COPY ./entrypoint.sh script.sh
ENTRYPOINT ["sh", "script.sh"]