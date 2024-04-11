--up--
CREATE TABLE IF NOT EXISTS activities(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    activity_name VARCHAR(30) NOT NULL,
    activity_duration INTEGER NOT NULL CHECK (activity_duration >= 0 AND activity_duration <= 60),
    activity_difficulty VARCHAR(30),
    activity_description TEXT NOT NULL
);


--down--
DROP TABLE IF EXISTS activities;