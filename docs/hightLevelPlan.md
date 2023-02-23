# Golden fleece Hight level plan

## UserApp (150h)
### Features
* [x] **routing**
* [] **mailOnBook** custom realisation
* [x] **multilangs**

### Common components
* [x] **border** (includes header, footer) (6h) 
* [x] **header** (logo, name, navbar(aboutUs, Rooms, Services), phone, email, langs buttons) (6h)
* [x] **footer** (logo, name, links to another pages, social links, contacts) (6h)

### Pages
1. MainPage
* [x] **promoSlider** or video (in depends of mobile/desktop) (6h)
* [x] **bookBlock** (button to the RoomsPage) (6h)
* [x] **shortDescriptionBlock** (links to other places on the site) (6h)
* [x] **mapBlock** (onClick - fullscreen mode) hotel location, airport, bus stations and routes, sights for tourists, restaurants, ATM, cafe, shops, restaurant пр. (links to the partner programs) (32h)

2. RoomsPage 
* [] **hotelPlan** (maybe interactive, with swimming pool, restaurants etc...) (6h)
* [] **roomsFilter** (form with choice room: number of guests, number of rooms, price, additional filters, posibility to pay; after submit manager and user get autoletters about booking room) (32h)
* [x] **roomCards** cards with rooms with short description, prices etc. (6h) 
* [] **FilterRooms** calendar, persons etc.

3. RoomPage (Specific room description) 
* [] **roomGallery** (some images with scale) (16h)
* [] **roomInfo** (16h)

4. AboutUs
* [x] **AboutUsBlock** (text and image) (6h)

## AdminApp (80h)
### For admin
1. [] **AdminCRUDRoom** (24h)
2. [] **AdjustPromo** (16h)
3. [] **UpdateHotelPlan** (16h)
4. [x] **AdminAuth** (24h)

## REST API Server features (110h)
2. [] **CRUDRoom** (24h)
1. [] **Adjust promo** (24h)
5. [x] **SwaggerFile** (14h )auto generation (maybe with auto generators) 
3. [] **UpdateHotelPlan** (8h)
4. [] **Auth** (40h)
5. [x] **Docker container** (16h)

---
## Backlog 

### AdditionalServicesPage
* [] **servicesBlock** (swimmingPool, security, safe deposit, restaurant if included & room order, excursions, dry cleaning, home pets services)

### features
* [] **customerReviews** (page with users reviews and posibility to comments other reviews)
* [] **currentWether** (entertainment and cloth recommendations)
* [] **currentTime** ()
* [] **callTaxi** (?продумать?)
* [] **hotelNews**
* [] **discounts**
* [] **hotelBlog**
* [] **analytics** (how much callTaxi button pressed)
* [] **thematesation** dark/white
* [x] **autogenertors** to connect server and client