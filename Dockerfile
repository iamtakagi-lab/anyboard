FROM node:16

WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn
RUN yarn prisma:generate
COPY . /app/
RUN yarn build

CMD [ "yarn", "start" ]