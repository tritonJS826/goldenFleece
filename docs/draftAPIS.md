[ready] [stub]
## API SERVICE
* [][] get /api/room - get list of all rooms
* [][] post /api/room - create new room
* [][] update /api/room/${roomId} - update room by id
* [][] delete /api/room/${roomId} - delete room by id
___
* [][] get /api/promo - get list of promo images
* [][] update /api/promo - update promo list of images
* [][] post /api/promo - upload new image for promo
* [][] delete /api/promo - delete imfage from list of promo
___
## WITH STATIC RESOURCES SERVICE

* [x][x] get /resources/${roomImageId} - get image of room
* [][] post /api/room/${roomImageId}- create new image of room
* [][] put /api/room/$${roomImageId} - update room image
* [][] delete /api/room/${roomImageId}- delete image of room by id
___
* [x][x] get /resources/promo/${promoImageId} - get image of promo
* [][] post /api/promo/${promoImageId} - create image of promo
* [][] put /api/promo/${promoImageId} - update image of promo
* [][] delete  /api/promo/${promoImageId} - delete image of promo
___
* [x][x] get /resource/hotelPlan - get image of hotel plan
* [][] update /api/hotelPlan - update image of hotel plan
