# Collection of different JSON dummy data ressources

## My JSON Server

- https://my-json-server.typicode.com/
- http://jsonplaceholder.typicode.com 
- http://jsonplaceholder.typicode.com/posts

### Resources
- /posts 	100 items
- /comments 	500 items
- /albums 	100 items
- /photos 	5000 items
- /todos 	200 items
- /users 	10 items

### Routes
- GET 	/posts
- GET 	/posts/1
- GET 	/posts/1/comments
- GET 	/comments?postId=1
- GET 	/posts?userId=1
- POST 	/posts
- PUT 	/posts/1
- PATCH 	/posts/1
- DELETE 	/posts/1

## Data from this repository
- https://my-json-server.typicode.com/tobiobi/myjasonserver/db
- https://my-json-server.typicode.com/tobiobi/myjasonserver/coordinates

## Some Random user (including an image)
- https://randomuser.me/api/

## API for any github repository:
- https://api.github.com/orgs/dotnet/repos
- https://api.github.com/orgs/vuejs/repos

Accessing a repo contents via the github API:
- https://api.github.com/repos/tobiobi/myjasonserver/contents/db.json
- https://raw.githubusercontent.com/TobiObeck/myjasonserver/master/db.json
- https://api.github.com/users/tobiobi
- https://api.github.com/users/tobiobi/followers

## 
**Example for usage of git files:** https://jsfiddle.net/tobiobeck/27z3u8cx/

https://raw.githubusercontent.com/TobiObeck/myjasonserver/master/a-thousand-geo-coords.json

## An online tool for JSON generation
lat, long. (type latitude, longitude)
- https://mockaroo.com/schemas/new

## Generating Geocoordinates with Excel

**english** names of used german excel functions: randomrange, random. text concat. substitution.

**german**

=ZUFALLSBEREICH(-90;90) +ZUFALLSZAHL()

=VERKETTEN("{ ""lat"": ";B10;", ""long"": ";C10; "},")

=WECHSELN(WECHSELN(D10;",";".";1);",";".";2)



**Example** (generate coords in german format, add object notation, replace commas with dots)

42,23842006	-81,53421333

{ "lat": 42,2384200584374, "long": -81,5342133317457},

{ "lat": 42.2384200584374, "long": -81.5342133317457},


