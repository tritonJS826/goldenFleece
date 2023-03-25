User stories tests

### Customer wants to rent a room via page *Rooms*
1. Customer open public site main page
        * data attribute "main-page" exist 
2. open burger menu
        * nav list visible 
3. click on "Rooms" page link
        * data attirbute "rooms-page" exist
4. filter rooms list
        * fill filter fields with data-attributes: ....
5. read more about specific room
        * data attribute "room-page"
6. press book room
        * modal window appears (data attribute "booking-form")
7. fill form and submit form
        * booking form closed (data attribute "booking form")
        * notification "check message" appears (data-attribute notificateon)

### Manger wants to create new room
1. Manager open private site auth page
        * auth form appears
2. fill auth form and submit
        * main admin page appears data attribute "admin-main-page"
3. click button data attribute "create new room"
        * modal window appears (date attribute "add room")
4. fill form and submit form
       * create room form closed (data attribute "add room")
 
### Manger wants to edit room
1. Manager open private site auth page
        * auth form appears
2. fill auth form and submit
        * main admin page appears data attribute "admin-main-page"
3. click on the room which need to change with data attribute "room id"
        * page with specific room open (date attribute "admin room id")
4. click button edit near the field (data attribute "admin edit button")
       * input focus and admin change info
5. click button save (data attribute "admin save button")

### Manger wants to delete room
1. Manager open private site auth page
        * auth form appears
2. fill auth form and submit
        * main admin page appears data attribute "admin-main-page"
3. click on button delete on specific room with data attribute "delete button room id"
        * specific room deleted (date attribute "room id")