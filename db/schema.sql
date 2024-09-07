DROP SCHEMA IF EXISTS beermeup;
CREATE SCHEMA beermeup;
USE beermeup;

CREATE TABLE Breweries(
	id INT AUTO_INCREMENT,
    name VARCHAR(64) NOT NULL,
    city VARCHAR(64) NOT NULL,
    state VARCHAR(2) NOT NULL,
    
    PRIMARY KEY (id)
);

CREATE TABLE Beers(
	id INT AUTO_INCREMENT,
    name VARCHAR(64) NOT NULL,
    style VARCHAR(64) NOT NULL,
    brewery_id INT NOT NULL,
    ibu TINYINT NOT NULL,
    abv DECIMAL(3,1) NOT NULL,
    ounces DECIMAL(3,1) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    price DECIMAL(10,2) NOT NULL,
    image_path VARCHAR(64) NOT NULL,
    
    PRIMARY KEY (id),
    FOREIGN KEY (brewery_id) REFERENCES Breweries(id) ON DELETE CASCADE ON UPDATE CASCADE
);

SELECT * FROM Breweries;
SELECT * FROM Beers;