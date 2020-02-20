# conventions

- folder structure
  - filenames
  - MVC
  - api no views -model controler

```
request->controller->model->view->response
```

# MVC

- resource (bookmarks are resource here, or dishes, users for goodfoodhunting)
- separation of concerns

# controllers

- bookmarksController.js
- usersController.js

- dishesController.js
- likesController.js
- venuesController.js

# models

```
Bookmark.all()  //read
Bookmark.create() //create
Bookmark.destory() //delete
Bookmark.update() //update
Bookmark.findByID(id) // find by id
```

<!-- - bookmark.js
- dish.js
- like.js
- venue.js -->

```
seiwiki-api/
app/
controllers/
models/
db/
schema.sql
seed.js
db.js
lib/
public/

server.js

seiwiki-client
js/
app.js
lib.js

css/(share if need)
base.css
nav.css
sidebar.css
map.css
footer.css

index.html
```

# css
