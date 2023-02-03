FROM node:18.3-alpine
WORKDIR /gf-webapp
COPY . .
RUN pnpm install
RUN pnpm run build
CMD pnpm dlx serve ./build -p 3000 -s
EXPOSE 3000

