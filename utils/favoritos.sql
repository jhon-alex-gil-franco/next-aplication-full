CREATE TABLE fav (
	id VARCHAR(40) NOT NULL,
	nombre VARCHAR ( 200 )   NULL,
	autor VARCHAR ( 100 )  NULL,
	img VARCHAR ( 500 )   NULL,
    uri VARCHAR(500) NULL,
    email_user VARCHAR(255) NOT NULL,
	CONSTRAINT FAV_PK PRIMARY KEY(id)
        
);



