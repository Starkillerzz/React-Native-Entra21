CREATE TABLE cliente(
	id serial PRIMARY KEY,
	nome varchar (20)

);

INSERT INTO cliente (nome, carros_id)
VALUES ('Ruan Alves de Souza', 1);

INSERT INTO cliente (nome, carros_id)
VALUES ('João', 2);

INSERT INTO cliente (nome, carros_id)
VALUES ('Maria', 3);

ALTER TABLE cliente
ADD carros_id int;

ALTER TABLE cliente
DROP COLUMN carros_id;

DELETE FROM cliente;

SELECT * FROM cliente;