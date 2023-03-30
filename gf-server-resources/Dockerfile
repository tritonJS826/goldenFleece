FROM node:18.3-alpine
WORKDIR /gf-server-resources
COPY . .
RUN npm i -g pnpm --frozen-lockfile
RUN pnpm i --frozen-lockfile
RUN pnpm run build
CMD pnpm dlx concurrently "node ./build/main.js" "pnpm dlx serve files -p 3501"
EXPOSE 3500 3501

