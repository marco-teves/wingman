
DROP TABLE IF EXISTS activities;

CREATE TABLE IF NOT EXISTS activities(
    id CHAR(40) PRIMARY KEY,
    activity_name VARCHAR(30) NOT NULL,
    activity_duration INTEGER NOT NULL CHECK (activity_duration >= 0 AND activity_duration <= 60),
    activity_description TEXT NOT NULL
);

INSERT INTO activities(id, activity_name, activity_duration, activity_description) VALUES
('d279cccf-dd17-4099-89dc-7445328e05b0', 'Push Up', 45, 'self explanatory'),
('06bad132-1ea6-4767-b9b2-bcec9a894035', 'Plank Hold', 60, 'hold for longer if you can'),
('0134d646-b8a6-4e23-8993-1360005127f9', 'Mountain Climbers',35, 'yes'),
('35d8afff-2ea0-416e-b6af-1dcb131e072b', 'High Knees', 60, 'can go easy here'),
('decb4917-3d36-4420-9834-2a4bd483e343', 'Burpees', 30, 'good luck lmao (#`Д´)');

