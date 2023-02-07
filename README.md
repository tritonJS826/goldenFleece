# rss-golden-fleece

Application with the services of the hotel "Golden Fleece" and the possibility of administration.

[Golen Fleece on booking.com](https://www.booking.com/hotel/ge/golden-fleece-kutaisi1.en-gb.html?label=golden-fleece-kutaisi1-PuaQq_ky5aWb1ZQ0gZZ0FQS541245730078%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-179416350486%3Alp9069844%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YXwxhKG0pUU-mcMVT-JwQpc&sid=796a669ccda304c03fa6e21b0fe80bf9&gclid=Cj0KCQiAq5meBhCyARIsAJrtdr7dXEfe6wLr9MY8jxzopxfmV0OIvFLkKYU9npE3u7y4rfcWbRSHopsaAkC7EALw_wcB&aid=311984&ucfs=1&arphpl=1&dest_id=900049994&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=1808496b59f4008a&srepoch=1673951192&from=searchresults#hotelTmpl)
### App's modules

* gf-server-api - the main REST API server
* gf-webapp - front end for clients
* gf-webapp-admin - front end for administrator with additional functionality (that is not available to the clients)
* gf-server-resources - the module for working with resources on the site

___

### Requirements: 
* node.js: 18.13.0
* pnpm: 7.25.0
* docker: 20.10.12
* docker-compose: 1.29.2

### Run in dev mode locally
1. download repo
2. install all dependencies in root directory 

```pnpm i```

3. generate code from backend

``` pnpm run swagger:generateAll```

4. run application's modules

```pnpm run startAll```

### Run build locally

1. run build command

```pnpm run buildAll```

### Run with docker locally

1. Create images and run all images with docker compose (maybe need sudo):

```docker-compose up --build```

2. For stop and remove containers, networks (maybe need sudo):

```docker-compose down```