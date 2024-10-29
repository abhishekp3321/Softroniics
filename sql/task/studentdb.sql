create database studentdb;
use studentdb;
create table students(student_id int primary key ,firstname varchar(50),lastname varchar(50),DOB date,gender char(1) ,major varchar(100));
insert into students values('1','john','doe','2000-01-15','M','computer science');
insert into students values('2','jane','smith','1999-08-25','F','Electrical Engineering');
show tables;
describe students;
select * from students;
SELECT * FROM Students WHERE Major = 'Computer Science';

update  students set major = 'information technology' where student_id = 1;
delete from Students where Student_ID = 2;
alter table students add email varchar(50);
select firstName, LastName, Major from Students where DOB > '2000-01-01';
SELECT 
    firstName, major
FROM
    students;
