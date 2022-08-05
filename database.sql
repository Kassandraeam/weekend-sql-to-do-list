CREATE TABLE "toDoList" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (250) NOT NULL,
	"complete" BOOLEAN DEFAULT FALSE,
	"delete" BOOLEAN DEFAULT FALSE
);

INSERT INTO "toDoList" 
	("task") 
VALUES 
	('Store data inside database using SQL'),
	('When a task is added, should refresh to show all the tasks that need to be completed.'),
	('Task is given two options.');

SELECT * FROM "toDoList";