FROM node:18.3-alpine
WORKDIR /gf-server-api
COPY . .
RUN npm i -g pnpm@7.18.2
RUN pnpm i --frozen-lockfile
RUN pnpm run build
CMD pnpm dlx serve ./build -p 3600 -s
EXPOSE 3600

