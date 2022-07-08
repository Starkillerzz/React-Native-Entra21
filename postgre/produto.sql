create table produto (
	id serial primary key,
	descricao varchar(20),
	preco float
);


insert into produto (descricao, preco)
values ('alcatra', 50);

insert into produto (descricao, preco, categoria_id)
values ('alcatra', 100, );

alter table produto
add categoria_id int;

alter table produto
add constraint fk_categoria foreign key(categoria_id)
references categoria(i
					 
					 
					 
					 
					 
					 
					 
					 
					 
					 
					 
					 
					 
					 
					 
					 
					 
					 
					 
					 
					 
					 
					 
					 
					 
					 d);

select * from produto;

SELECT p.descricao, p.preco, c.descricao as categoria
FROM produto p, categoria c
WHERE p.categoria_id = c.id; //como consultar por categoria_id


