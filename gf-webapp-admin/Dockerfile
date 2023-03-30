FROM node:18.3-alpine
WORKDIR /gf-webapp-admin
COPY . .
RUN npm i -g pnpm@7.18.2
RUN pnpm install --frozen-lockfile
RUN pnpm run build
CMD pnpm dlx serve ./build -p 3001 -s
EXPOSE 3001

