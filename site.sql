-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Dim 27 Juin 2021 à 10:09
-- Version du serveur: 5.5.24-log
-- Version de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `site`
--

-- --------------------------------------------------------

--
-- Structure de la table `chapters`
--

CREATE TABLE IF NOT EXISTS `chapters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `series_id` varchar(255) NOT NULL,
  `title` text NOT NULL,
  `number` int(11) NOT NULL,
  `volume` int(11) NOT NULL,
  `covers` text NOT NULL,
  `groups` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Contenu de la table `chapters`
--

INSERT INTO `chapters` (`id`, `series_id`, `title`, `number`, `volume`, `covers`, `groups`) VALUES
(3, 'monica_3', 'Facilitation Strategies for Managing Research for Development in Innovation Platforms', 2, 0, 'http://localhost/Site5euros/media/covers/monica_3_2.0', 'Amour de l''amour'),
(5, 'monica_3', 'Mise en place du serveur', 3, 0, 'http://localhost/Site5euros/media/covers/monica_3_3_0.png', 'Choses l''amour');

-- --------------------------------------------------------

--
-- Structure de la table `commentaires`
--

CREATE TABLE IF NOT EXISTS `commentaires` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `series_id` varchar(25) NOT NULL,
  `number` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `comment` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `commentaires`
--

INSERT INTO `commentaires` (`id`, `series_id`, `number`, `firstname`, `lastname`, `time`, `comment`) VALUES
(1, 'monica_3', 1, 'admin', '', '26/Jun/21, 11:59', 'Mon premier commentaire'),
(2, 'monica_3', 1, 'admin', '', '27 Jun 21, 12:00', 'Mon deuxièmecommentaire'),
(3, 'monica_3', 1, 'admin', '', '27 Jun 21, 12:01', 'Nouveau commentaire');

-- --------------------------------------------------------

--
-- Structure de la table `pages`
--

CREATE TABLE IF NOT EXISTS `pages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `series_id` varchar(255) NOT NULL,
  `number` int(11) NOT NULL,
  `volume` int(11) NOT NULL,
  `link` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Contenu de la table `pages`
--

INSERT INTO `pages` (`id`, `series_id`, `number`, `volume`, `link`) VALUES
(3, 'monica_3', 2, 0, 'http://localhost/Site5euros/media/pages/monica_32012.jpg'),
(6, 'monica_3', 2, 0, 'http://localhost/Site5euros/media/pages/monica_3204.png'),
(7, 'monica_3', 2, 0, 'http://localhost/Site5euros/media/pages/monica_3203.png'),
(8, 'monica_3', 2, 0, 'http://localhost/Site5euros/media/pages/monica_3204.png');

-- --------------------------------------------------------

--
-- Structure de la table `series`
--

CREATE TABLE IF NOT EXISTS `series` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `series_id` varchar(255) NOT NULL,
  `alt_titles` text NOT NULL,
  `title` text NOT NULL,
  `genres` text NOT NULL,
  `status` varchar(255) NOT NULL,
  `authors` text NOT NULL,
  `description` text NOT NULL,
  `covers` text NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Contenu de la table `series`
--

INSERT INTO `series` (`id`, `series_id`, `alt_titles`, `title`, `genres`, `status`, `authors`, `description`, `covers`, `name`) VALUES
(3, 'magique1', 'Effet des facteurs de l''environnement sur les Fusarium pathogènes des plantes cultivées', 'Effet des facteurs de l''environnement sur les Fusarium pathogènes des plantes cultivées', 'Tag1, Tag2, Tag3', 'En cours', 'Papa, M', 'to create a link to the new uploaded file in the images directory. The name is retrieved from the image metadata that is passed to the view when the file has successfully been uploaded.\r\nLet''s now create the controller that will respond to our image uploading\r\n\r\nAdd a new file ImageUploadController.php in application/controllers\r\n\r\nAdd the following code to ImageUploadController.php', 'http://localhost/Site5euros/media/covers/magique1.png', ''),
(4, 'amagami2', 'Exercices de requêtes sur le serveur', 'Exercices de requêtes sur le serveur', 'Ama1, Tag2, Tag5', 'En cours', 'John, César, Hugues', 'Contrairement à la croyance populaire, Lorem Ipsum n''est pas simplement un texte aléatoire. Il a ses racines dans un morceau de littérature latine classique de 45 avant JC, ce qui en fait plus de 2000 ans. Richard McClintock, professeur de latin au Hampden-Sydney College en Virginie, a recherché l''un des mots latins les plus obscurs, consectetur, dans un passage de Lorem Ipsum, et en parcourant les citations du mot dans la littérature classique, a découvert la source incontestable. Lorem Ipsum provient des sections 1.10.32 et 1.10.33 de "de Finibus Bonorum et Malorum" (Les Extrêmes du Bien et du Mal) de Cicéron, écrit en 45 av. Ce livre est un traité sur la théorie de l''éthique, très populaire à la Renaissance. La première ligne de Lorem Ipsum, « Lorem ipsum dolor sit amet.. », provient d''une ligne de la section 1.10.32.', 'http://localhost/Site5euros/media/covers/amagami2.png', ''),
(5, 'monica_3', 'No tile for this serie', 'No tile for this serie', 'Ama1, Tag2, Tag5', 'En cours', 'John, César, Hugues', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'http://localhost/Site5euros/media/covers/monica_3.png', ''),
(6, 'spotlight', 'There are many variations of passages of Lorem Ipsum available, but the majority have', 'There are many variations of passages of Lorem Ipsum available, but the majority have', 'Spot, Tag1 Tag5, Pop', 'En cours', 'Thibaut, Lazarr, Jamal, César, Hugues', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ''Content here, content here'', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ''lorem ipsum'' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 'http://localhost/perf/media/covers/spotlight.png', 'spotlight');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`) VALUES
(1, 'Marcos', 'VITOULEY', 'nguerin394@gmail.com', 'azertyuiop');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
