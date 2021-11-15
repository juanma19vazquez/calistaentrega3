CREATE TABLE stock (
ID INT PRIMARY KEY NOT NULL,
QSTOCK integer
)

CREATE TABLE precio (
ID INTEGER PRIMARY KEY NOT NULL,
preciounitario decimal
)
CREATE TABLE productos(
id BIGSERIAL NOT NULL PRIMARY KEY,
product_name VARCHAR(50),
talle VARCHAR(10),
animal VARCHAR(50)
)
DROP TABLE productos
INSERT INTO stock (ID,QSTOCK)
VALUES(1,10),
(2,14),
(3,3),
(4,0),
(5,15),
(6,3),
(7,5),
(8,1),
(9,12),
(10,22),
(11,16)
;

SELECT * FROM stock

INSERT INTO precio (ID,preciounitario)
VALUES(1,500),
(2,500),
(3,500),
(4,450),
(5,450),
(6,450),
(7,400),
(8,150),
(9,650),
(10,650),
(11,650)
;
SELECT * FROM precio

INSERT INTO productos (product_name, talle,animal)
values
('ADIDOG-S','S','Perro'),
('ADIDOG-M','M','Perro'),
('ADIDOG-L','L','Perro'),
('CHALEQUITO -S','S','Perro'),
('CHALEQUITO -M','M','Perro'),
('CHALEQUITO -L','L','Perro'),
('PLATOS','N/A','Perro/Gato'),
('CHUPETES','N/A','Perro/Gato'),
('BUZO BERLIN-S','S','Perro'),
('BUZO BERLIN-M','M','Perro'),
('BUZO BERLIN-L','L','Perro')



SELECT * FROM productos

Select pr.*,q.QSTOCK,p.preciounitario
FROM stock q
JOIN precio p on p.id=q.id
JOIN productos pr on pr.id=q.id

