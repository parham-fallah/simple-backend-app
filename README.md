# Database
```pgsql
users (
  id            UUID          PRIMARY KEY  DEFAULT gen_random_uuid(),
  email         VARCHAR(256)  NOT NULL                     
  password_hash VARCHAR(512)  NOT NULL                     
  created_at    TIMESTAMP     NOT NULL  DEFAULT now()     
)

categories (
  id         SERIAL       PRIMARY KEY,
  name       VARCHAR(128) NOT NULL                   
  created_at TIMESTAMP    NOT NULL  DEFAULT now()    
)

notes (
  id          SERIAL       PRIMARY KEY,
  user_id     UUID         NOT NULL  REFERENCES users(id),
  category_id INTEGER      NOT NULL  REFERENCES categories(id),
  title       VARCHAR(256) NOT NULL                     
  content     TEXT         NOT NULL                     
  created_at  TIMESTAMP    NOT NULL  DEFAULT now()      
)
```
# Backend Routes
## Users
- `POST` - `/users` : Register a new user
- `GET` - `/users/:user_id` : Get user data
- `PUT` - `/users/:user_id` : Update user data
- `DELETE` - `/users/:user_id` : Delete user

## Categories
- `GET` - `/categories` : Get all categories

## Notes
- `GET` - `/users/:user_id/notes` : List notes for a user
- `POST` - `/users/:user_id/notes` : Create a note
- `GET` - `/users/:user_id/notes/:note_id` : Get note
- `PUT` - `/users/:user_id/notes/:note_id` : update a note
- `DELETE` - `/users/:user_id/notes/:note_id` : delete a note