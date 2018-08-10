-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 10, 2018 at 09:51 AM
-- Server version: 5.7.12-log
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbinventory`
--

-- --------------------------------------------------------

--
-- Table structure for table `ckc_sales`
--

DROP TABLE IF EXISTS `ckc_sales`;
CREATE TABLE IF NOT EXISTS `ckc_sales` (
  `product_id` varchar(20) NOT NULL,
  `qnty` int(11) NOT NULL,
  `price` float NOT NULL,
  `saletime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `salesid` varchar(30) NOT NULL,
  `subtotal` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ckc_sales`
--

INSERT INTO `ckc_sales` (`product_id`, `qnty`, `price`, `saletime`, `salesid`, `subtotal`) VALUES
('22', 2, 22, '2018-07-30 19:04:40', '', 0),
('T202', 60, 5, '2018-07-31 21:32:03', '', 0),
('A466', 10, 100, '2018-08-01 16:00:13', '1533139195016', 1000),
('A466', 10, 100, '2018-08-01 16:00:13', '1533139197070', 1000),
('A466', 10, 100, '2018-08-01 16:01:06', '1533139197070', 1000),
('t700', 1, 2120, '2018-08-01 16:01:06', '1533139259287', 2120),
('A466', 4, 3, '2018-08-01 19:58:30', '1533153470668', 12),
('K300', 4, 3, '2018-08-01 19:58:31', '1533153487548', 12),
('Xc20', 4, 30, '2018-08-01 19:58:31', '1533153503717', 120),
('Chep', 45, 67, '2018-08-01 20:02:10', '1533153713760', 3015),
('Chep', 45, 67, '2018-08-01 20:02:11', '1533153714736', 3015),
('K300', 45, 67, '2018-08-01 20:02:11', '1533153724929', 3015),
('A466', 5, 4, '2018-08-01 20:17:47', '1533154642623', 20),
('fggh', 5, 40, '2018-08-01 20:17:47', '1533154656639', 200),
('A466', 7, 5, '2018-08-01 20:40:47', '1533156014646', 35),
('Chep', 7, 50, '2018-08-01 20:40:47', '1533156036486', 350),
('T100', 7, 67, '2018-08-01 20:49:26', '1533156550975', 469),
('T100', 7, 67, '2018-08-01 20:49:27', '1533156560692', 469),
('T100', 7, 67, '2018-08-01 20:49:27', '1533156561877', 469),
('A466', 2, 23, '2018-08-01 21:16:44', '1533157490933', 46),
('Chep', 5, 3, '2018-08-03 08:28:10', '1533284873286', 15),
('ascas', 50, 3, '2018-08-03 08:28:10', '1533284888053', 150),
('T202', 3, 4, '2018-08-03 10:42:32', '1533292911991', 12),
('T202', 30, 4, '2018-08-03 10:42:32', '1533292916071', 120),
('A466', 4, 3, '2018-08-03 11:54:41', '1533297274226', 12),
('A466', 40, 3, '2018-08-03 11:54:41', '1533297277361', 120),
('Fred', 5, 4, '2018-08-09 09:07:01', '1533805605925', 20),
('Chep', 56, 4, '2018-08-09 09:07:01', '1533805619373', 224),
('A466', 4, 2, '2018-08-09 13:05:06', '1533819902940', 8),
('A466', 4, 2, '2018-08-09 13:05:06', '1533819904057', 8),
('A466', 4, 2, '2018-08-09 13:05:06', '1533819905314', 8);

-- --------------------------------------------------------

--
-- Table structure for table `currentstock`
--

DROP TABLE IF EXISTS `currentstock`;
CREATE TABLE IF NOT EXISTS `currentstock` (
  `product_id` varchar(20) NOT NULL,
  `qnty` int(10) NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `currentstock`
--

INSERT INTO `currentstock` (`product_id`, `qnty`) VALUES
('', 0),
('22', 782),
('A466', -9),
('ascas', -50),
('Chep', -45),
('chris', -1),
('fggh', -5),
('Fred', -5),
('item-select', -4),
('K300', -2),
('T100', 994),
('T202', 41),
('T20soap', -4),
('T600', -10),
('t700', 11),
('X200', -3),
('Xc20', -4);

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

DROP TABLE IF EXISTS `inventory`;
CREATE TABLE IF NOT EXISTS `inventory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item` varchar(100) NOT NULL,
  `qtyleft` int(11) NOT NULL,
  `qty_sold` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `sales` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`id`, `item`, `qtyleft`, `qty_sold`, `price`, `sales`) VALUES
(1, 'qweqwqw', 6, 18, 212, 2968),
(2, 'wewqewe', 328, 25, 100, 1506),
(3, 'argie', 23231, 14, 111111111, 124111111),
(4, 'wewew', 23232, 0, 3232, 0),
(5, 'rtert', 45, 0, 56, 0),
(6, 'Red', 3, 87, 200, 23400),
(7, 'School', 4, 0, 120, 0);

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
CREATE TABLE IF NOT EXISTS `items` (
  `productname` varchar(100) NOT NULL,
  `Date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `product_id` varchar(20) NOT NULL,
  `price` decimal(20,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`productname`, `Date`, `product_id`, `price`) VALUES
