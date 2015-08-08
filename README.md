# Pair
Dating App for Mhack2015

##TODO: 
1. Building a server that can handle GET request from Yo server when a user Yo his/her partner. Process request and send an update 
to his/her partner from the server side.(proposed solution-firebase)
2. (Front-end)Continue improving the login/register module to include visual form validation. 
3. (Database)Contruct a storage format to store boyfriend girlfriend pair. When pairing two person, should generate an unique roomId
that allows us quickly identify this couple. rooms[couple's RoomID] = array of yo history

##Proposed Structure:

###Client:
1. Client side has two modes: Seme and Uke
2. Seme mode user will subscribe to the Uke mode user
3. Uke mode user will set up several information including wishlist, location and update period
4. Seme can only subscribe one Uke user at a time and vice versa.
5. Clients will have call back function to the Server's database for "vibration"

###Server:
1. Server side will receive http request from client.

###Request Definition:

####Seme:
+ GET: /api/int:userid/ 
  + get the current state of Uke
+ POST: /api/int:userid/vibrate
  + post a vibration to uke
+ POST: /api/int:userid/change
  + change from seme to uke
+ POST: /api/int:userid/
  + subscribe to the uke (uke id will in the post request)
+ DELETE: /api/int:userid/
  + delete the current uke subscribe
+ PUT: /api/int:userid/
  + update to a new uke subscribe (uke id will in the put request)
+ Callback Func:
  + Callback function by using firebase when semma send a vibrate

####Uke:
+ GET: /api/int:userid/
  + get the current state
+ POST: /api/int:userid/
  + update uke settings
+ POST: /api/int:userid/vibrate
  + post a vibration to sema 
+ POST: /api/int:userid/change
  + change from uke to seme
+ POST: /api/int:userid/newlist
  + create a new list
+ POST: /api/int:userid/int:listid
  + add new entry to the list
+ GET: /api/int:userid/int:listid/int:entryid
  + view the specific entry
+ POST: /api/int:userid/int:listid/int:entryid
  + move the specific entry
+ DELETE: /api/int:userid/int:listid/int:entryid
  + delete the specific entry
+ Callback Func:
  + Callback function by using firebase when semma send a vibrate
