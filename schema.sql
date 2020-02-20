  
CREATE DATABASE seiwiki;

CREATE TABLE bookmarks (
  id SERIAL PRIMARY KEY,
  url TEXT NOT NULL,
  description TEXT
);

INSERT INTO bookmarks (description, url) 
VALUES ('fun way to learn sql', 'https://sqlbolt.com/');