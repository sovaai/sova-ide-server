FROM node:lts-jessie as build

RUN mkdir /opt/app
WORKDIR /opt/app

COPY package.json /opt/app/package.json

RUN npm install --silent

COPY . /opt/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

RUN npm run build:production

FROM node:lts-alpine

RUN mkdir /opt/app
WORKDIR /opt/app

ARG TEMPLATES_API_URL
ARG SEARCH_API_URL
ARG STAPI_AUTH_URL
ARG STAPI_AUTH_URL_DEV
ARG CHAT_API_URL
ARG APOLLO_INTROSPECTION
ARG APOLLO_PLAYGROUND
ARG PORT
ARG PORT_DEV

RUN echo "$TEMPLATES_API_URL"
RUN echo $SEARCH_API_URL


COPY package.json /opt/app/package.json

COPY --from=build /opt/app/node_modules /opt/app/node_modules
COPY --from=build /opt/app/server /opt/app/server

RUN touch .env
RUN echo -e "\
  TEMPLATES_API_URL=$TEMPLATES_API_URL\n\
  SEARCH_API_URL=$SEARCH_API_URL\n\
  STAPI_AUTH_URL=$STAPI_AUTH_URL\n\
  STAPI_AUTH_URL_DEV=$STAPI_AUTH_URL_DEV\n\
  CHAT_API_URL=$CHAT_API_URL\n\
  APOLLO_INTROSPECTION=$APOLLO_INTROSPECTION\n\
  APOLLO_PLAYGROUND=$APOLLO_PLAYGROUND\n\
  PORT=$PORT\n\
  PORT_DEV=$PORT_DEV" > .env

EXPOSE 5000

CMD [ "node", "server/main" ]
