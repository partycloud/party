FROM ubuntu:14.04

RUN apt-get update && apt-get install -y curl

RUN curl -s https://install.zerotier.com/ | sudo bash

EXPOSE 9993/udp

CMD ['bash']
