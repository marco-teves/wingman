-- workouts

CREATE TABLE IF NOT EXISTS workouts (
    workoutID INTEGER PRIMARY KEY AUTOINCREMENT,
    workoutName TEXT NOT NULL,
    category TEXT NOT NULL,
    duration INTEGER NOT NULL,
    info TEXT,
    CHECK (duration >= 0) -- Ensure duration is non-negative
);

INSERT INTO workouts (workoutName, category, duration, info) VALUES
    ('Push-ups', 'Upper Body', 5, 'Basic push-up exercise'),
    ('Squats', 'Lower Body', 7, 'Bodyweight squat exercise'),
    ('Plank', 'Core', 3, 'Front plank position'),
    ('Jumping Jacks', 'Cardio', 4, 'Aerobic exercise with jumping motion'
);