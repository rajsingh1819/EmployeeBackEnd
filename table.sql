-- use MySQL DataBase
create table user(
    id int not null AUTO_INCREMENT,
    name varchar(100) not null,
    email varchar(100) not null,
    phone varchar(12) not null,
    gender varchar(20) not null,
    occupation varchar(50) not null,
    UNIQUE(email),
    UNIQUE(phone),
    primary key (id)
);

insert into user (name,email,phone,gender,occupation) values ("Raj Singh","raj@gmail.com","9874655447","Male","Hr");
