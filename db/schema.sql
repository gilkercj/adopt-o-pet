### Schema

CREATE DATABASE adopt_db;
USE adopt_db;

CREATE TABLE pets
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	adopted BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
