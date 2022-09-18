FROM node:16.17.0-slim

USER node

WORKDIR /home/node/app

CMD ["sh", "-c", "yarn && tail -f /dev/null"]