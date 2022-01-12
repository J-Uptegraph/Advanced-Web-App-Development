-- Add CREATE TABLE statements --
CREATE TABLE students (
    id serial PRIMARY KEY,
    name TEXT
);

CREATE TABLE organizations (
    id serial PRIMARY KEY,
    name TEXT
);

CREATE TABLE organization_student(
    id serial PRIMARY KEY,
    organization_id integer REFERENCES organizations (id),
    student_id integer REFERENCES students (id)
);

CREATE TABLE officers (
    id serial PRIMARY KEY,
    organization_id integer REFERENCES organizations (id),
    student_id integer REFERENCES students (id),
    officer TEXT
);