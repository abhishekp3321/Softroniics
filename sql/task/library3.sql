create database library3;
use library3;
create table books(bookid int primary key , title varchar(100),author varchar(100),published_year int,gener varchar(50));
 create table member(	memberid  int primary key ,firstname varchar(50),lastname varchar(50),DateOfBirth date,joindate date);
 show tables;
 describe books;
 insert into books values('1','The Catcher in the Rye','J.D. Salinger','1955','Fiction');
 insert into books values('2','To Kill a Mockingbird',' Harper Lee','1960','Fiction');
 insert into books values('3','Dune',' Frank Herbert','1965','Science Fiction');
 insert into books values('4','The Great Gatsby',' F. Scott Fitzgerald','1925','Classic');
  insert into member values('1','john','doe','1965-08-26','1995-01-02');
 insert into member values('2','jimmy','cisco','1988-12-01','2024-05-06');
 select*from books;
 select*from member;
 update books set author=' F. Scott Fitzgerald' where bookid='2';
 select * from books where gener="science fiction";
 delete from books where bookid="2";
 SELECT FirstName, LastName FROM Member WHERE JoinDate > '2020-01-01';
drop database library3;