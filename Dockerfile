FROM node:18.17.0

ARG web=/opt/workspace/symbolmarket

WORKDIR ${web}

COPY . ${web}

RUN yarn \
    && yarn build

ENTRYPOINT yarn start

EXPOSE 3000
