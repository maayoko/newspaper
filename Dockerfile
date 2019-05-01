FROM node:11.9
LABEL maintainer="maayoko@gmail.com"

USER root
RUN apt-get update && \
    mkdir /home/node/app && \
    chown -R node:node /home/node/app

USER node
WORKDIR /home/node/app

EXPOSE 3000

CMD ["sh", "setup.sh"]
