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
	('Task is given two options.'),
	('I need inputs on the HTML that allow the user to create a task.'),
	('When the task is created, it should be sent to the database via PG and the Pool'),
	('When a a task is added, it needs to run the getTasks() function again.'),
	('When a task is added to the DOM, add a complete and delete button to them.'),
	('Complete and Delete buttons are dynamic so they need to be added in a special way.'),
	('Get rid of delete button. Delete button should be added WHEN the submit button is run that adds the task.'),
	('If task is marked complete (if complete button is clicked, run turn green function?) turn task background different color.'),
	('When the complete button is clicked, use Pool/PG to store the fact that it is complete in the database. (set complete equal to true)'),
	('When the delete button is clicked it should send some query text via pool/pg that updates the delete boolean in the database.');

SELECT * FROM "toDoList";

