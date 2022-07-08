CREATE TABLE carros(
	id serial PRIMARY KEY,
	placa varchar (15),
	marca varchar (15),
	modelo varchar (15)
);

INSERT INTO carros (placa, marca, modelo, cliente_id)
VALUES ('ABC-123', 'Volkswagen', 'Fusca', 1);

INSERT INTO carros (placa, marca, modelo, cliente_id)
VALUES ('DEF-456', 'Chevrolet', 'Opala' , 2);

INSERT INTO carros (placa, marca, modelo, cliente_id)
VALUES ('GHI-789', 'Ford', 'Corcel' , 3);

INSERT INTO carros (marca, modelo)
VALUES ('Dodge', 'Charger');

UPDATE carros SET
placa = 'JKL-258' WHERE id=7;

ALTER TABLE carros
ADD cliente_id int;

ALTER TABLE carros
DROP COLUMN cliente_id;

DELETE FROM carros;

SELECT * FROM carros;