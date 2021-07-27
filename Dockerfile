FROM node:16

WORKDIR /app
COPY package.json yarn.lock /prisma /app/
RUN yarn
RUN npx prisma generate
COPY . /app/
RUN yarn build

CMD [ "yarn", "start" ]