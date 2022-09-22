FROM node:16.17.0-slim

RUN apt update && apt install -y \
    git

USER node

WORKDIR /home/node/app

CMD ["sh", "-c", "yarn && tail -f /dev/null"]