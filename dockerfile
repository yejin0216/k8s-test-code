FROM node:jessie
EXPOSE 8080
COPY index.js .
CMD node index.js > log.out