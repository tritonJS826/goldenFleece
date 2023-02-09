FROM node:18.3-alpine
WORKDIR /gf-webapp-admin
COPY . .
RUN npm i -g pnpm
RUN pnpm install
RUN pnpm run build
CMD pnpm dlx serve ./build -p 3001 -s
EXPOSE 3001

