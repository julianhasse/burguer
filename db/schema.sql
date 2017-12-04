/*
To run this file, we do the following in our Terminal:
1. Go to the directory of this sql file.
2. Get into our mysql console.
3. Run "source schema.sql"
*/
DROP DATABASE IF EXISTS burgers_db;
-- Create the database burgers_db and specified it for use.
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(225) NOT NULL,
    devoured BOOLEAN NOT NULL, 
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

