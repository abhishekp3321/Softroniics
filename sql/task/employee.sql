create database employeedb;
use employeedb;
create table employees(employee_id  int primary key,firstname varchar(50),lastname varchar(50),email varchar(100) unique,hiredate date,salary decimal(10,2));
show tables;
describe employees;
insert into employees values('1','john','doe','john.doe@example.com','2023-08-01','50000.00');
insert into employees values('2','jane','smith','jane.smith@example.com','2023-08-15','60000.00');
select*from employees;
select firstName, LastName from employees where salary > '55000.00';
update  employees set salary = '55000.00' where employee_id = 1;
update  employees set lastname= 'doe' where email= 'jane.smith@example.com';
delete from employees where employee_id = 2;
delete from employees where salary< '50000.00';
alter table employees add department varchar(50);
ALTER TABLE Employees ALTER COLUMN Salary SET DEFAULT 40000.00;