('Sukuma', '2018-07-22 17:45:45', 'A466', '670'),
('seven', '2018-07-19 12:29:49', '22', '100'),
('Sweather', '2018-07-19 10:07:05', 'T100', '400'),
('IREP', '2018-07-31 21:00:01', 'T202', '200'),
('Sugar', '2018-07-19 15:45:11', 'K300', '700'),
('salt', '2018-07-19 15:46:22', 't700', '25'),
('chris', '2018-07-22 18:31:38', 'chris', '250'),
('chris', '2018-07-22 18:31:38', 'chris', '250'),
('Fred', '2018-07-22 09:45:55', 'Fred', '230'),
('Fred', '2018-07-22 09:52:06', 'Fred', '230'),
('Fred', '2018-07-22 09:52:54', 'Fred', '230'),
('chep', '2018-07-22 09:53:51', 'Chep', '450'),
('Phone', '2018-07-22 17:44:58', 'T900', '67'),
('Bread', '2018-08-03 10:37:20', 'T500', '45'),
('Maize', '2018-07-22 19:23:43', 'T600', '120'),
('Juice', '2018-07-24 19:13:53', 'X200', '20'),
('water', '2018-07-24 19:18:25', 'X300', '200'),
('water', '2018-07-24 19:19:40', 'X300', '200'),
('water', '2018-07-24 19:19:47', 'X300', '200'),
('water', '2018-07-24 19:22:13', 'X300', '200'),
('water', '2018-07-24 19:22:16', 'X300', '200'),
('water', '2018-07-24 19:22:19', 'X300', '200'),
('cxc', '2018-07-24 19:22:34', 'ascas', '40'),
('sfdfgds', '2018-07-24 20:05:58', 'fggh', '45'),
('School', '2018-07-24 21:15:44', 'Xc20', '40'),
('Majani', '2018-07-25 18:40:43', 'R320', '200'),
('Soap', '2018-08-09 14:36:25', 'T20soap', '45');

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
CREATE TABLE IF NOT EXISTS `sales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` varchar(20) NOT NULL,
  `qty` int(11) NOT NULL,
  `datesold` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=58 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`id`, `product_id`, `qty`, `datesold`) VALUES
