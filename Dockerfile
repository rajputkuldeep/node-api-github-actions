FROM node:14-alpine
RUN apk add dumb-init
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY --chown=node:node . /usr/src/app
RUN npm ci --only=production
USER node
EXPOSE 8080
CMD ["dumb-init", "node", "index.js" ]
