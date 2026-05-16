CREATE DATABASE db_rtc;
USE db_rtc;

CREATE TABLE usuario(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nome VARCHAR(30) NOT NULL,
email VARCHAR(40) UNIQUE NOT NULL,
senha VARCHAR(130) NOT NULL
);

CREATE TABLE receita(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nome VARCHAR(50) NOT NULL,
tipo VARCHAR(30) NOT NULL,
ocasiao VARCHAR(30) NOT NULL,
dtCriacao DATETIME DEFAULT CURRENT_TIMESTAMP(),
fkusuario INT,
CONSTRAINT chTipo CHECK (tipo IN ('entrada', 'prato principal', 'sobremesa', 'bebida', 'lanche','outro')),
CONSTRAINT chOcasiao CHECK (ocasiao IN ('data comemorativa', 'dia a dia', 'fitness', 'date', 'outro')),
FOREIGN KEY (fkusuario) REFERENCES usuario(id)
);

CREATE TABLE ingrediente(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nome VARCHAR(50) NOT NULL
);

CREATE TABLE receita_ingrediente(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
fkreceita INT,
fkingrediente INT,
quantidade DECIMAL(10,2),
unidadeqtd VARCHAR(20),
CONSTRAINT  chUnidade CHECK(unidadeqtd IN ('ml','L', 'g', 'kg', 'mg', 'xicara', 'colher de sopa', 'colher de cha', 'unidade')),	 	
FOREIGN KEY (fkreceita) REFERENCES receita(id),
FOREIGN KEY (fkingrediente) REFERENCES ingrediente(id)
);