(43, 'item-select', 4, '2018-07-27'),
(42, 'K300', 4, '2018-07-27'),
(17, 'T202', 20, '2018-07-19'),
(41, 'T600', 4, '2018-07-27'),
(19, '22', 6, '2018-07-17'),
(40, 'T600', 4, '2018-07-26'),
(21, 'T202', 2, '2018-07-10'),
(22, 'K300', 1, '2018-07-19'),
(39, 'T100', 20, '2018-07-24'),
(38, '22', 20, '2018-07-25'),
(37, 'chris', 20, '2018-07-25'),
(36, 'A466', 20, '2018-07-25'),
(35, '22', 2, '2018-07-12'),
(29, 'chris', 1, '2018-07-20'),
(34, 'T100', 34, '2018-07-12'),
(31, 'T600', 10, '2018-07-20'),
(33, '22', 200, '2018-07-25'),
(44, '22', 4, '2018-07-27'),
(45, 'T100', 4, '2018-07-27'),
(46, '22', 2, '2018-07-26'),
(47, 'K300', 2, '2018-07-26'),
(48, 'T100', 3, '2018-07-18'),
(49, 'A466', 3, '2018-08-03'),
(50, 'fggh', 46, '2018-08-03'),
(51, 'K300', 5, '2018-08-04'),
(52, 'fggh', 3, '2018-08-04'),
(53, 'fggh', 56, '2018-08-14'),
(54, 'fggh', 4, '2018-08-09'),
(55, 'fggh', 4, '2018-08-09'),
(56, 'T100', 4, '2018-08-15'),
(57, 'T20soap', 4, '2018-08-08');

-- --------------------------------------------------------

--
-- Table structure for table `stocking`
--

DROP TABLE IF EXISTS `stocking`;
CREATE TABLE IF NOT EXISTS `stocking` (
  `stockdate` date NOT NULL,
  `stockqnty` int(10) NOT NULL,
  `product_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `stocking`
--

INSERT INTO `stocking` (`stockdate`, `stockqnty`, `product_id`) VALUES
('2018-07-19', 4, 'T100'),
('2018-07-19', 5, 'T100'),
('2018-07-19', 9, 'T100'),
('2018-07-19', 9, 'T100'),
('2018-07-19', 1, 'T100'),
('2018-07-19', 3, 'T100'),
('2018-07-19', 11, 'T100'),
('2018-07-19', 2, 'T100'),
('2018-07-19', 44, 'T100'),
('2018-07-19', 2, 'T100'),
('2018-07-19', 1, 'T100'),
('2018-07-19', 7, 'T100'),
('2018-07-19', 1, 'T100'),
('2018-07-19', 4, 'A466'),
('2018-07-19', 60, 'A466'),
('2018-07-19', 20, '22'),
('2018-07-19', 100, 'T100'),
('2018-07-19', 1, 'A466'),
('2018-07-19', 200, 'T202'),
('2018-07-19', 200, 'T100'),
('2018-07-19', 3, 'T100'),
('2018-07-19', 90, 'K300'),
('2018-07-19', 20, 't700'),
('2018-07-19', 7, 't700'),
('2018-07-19', 6, 't700'),
('2018-07-19', 6, 't700'),
('2018-07-19', 7, 't700'),
('2018-07-19', 5, 't700'),
('2018-07-19', 3, 'K300'),
('2018-07-22', 1000, 'T100'),
('2018-07-22', 1000, '22'),
('2018-07-22', 200, 'T600'),
('2018-07-22', 200, 'T600'),
('2018-07-22', 200, 'T600'),
('2018-07-22', 11, '22'),
('2018-07-22', 11, 'T600'),
('2018-07-25', 300, ''),
('2018-08-03', 34, ''),
('2018-08-03', 5, 'K300'),
('2018-08-03', 34, 'T100'),
('2018-08-03', 34, 'A466'),
('2018-08-09', 45, 'T100');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(3, 'admin', '7efc94f1f26bdafde81e2fcd91c62b53'),
(10, 'febe', '9f51ce8e8e4374fd0736f3ece4a679dc'),
(9, 'argie', '6cf51b9070c74b2b7b90a24428e9a99b'),
(11, 'chris', 'chris');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
