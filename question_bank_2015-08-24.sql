# ************************************************************
# Sequel Pro SQL dump
# Version 4135
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 127.0.0.1 (MySQL 5.5.38)
# Database: question_bank
# Generation Time: 2015-08-24 15:32:10 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table comment
# ------------------------------------------------------------

DROP TABLE IF EXISTS `comment`;

CREATE TABLE `comment` (
  `comment_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `content` varchar(255) NOT NULL,
  `completed` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `FK_todo_user` (`user_id`),
  CONSTRAINT `FK_todo_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;

INSERT INTO `comment` (`comment_id`, `user_id`, `content`, `completed`, `date_added`, `date_modified`)
VALUES
	(2,1,'test',1,'0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(3,1,'test',1,'0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(4,1,'test',1,'0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(5,1,'test',1,'0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(6,1,'test',1,'0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(7,1,'test',1,'0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(8,1,'dfadsfsdaf',1,'0000-00-00 00:00:00','0000-00-00 00:00:00');

/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table question
# ------------------------------------------------------------

DROP TABLE IF EXISTS `question`;

CREATE TABLE `question` (
  `question_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `title` varchar(100) NOT NULL DEFAULT '',
  `content` text NOT NULL,
  `weight` int(10) DEFAULT NULL,
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL,
  PRIMARY KEY (`question_id`),
  KEY `FK_notes_user` (`user_id`),
  CONSTRAINT `FK_notes_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `user_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `login` varchar(50) NOT NULL,
  `password` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

INSERT INTO `user` (`user_id`, `login`, `password`, `email`, `date_added`, `date_modified`)
VALUES
	(1,'admin','c7f5867734c1bb80892e13302d96a222e2ef25e8e0657c9d4b20e37b83e5f0af','','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(2,'Peter','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(3,'Peggy','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(4,'Jerthro','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(5,'Jerthro','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(9,'Jerthro','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(10,'test','test','test','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(11,'test','test','test','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(12,'test','808c463cc3c72b469e60e7bdd8a62e9a55c4a101380fbfe71bf82cec2c898d5c','test','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(13,'user','808c463cc3c72b469e60e7bdd8a62e9a55c4a101380fbfe71bf82cec2c898d5c','cc@hotmail.com','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(14,'dsfasd','dc65a5dcee4a674da6f4af6063cc34c3e2f0e5a7f5823177a8ee93c678afc4f6','dasfasd','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(15,'dsfasd','dc65a5dcee4a674da6f4af6063cc34c3e2f0e5a7f5823177a8ee93c678afc4f6','dasfasd','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(16,'dsfasd','dc65a5dcee4a674da6f4af6063cc34c3e2f0e5a7f5823177a8ee93c678afc4f6','dasfasd','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(17,'xfvds','ea67f53a119b534c39167974c3852ab680d0cc00a25331e0177f22a5682958f4','fadfadfad','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(18,'xfvds','6f73317c165154b0e35d9c21f8e800dfce089f953138210539c3f5385a50d775','','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(19,'pbanda','e1c8ff0411180e78d3a672a9c02c0fac5aa694d73ed96003f7f2130ce45b4a49','pbanda@poly.ac.mw','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(20,'mdesouza','e1c8ff0411180e78d3a672a9c02c0fac5aa694d73ed96003f7f2130ce45b4a49','md@poly.ac.mw','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(21,'wman','e1c8ff0411180e78d3a672a9c02c0fac5aa694d73ed96003f7f2130ce45b4a49','wman@w.gov','0000-00-00 00:00:00','0000-00-00 00:00:00');

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
