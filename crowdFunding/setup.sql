DROP TABLE IF EXISTS user_don_projet;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS dons;
DROP TABLE IF EXISTS projets;

CREATE TABLE dons
(
  id SERIAL PRIMARY KEY,
  donation bigint
);

INSERT INTO dons
  (donation)
VALUES
  (5),
  (10),
  (15),
  (20),
  (50),
  (100),
  (200),
  (500);

CREATE TABLE projets
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

INSERT INTO projets
  (name)
VALUES
  ('Hackeuses'),
  ('Refuhelp'),
  ('Simplon.co');

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  lastname varchar(255),
  firstname varchar(255)
);

INSERT INTO users
  (firstname, lastname)
VALUES
  ('David', 'Ostermann'),
  ('Faustino', 'Kialungila'),
  ('Paljor', 'Tsang'),
  ('Gaelle', 'Meric');

CREATE TABLE user_don_projet
(
  user_id integer REFERENCES users ON DELETE CASCADE,
  don_id integer REFERENCES dons ON DELETE CASCADE,
  projet_id integer REFERENCES projets ON DELETE SET NULL,
);

INSERT INTO user_don_projet
  (user_id, don_id, projet_id)
VALUES
  (1, 3, 1),
  (1, 1, 2),
  (1, 7, 2),
  (2, 1, 1),
  (3, 4, 3),
  (3, 8, 3),
  (4, 6, 1);
