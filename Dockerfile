FROM node:alpine

COPY ./tsconfig.json ./package.json ./package-lock.json /usr/sudoku/

RUN cd /usr/sudoku && npm install
