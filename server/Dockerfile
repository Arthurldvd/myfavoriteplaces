FROM node:24-alpine
WORKDIR /app
COPY package.json package.json
RUN npm i
COPY tsconfig.json tsconfig.json
COPY src src
RUN npm run build
CMD ["npm", "start"]
