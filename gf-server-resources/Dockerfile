FROM node:18.3-alpine
WORKDIR /gf-server-resources
COPY . .
RUN npm i -g pnpm
RUN pnpm i
RUN pnpm run build
CMD pnpm dlx concurrently "node ./build/main.js" "pnpm dlx serve files -p 3501"
EXPOSE 3500 3501

