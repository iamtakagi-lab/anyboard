FROM node:14

WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn
COPY . /app/
RUN yarn prisma:generate
RUN yarn build

CMD [ "yarn", "start" ]