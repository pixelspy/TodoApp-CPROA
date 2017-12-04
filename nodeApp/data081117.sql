-- Adminer 4.3.1 PostgreSQL dump

DROP TABLE IF EXISTS "categories";
CREATE TABLE "public"."categories" (
    "id" integer NOT NULL,
    "title" character(50) NOT NULL,
    CONSTRAINT "categories_id" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "categories" ("id", "title") VALUES
(1,	'important                                         '),
(2,	'très important                                    '),
(3,	'peu important                                     ');

DROP TABLE IF EXISTS "todos";
CREATE TABLE "public"."todos" (
    "id" integer NOT NULL,
    "todos" character(100) NOT NULL,
    "id_categories" integer NOT NULL,
    CONSTRAINT "todos_id" PRIMARY KEY ("id"),
    CONSTRAINT "todos_id_categories_fkey1" FOREIGN KEY (id_categories) REFERENCES categories(id) NOT DEFERRABLE
) WITH (oids = false);

INSERT INTO "todos" ("id", "todos", "id_categories") VALUES
(1,	'Faire la vaisselle                                                                                  ',	1),
(2,	'Boire une bière                                                                                     ',	3),
(3,	'Prendre une pause                                                                                   ',	3),
(4,	'Manger des bonbons                                                                                  ',	1);

DROP TABLE IF EXISTS "users";
CREATE TABLE "public"."users" (
    "id" integer NOT NULL,
    "nom" character varying(100) NOT NULL,
    "prenom" character varying(100) NOT NULL,
    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "users" ("id", "nom", "prenom") VALUES
(1,	'Git',	'Hub'),
(2,	'Hanna',	'Dennington'),
(3,	'Mahana',	'Dee');

DROP TABLE IF EXISTS "users_todos";
CREATE TABLE "public"."users_todos" (
    "user_id" integer NOT NULL,
    "todo_id" integer NOT NULL,
    CONSTRAINT "users_todos_pkey" PRIMARY KEY ("user_id", "todo_id"),
    CONSTRAINT "users_todos_todo_id_fkey" FOREIGN KEY (todo_id) REFERENCES todos(id) ON DELETE CASCADE NOT DEFERRABLE,
    CONSTRAINT "users_todos_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE NOT DEFERRABLE
) WITH (oids = false);

INSERT INTO "users_todos" ("user_id", "todo_id") VALUES
(1,	3),
(2,	1),
(2,	4),
(3,	4),
(3,	1),
(2,	2),
(1,	1);

-- 2017-11-08 16:00:00.360618+00
