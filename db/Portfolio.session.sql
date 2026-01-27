DROP TABLE IF EXISTS Technologies;
DROP TABLE IF EXISTS Projects;
DROP TABLE IF EXISTS Project_tech_list;
DROP TABLE IF EXISTS Experience;
DROP TABLE IF EXISTS Qualifications;
DROP TABLE IF EXISTS Topics;

CREATE TABLE Technologies (
    tech_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tech_name VARCHAR(255) NOT NULL,
    img_small VARCHAR(255) NOT NULL,
    img_big VARCHAR(255) NOT NULL,
    library_or_framework BOOLEAN NOT NULL,
    front_end BOOLEAN 
);

INSERT INTO Technologies (tech_id, tech_name, img_small, img_big, library_or_framework, front_end) VALUES 
(0,'javascript', './JavaScript-logo_240.png', './JavaScript-logo_480.png', FALSE, NULL),
(0,'php', './Php-logo_240.png', './Php-logo_480.png', FALSE, NULL),
(0,'c#', './C#-logo_240.png', './C#-logo_480.png', FALSE, NULL),
(0,'react', './React-logo_240.png', './React-logo_480.png', TRUE, TRUE),
(0,'angular', './React-logo_240.png', './React-logo_480.png', TRUE, TRUE),
(0,'vue', './Vue-logo_240.png', './Vue-logo_480.png', TRUE, TRUE),
(0,'nextjs', './Next-logo_240.png', './Next-logo_480.png', TRUE, TRUE),
(0,'nodejs', './Node-logo_240.png', './Node-logo_480.png', FALSE, FALSE),
(0,'express', './express-logo_240.png', './express-logo_480.png', TRUE, FALSE),
(0,'asp_net', './Net-logo_240.png', './Net-logo_480.png', TRUE, FALSE),
(0,'laravel', './Laravel-logo_240.png', './Laravel-logo_480.png', TRUE, FALSE),
(0,'wordpress', './WordPress-logo_240.png', './WordPress-logo_480.png', FALSE, FALSE);

CREATE TABLE Projects (
    project_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    project_name VARCHAR(255),
    project_desc VARCHAR(255),
    github_link VARCHAR(255),
    hosted_link VARCHAR(255)
);

CREATE TABLE Project_Tech_list (
    project_id INT NOT NULL,
    tech_item_name VARCHAR(255)
);



INSERT INTO Projects (project_id, project_name, project_desc, github_link, hosted_link) VALUES
(0, 'GamerBrain', 'GamerBrain Description', 'https://game-brain.vercel.app/', 'https://github.com/asazycat/GameBrain'),
(0, 'World News Platform', 'World News Platform Description', 'https://world-news-fe.vercel.app/', 'https://github.com/asazycat/WorldNewsFE'),
(0 , 'JavaScript Applications', 'JavaScript Applications Description', 'https://javascript-apps-ten.vercel.app/', 'https://github.com/asazycat/javascriptApps');

INSERT INTO Project_Tech_list (project_id, tech_item_name) VALUES
(1, 'React'),
(1, 'Typescript'),
(1, 'RESTful API'),
(1, 'WordPress'),
(1, 'TailwindCSS'),
(1, 'Vercel'),
(2, 'React'),
(2, 'RESTful API'),
(2, 'NextJS'),
(2, 'MaterialsUI'),
(2, 'Typescript'),
(2, 'ORMs-Prisma'),
(2, 'Postgress'),
(2, 'AuthJS'),
(2, 'Vercel'),
(3, 'JavsScript'),
(3, 'HTML & CSS'),
(3, 'jQuery'),
(3, 'Vercel');



CREATE TABLE Experience (
    company_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    company_name VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    company_link VARCHAR(255) NOT NULL,
    company_desc VARCHAR(255) NOT NULL
);


INSERT INTO Experience (company_id, company_name, start_date, end_date, company_link, company_desc) VALUES 
(0, 'Northcoders', '2023-10-01', '2023-11-30', 'https://www.northcoders.com/', 'northcoders description');

CREATE TABLE Qualifications   (
    qual_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    qual_name VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,  
    end_date DATE NOT NULL,
    cert_link VARCHAR(255) NOT NULL,
    educator VARCHAR(255) NOT NULL,
    educator_link VARCHAR(255) NOT NULL,
    study_format VARCHAR(255) NOT NULL
); 

INSERT INTO Qualifications (qual_id, qual_name, start_date, end_date, cert_link, educator, educator_link, study_format) VALUES
(0, 'Mid Level JavaScript Certification', '2025-01-01', '2025-02-13', 'https://certificates.dev/javascript/certificates/a07af103-d4bd-4f03-8133-feabc0dc2792', 'certifications.dev', 'https://certificates.dev/', FALSE);

CREATE TABLE Topics (
    qual_id INT NOT NULL, 
    topic_name VARCHAR(255)
); 

INSERT INTO Topics (qual_id, topic_name) VALUES
(1, 'Variables and Data types'),
(1, 'Functions and Closures'),
(1, 'Higher Order Functions'),
(1, 'Loops and Conditionals'),
(1, 'Object-Oriented-Programming'),
(1, 'Classes'),
(1, 'Fetch API'),
(1, 'Asynchronus Programming'),
(1, 'DOM Manipulation'),
(1, 'Event Handling'),
(1, 'Error Handling'),
(1, 'Method Chaining');