FROM nginx:1.20.1-alpine as builder

ENV MORE_HEADERS_VERSION=0.33
ENV MORE_HEADERS_GITREPO=openresty/headers-more-nginx-module

RUN apk add --no-cache wget
RUN apk add tar
#RUN apk add nano

# Download sources
RUN wget "https://nginx.org/download/nginx-1.20.1.tar.gz" -O nginx.tar.gz && \
    wget "https://github.com/openresty/headers-more-nginx-module/archive/refs/tags/v0.33.tar.gz" -O extra_module.tar.gz

# For latest build deps, see https://github.com/nginxinc/docker-nginx/blob/master/mainline/alpine/Dockerfile
RUN  apk add --no-cache --virtual .build-deps \
    gcc \
    libc-dev \
    make \
    openssl-dev \
    pcre-dev \
    zlib-dev \
    linux-headers \
    libxslt-dev \
    gd-dev \
    geoip-dev \
    perl-dev \
    libedit-dev \
    mercurial \
    bash \
    alpine-sdk \
    findutils

SHELL ["/bin/ash", "-eo", "pipefail", "-c"]

RUN rm -rf /usr/src/nginx /usr/src/extra_module && mkdir -p /usr/src/nginx /usr/src/extra_module
#RUN ls usr/src
RUN tar -xvf nginx.tar.gz -C /usr/src/nginx
RUN tar -xvf extra_module.tar.gz -C /usr/src/extra_module
 
WORKDIR /usr/src/nginx/nginx-1.20.1

# Reuse same cli arguments as the nginx:alpine image used to build
RUN CONFARGS=$(nginx -V 2>&1 | sed -n -e 's/^.*arguments: //p') && \
    sh -c "./configure --with-compat $CONFARGS --add-dynamic-module=/usr/src/extra_module/*" && make modules


# Production container starts here
FROM nginx:1.20.1-alpine

COPY --from=builder /usr/src/nginx/nginx-1.20.1/objs/*_module.so /etc/nginx/modules/

RUN ls /etc/nginx/modules/

COPY nginx.conf /etc/nginx/nginx.conf

RUN cat /etc/nginx/nginx.conf

# Validate the config
#RUN nginx -t