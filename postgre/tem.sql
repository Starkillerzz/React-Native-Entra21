CREATE TABLE tem(
	cliente_id int,
	carros_id int
);

ALTER TABLE tem
ADD CONSTRAINT fk_cliente foreign key(cliente_id)
REFERENCES cliente(id);

ALTER TABLE tem
ADD CONSTRAINT fk_carros FOREIGN KEY (carros_id)
REFERENCES carros(id);

INSERT INTO tem (cliente_id, carros_id)
VALUES (4,4);

INSERT INTO tem (cliente_id, carros_id)
VALUES (5,5);

INSERT INTO tem (cliente_id, carros_id)
VALUES (6,6);

INSERT INTO tem (cliente_id, carros_id)
VALUES (4,5);

INSERT INTO tem (cliente_id, carros_id)
VALUES (4,6);

SELECT * FROM tem
WHERE cliente_id = 4;

SELECT tem.cliente_id, tem.carros_id, ca.placa, ca.modelo
FROM tem , carros ca
WHERE tem.carros_id = ca.id
AND tem.cliente_id = 4;

SELECT tem.cliente_id, tem.carros_id, cl.nome, ca.placa, ca.marca, ca.modelo
FROM tem , carros ca, cliente cl
WHERE tem.carros_id = ca.id
AND tem.cliente_id = cl.id
ORDER BY cl.nome;




SELECT * FROM tem;