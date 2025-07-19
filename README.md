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
