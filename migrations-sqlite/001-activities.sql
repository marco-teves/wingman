DROP TABLE IF EXISTS activities;
DROP TABLE IF EXISTS users;


CREATE TABLE IF NOT EXISTS activities(
    id CHAR(40) PRIMARY KEY,
    activity_name VARCHAR(30) NOT NULL,
    activity_duration INTEGER NOT NULL CHECK (activity_duration >= 0 AND activity_duration <= 60),
    activity_description TEXT NOT NULL,
    activity_user_generated BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO activities(id, activity_name, activity_duration, activity_description, activity_user_generated) VALUES
('d279cccf-dd17-4099-89dc-7445328e05b0', 'Push Ups', 45, 'self explanatory', FALSE),
('06bad132-1ea6-4767-b9b2-bcec9a894035', 'Plank Hold', 60, 'hold for longer if you can', FALSE),
('0134d646-b8a6-4e23-8993-1360005127f9', 'Mountain Climbers',35, 'yes', FALSE),
('35d8afff-2ea0-416e-b6af-1dcb131e072b', 'High Knees', 60, 'can go easy here', FALSE),
('decb4917-3d36-4420-9834-2a4bd483e343', 'Burpees', 30, 'good luck lmao (#`Д´)', FALSE),
('decb4917-3d36-4420-9834-2a4bd483e345', 'Star Jumps', 30, 'AAAAA', FALSE),
('decb4917-3d36-4420-9834-2a4bd483e346', 'Lunges', 60, 'AAAAA', FALSE),
('decb4917-3d36-4420-9834-2a4bd483e347', 'Bicycle Crunches', 45, 'AAAAA', FALSE),
('decb4917-3d36-4420-9834-2a4bd483e348', 'Russian Twists', 30, 'these hurt', FALSE),
('decb4917-3d36-4420-9834-2a4bd483e349', 'Skater', 30, 'do a kick flip', FALSE);


CREATE TABLE IF NOT EXISTS users(
    id CHAR(40) PRIMARY KEY,
    user_name VARCHAR(30) NOT NULL,
    user_password VARCHAR(30) NOT NULL
);

INSERT INTO users(id, user_name, user_password) VALUES
('e7a55620-f98f-11ee-bbc3-325096b39f47', 'Marco', 'admin'),
('ed3403d4-f98f-11ee-862e-325096b39f47', 'User', 'user');
