-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 17, 2020 at 08:38 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pms`
--

-- --------------------------------------------------------

--
-- Table structure for table `conductor`
--

CREATE TABLE `conductor` (
  `cID` int(11) NOT NULL,
  `sNIC` char(10) NOT NULL,
  `divNo` char(4) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `conductor`
--

INSERT INTO `conductor` (`cID`, `sNIC`, `divNo`) VALUES
(1, '885644147v', 'div1'),
(2, '100', 'unde'),
(3, '986822154v', 'unde'),
(4, '896522147v', 'div2'),
(5, '652541247v', 'div3');

-- --------------------------------------------------------

--
-- Table structure for table `dailyweather`
--

CREATE TABLE `dailyweather` (
  `divNo` char(4) NOT NULL,
  `curDate` date NOT NULL,
  `weather` mediumtext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dailyweather`
--

INSERT INTO `dailyweather` (`divNo`, `curDate`, `weather`) VALUES
('divi', '2020-02-15', 'few clouds'),
('div1', '2020-02-15', 'few clouds'),
('div1', '2020-02-16', 'few clouds'),
('div1', '2020-02-17', 'few clouds');

-- --------------------------------------------------------

--
-- Table structure for table `dailywork`
--

CREATE TABLE `dailywork` (
  `curDate` date NOT NULL,
  `lMobile` char(10) NOT NULL,
  `typeID` int(11) NOT NULL,
  `fieldID` int(11) NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dailywork`
--

INSERT INTO `dailywork` (`curDate`, `lMobile`, `typeID`, `fieldID`, `amount`, `status`) VALUES
('0000-00-00', '0778945612', 2, 0, 0, 'Completed'),
('2020-02-13', '0778945623', 2, 2, 0, 'Not Completed'),
('2020-02-04', '0718596456', 1, 5, 20, NULL),
('2020-01-08', '0778952045', 4, 6, 0, 'Completed'),
('2020-02-04', '0787896312', 2, 2, 0, 'Not completed'),
('2020-02-01', '0758945612', 1, 1, 20, NULL),
('2020-02-05', '0778945142', 6, 2, NULL, NULL),
('2020-02-15', '0112745620', 1, 1, 0, 'Null'),
('2020-02-15', '0775824520', 1, 1, 15, 'Null'),
('2020-02-15', '0711234569', 1, 1, 12, 'Null'),
('2020-02-15', '077320364', 1, 1, 18, 'Null'),
('2020-02-15', '074253698', 1, 2, 13, 'Null'),
('2020-02-15', '071568525', 1, 2, 14, 'Null'),
('2020-02-15', '0710000000', 1, 3, 15, 'Null'),
('2020-02-15', '0711111111', 2, 3, 0, 'Completed'),
('2020-02-15', '0771234567', 3, 3, 0, 'Not Completed'),
('2020-02-07', '0771234567', 2, 3, 0, NULL),
('2020-02-04', '0771234567', 3, 1, 0, NULL),
('2020-02-15', '0726598562', 1, 4, 11, 'Null'),
('2020-02-15', '0785696325', 1, 5, 15, 'Null'),
('2020-02-15', '0778596254', 1, 6, 14, 'Null'),
('2020-02-15', '0714585962', 1, 5, 12, 'Null'),
('2020-02-15', '0725698251', 1, 8, 14, 'Null'),
('2020-02-15', '0785423691', 1, 9, 15, 'Null'),
('2020-02-14', '0778945612', 1, 4, 15, NULL),
('2020-02-13', '0778945623', 1, 4, 0, NULL),
('2020-02-13', '0778945142', 1, 4, 15, 'Null'),
('2020-02-14', '0778945142', 1, 4, 0, 'Null'),
('2020-02-12', '0778945142', 1, 6, 0, NULL),
('2020-02-14', '0778596254', 1, 6, 15, 'Null'),
('2020-02-03', '0778952045', 1, 3, 10, NULL),
('2020-02-03', '0718596456', 1, 1, 120, NULL),
('2020-02-03', '0787896312', 1, 2, 50, NULL),
('2020-02-02', '0112745620', 1, 4, 120, NULL),
('2020-02-03', '0112745620', 1, 5, 100, NULL),
('2020-01-15', '0112745620', 1, 2, 100, NULL),
('2020-01-14', '0112745620', 1, 2, 120, NULL),
('2020-02-16', '0710000000', 2, 1, 0, 'Completed'),
('2020-02-16', '0771234567', 1, 1, 12, 'Null'),
('2020-02-16', '0711234569', 1, 1, 14, 'Null'),
('2020-02-17', '0710000000', 2, 1, 0, 'Completed'),
('2020-02-17', '0718596456', 1, 1, 12, 'Null'),
('2020-02-17', '07789', 1, 3, 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `divenddate`
--

CREATE TABLE `divenddate` (
  `divNo` char(4) NOT NULL,
  `endDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `reason` varchar(50) DEFAULT NULL,
  `curDate` date DEFAULT NULL,
  `dstatus` int(11) NOT NULL COMMENT '0=pending,1=prev,2=prevprev,3=complete,4=reasonchanged'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `divenddate`
--

INSERT INTO `divenddate` (`divNo`, `endDate`, `reason`, `curDate`, `dstatus`) VALUES
('div1', '2019-12-25 18:30:00', '', '0000-00-00', 2),
('div1', '2020-02-15 09:48:39', NULL, NULL, 3),
('div1', '2020-02-08 18:30:00', NULL, NULL, 1),
('div1', '2020-02-10 18:30:00', NULL, NULL, 3),
('div3', '2020-02-15 18:30:00', NULL, NULL, 0),
('div1', '2020-02-16 09:23:51', NULL, NULL, 0),
('div2', '2020-02-15 18:30:00', NULL, NULL, 0),
('div2', '2020-02-08 18:30:00', NULL, NULL, 1),
('div3', '2020-02-08 18:30:00', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `division`
--

CREATE TABLE `division` (
  `divNo` char(4) NOT NULL,
  `location` varchar(50) NOT NULL,
  `dStatus` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `division`
--

INSERT INTO `division` (`divNo`, `location`, `dStatus`) VALUES
('div1', 'Hiniduma North', ''),
('div2', 'Hiniduma south', ''),
('div3', 'Hiniduma South', ''),
('div4', 'new address', 'deleted');

-- --------------------------------------------------------

--
-- Table structure for table `divisionexpenses`
--

CREATE TABLE `divisionexpenses` (
  `divExpenseID` int(11) NOT NULL,
  `divNo` char(4) NOT NULL,
  `expenseID` int(11) NOT NULL,
  `descriptions` varchar(200) DEFAULT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `amount` int(11) NOT NULL,
  `status` varchar(25) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `divisionexpenses`
--

INSERT INTO `divisionexpenses` (`divExpenseID`, `divNo`, `expenseID`, `descriptions`, `date`, `amount`, `status`) VALUES
(1, 'div', 0, '0778945612', '2000-01-01', 5000, '0'),
(2, 'div', 15, '0778945612', '2020-01-14', 4500, 'New'),
(3, 'div1', 0, '0778899456', '2000-01-01', 4500, 'New'),
(4, 'div1', 0, '0778945612', '2000-01-01', 1500, 'New'),
(5, 'div1', 0, '0775612345', '2000-01-01', 2000, 'New'),
(6, 'div1', 0, '0714589652', '2000-01-01', 4500, 'New'),
(7, 'div1', 11, '0778541236', '2000-01-01', 8550, 'Responded'),
(8, 'div2', 5, '0724589654', '2000-01-01', 4500, 'Responded'),
(9, 'div1', 1, '0789645212', '2000-01-01', 5000, 'New'),
(13, 'div1', 10, '0708945623', '2000-01-01', 4, 'Pending'),
(14, 'div1', 7, '0718596321', '2000-01-01', 5, 'Pending'),
(15, 'div1', 0, '0778945612', '2000-01-01', 4500, 'New'),
(16, 'div1', 0, '', '2000-01-01', 12, 'New'),
(17, 'div1', 3, '0778945612', '2000-01-01', 1500, 'Responded'),
(18, 'div1', 2, '0778945621', '2000-01-01', 5, 'Responded'),
(19, 'div2', 5, '0789654123', '2000-01-01', 5500, 'Pending'),
(20, '', 0, '456546', '2000-01-01', 4545, 'New'),
(21, 'div2', 11, '0778945612', '2000-01-01', 5000, 'Pending'),
(22, 'div3', 5, '0777845612', '2000-01-01', 5000, 'Pending'),
(23, 'div2', 5, '0789645123', '2000-01-01', 5500, 'Responded'),
(24, 'div2', 6, '0778945612', '2000-01-01', 1235, 'Responded'),
(25, '1', 0, '123123', '2000-01-01', 4564, 'New'),
(26, 'div3', 5, '0778945612', '2000-01-01', 4560, 'Responded'),
(27, 'div1', 2, '0701245698', '2000-01-01', 456, 'Responded'),
(28, 'div1', 0, '0778945612', '2000-01-01', 5000, 'New'),
(29, 'div1', 6, '0718529634', '2000-01-01', 4500, 'Responded'),
(30, 'div1', 1, '456', '2000-01-01', 2147483647, 'New'),
(31, 'div1', 1, '45545', '2000-01-01', 5665, 'New'),
(32, 'div1', 1, '123', '2000-01-01', 5645646, 'New'),
(33, 'div1', 1, '8797', '2000-01-01', 65464564, 'New'),
(34, 'div1', 1, '0778945612', '2000-01-01', 5000, 'New'),
(35, 'div', 2, '0778945621', '2000-01-01', 4000, 'New'),
(36, 'div1', 3, '0778899632', '2000-01-01', 3500, 'New'),
(37, 'div1', 4, '0718945612', '2000-01-01', 4000, 'New'),
(42, 'div1', 1, '0718945612', '2000-01-01', 5000, 'New'),
(41, 'div1', 2, '0789632145', '2000-01-01', 5000, 'New'),
(43, 'div1', 1, '0758941523', '2000-01-01', 2000, 'New'),
(44, 'div1', 4, '077320365', '2020-02-16', 10000, 'New'),
(45, 'div1', 4, '0718545221', '2020-02-16', 5000, 'New'),
(46, 'div1', 4, '077320859', '2020-02-16', 5000, 'New'),
(47, 'div1', 4, '0723588590', '2020-02-16', 5000, 'New'),
(48, 'None', 6, 'null', '2020-02-16', 1000, 'New'),
(49, 'None', 6, 'null', '2020-02-16', 5000, 'New'),
(50, 'div1', 1, '0771234567', '2020-02-16', 1000, 'New'),
(51, 'div1', 4, '0718004520', '2020-02-16', 5000, 'New'),
(52, 'div1', 1, '0718596456', '2020-02-17', 12000, 'New');

-- --------------------------------------------------------

--
-- Table structure for table `divisionfactory`
--

CREATE TABLE `divisionfactory` (
  `divNo` char(4) NOT NULL,
  `factID` char(5) NOT NULL,
  `curDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `weight` float NOT NULL,
  `amountRS` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `divisionfactory`
--

INSERT INTO `divisionfactory` (`divNo`, `factID`, `curDate`, `weight`, `amountRS`) VALUES
('div1', 'fact1', '2020-02-15 07:15:48', 152, 10000),
('div1', 'fact1', '2020-02-16 12:25:43', 12, 13299);

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

CREATE TABLE `expenses` (
  `expenseID` int(11) NOT NULL,
  `description` varchar(200) NOT NULL,
  `generatedBy` varchar(50) NOT NULL,
  `notifyWho` varchar(20) NOT NULL,
  `frequencyGeneration` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `expenses`
--

INSERT INTO `expenses` (`expenseID`, `description`, `generatedBy`, `notifyWho`, `frequencyGeneration`) VALUES
(1, 'Advance Pay(Weekly salary advance)', 'Conductor', 'Clerk', 'Once a week'),
(2, 'Contract Pay(Payments for contract works)', 'Conductor', 'Clerk', 'Contract Period'),
(3, 'Loan Request(Loans for laborers)', 'Conductor', 'Clerk', 'None'),
(4, 'Officers\'s Pay(Paying salary for officers)', 'Manager', 'Clerk', 'Once a month'),
(5, 'Miscellaneous(Maintenance and Construction', 'Manager', 'Clerk', 'None'),
(6, 'Electricity', 'Manager', 'Clerk', 'Once a month'),
(7, 'Phone Bill', 'Manager', 'Clerk', 'Once a month'),
(8, 'Vehicle Repairing', 'Manager', 'Clerk', 'None'),
(9, 'Fuel', 'Manager', 'Clerk', 'None'),
(10, 'Road Tax', 'Manager', 'Clerk', 'None'),
(11, 'Legal cases', 'Manager', 'Clerk', 'None'),
(12, 'Welfare Donations', 'Manager', 'Clerk', 'None'),
(13, 'Borrowing from shops', 'Manager', 'Clerk', 'None'),
(14, 'Chemical', 'Manager', 'Clerk', 'Once a week'),
(15, 'Fertilizer', 'Manager', 'Clerk', 'Once in three months'),
(16, 'Hardware', 'Manager', 'Clerk', 'None');

-- --------------------------------------------------------

--
-- Table structure for table `factory`
--

CREATE TABLE `factory` (
  `factoryID` char(5) NOT NULL,
  `fName` varchar(50) NOT NULL,
  `fContact` char(10) NOT NULL,
  `fAddress` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `factory`
--

INSERT INTO `factory` (`factoryID`, `fName`, `fContact`, `fAddress`) VALUES
('fact1', 'Hiniduma Factory', '0718965232', 'No 56, Hiniduma road, Galle'),
('fact2', 'Bogawanthalawa Factory', '0777658963', 'No 344, main road,Hiniduma');

-- --------------------------------------------------------

--
-- Table structure for table `field`
--

CREATE TABLE `field` (
  `fieldID` int(11) NOT NULL,
  `fAcres` decimal(10,0) NOT NULL,
  `fStatus` varchar(10) NOT NULL,
  `divNo` char(4) NOT NULL,
  `plantYear` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `field`
--

INSERT INTO `field` (`fieldID`, `fAcres`, `fStatus`, `divNo`, `plantYear`) VALUES
(1, '15', 'active', 'div1', 1997),
(2, '15', 'active', 'div1', 2015),
(3, '20', 'active', 'div1', 2009),
(4, '5', 'active', 'div2', 2002),
(5, '8', 'active', 'div2', 2010),
(6, '2', 'active', 'div2', 2013),
(7, '4', 'active', 'div3', 2010),
(8, '3', 'active', 'div3', 2004),
(9, '3', 'active', 'div3', 1999),
(10, '15', 'Active', 'div4', 0);

-- --------------------------------------------------------

--
-- Table structure for table `fieldreplant`
--

CREATE TABLE `fieldreplant` (
  `fieldID` int(11) NOT NULL,
  `plantedDate` date NOT NULL,
  `cropType` varchar(20) NOT NULL,
  `rstatus` int(11) NOT NULL COMMENT '1= active 0=inactive'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fieldreplant`
--

INSERT INTO `fieldreplant` (`fieldID`, `plantedDate`, `cropType`, `rstatus`) VALUES
(1, '2011-02-02', 'tea', 1),
(2, '2014-02-12', 'tea', 1),
(3, '2013-02-10', 'tea', 1),
(4, '2018-02-10', 'tea', 1),
(5, '2017-02-18', 'tea', 1),
(6, '2017-02-12', 'tea', 1),
(7, '2013-02-26', 'tea', 1),
(8, '2012-02-19', 'tea', 1),
(9, '2013-02-18', 'tea', 1);

-- --------------------------------------------------------

--
-- Table structure for table `laborer`
--

CREATE TABLE `laborer` (
  `mobileNo` char(10) NOT NULL,
  `lNIC` char(10) DEFAULT NULL,
  `lName` varchar(50) NOT NULL,
  `lAddress` varchar(50) NOT NULL,
  `lStatus` varchar(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `laborer`
--

INSERT INTO `laborer` (`mobileNo`, `lNIC`, `lName`, `lAddress`, `lStatus`) VALUES
('022', '12', '5', 'd', 'active'),
('0775824520', '874522210v', 'Isuru Srimal', 'No 12, weeraketiya road, Tangalle', 'Active'),
('0711234569', '895611241v', 'Amal', '12,galle road,hiniduma', 'Active'),
('077320364', '976855214v', 'Mala peiris', '132, bolgoda road, hiniduma', 'Active'),
('074253698', '854522014v', 'Kamala mendis', '13, hiniduma', 'Active'),
('071568525', '697855245v', '', '', 'Active'),
('0710000000', '697857245v', 'wimala', '1,hiniduma', 'Active'),
('0711111111', '895623147v', 'isuru', '2,galle', 'Active'),
('0771234567', '851236987v', 'Kimal', '45,hiniduma', 'Active'),
('0726598562', '752411542v', 'nimali', '12,hiniduma', 'Active'),
('0785696325', '568945821v', 'rani', '1,farm road,galle', 'Active'),
('0778596254', '695832654v', 'namali', '123,hiniduma', 'Active'),
('0714585962', '554875962v', 'malani', '8,hiniduma', 'Active'),
('0725698251', '905412584v', 'leela', '1,galle', 'Active'),
('0785423691', '665842144v', 'rama', '2,hiniduma', 'Active'),
('0719037817', '850083321v', 'kk', 'ccjj', 'deleted'),
('0719039818', '860063321v', 'aab', 'bbb', 'deleted'),
('', '8545', '', '', 'Active'),
('0785245695', '582565475v', 'nimL', '123', 'Active'),
('0719031817', '850283321v', 'isuru', 'tea state new', 'deleted');

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `sNIC` char(10) NOT NULL,
  `sPosition` varchar(20) NOT NULL,
  `sName` varchar(50) NOT NULL,
  `sMobile` char(10) NOT NULL,
  `sDOB` date NOT NULL,
  `sAddress` varchar(100) NOT NULL,
  `sStatus` varchar(20) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`sNIC`, `sPosition`, `sName`, `sMobile`, `sDOB`, `sAddress`, `sStatus`, `username`, `password`) VALUES
('859678951v', 'manager', 'Nimal Perera', '077320365', '1985-02-12', 'No 123, main road, Mirihana', 'active', 'manager@gmail.com', 'e10adc3949ba59abbe56e057f20f883e'),
('885644147v', 'conductor', 'Kamal Weerasinghe', '0718545221', '1988-02-02', '1234/9,Town road, Mathara', 'active', 'div1@gmail.com', 'e10adc3949ba59abbe56e057f20f883e'),
('687522145v', 'admin', 'Namla Balachandra', '077320859', '1968-02-05', 'No 12, Dickman Road,Colombo 3', 'active', 'admin@gmail.com', 'e10adc3949ba59abbe56e057f20f883e'),
('976700147v', 'manager', 'thilara', '0715425214', '2020-12-01', '1234', 'Active', '', ''),
('896522147v', 'conductor', 'Nimal Jayasinghe', '0723588590', '1989-02-03', 'NO 34, hiniduma south, hiniduma', 'active', 'div2@gmail.com', 'e10adc3949ba59abbe56e057f20f883e'),
('652541247v', 'conductor', 'Nirmal', '0715485962', '1965-02-25', 'no 123, kirula road,galle', 'active', 'div3@gmail.com', 'e10adc3949ba59abbe56e057f20f883e'),
('554788582v', 'clerk', 'kamali', '0714568520', '1955-02-03', 'no 123, mednis road, galle', 'active', 'clerk@gmail.com', 'e10adc3949ba59abbe56e057f20f883e'),
('845633695v', 'owner', 'Nalin Ranasinghe', '0718907890', '1984-02-19', 'NO 12, Main road, Colombo', 'active', 'owner@gmail.com', 'e10adc3949ba59abbe56e057f20f883e');

-- --------------------------------------------------------

--
-- Table structure for table `targets`
--

CREATE TABLE `targets` (
  `divNo` char(4) NOT NULL,
  `curDate` date NOT NULL,
  `target` int(11) NOT NULL COMMENT 'amount in kg',
  `status` varchar(10) DEFAULT NULL COMMENT 'target achieved or not',
  `tolerance` int(11) DEFAULT NULL,
  `field` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `targets`
--

INSERT INTO `targets` (`divNo`, `curDate`, `target`, `status`, `tolerance`, `field`) VALUES
('div1', '2020-01-01', 50, 'achieved', 0, 1),
('div1', '2020-02-10', 20, NULL, NULL, 3),
('div1', '2020-02-10', 200, NULL, NULL, 2),
('div1', '2020-02-10', 180, NULL, NULL, 1),
('div2', '2020-02-10', 120, NULL, NULL, 4),
('div2', '2020-02-10', 100, NULL, NULL, 5),
('div2', '2020-02-10', 100, NULL, NULL, 6),
('div3', '2020-02-10', 50, NULL, NULL, 7),
('div3', '2020-02-10', 50, NULL, NULL, 8),
('div1', '2020-01-05', 150, 'achieved', NULL, 2),
('div1', '2020-01-05', 90, 'achieved', NULL, 3),
('div2', '2020-01-06', 100, 'notacheive', NULL, 4);

-- --------------------------------------------------------

--
-- Table structure for table `work`
--

CREATE TABLE `work` (
  `typeID` int(11) NOT NULL,
  `measurement` varchar(20) NOT NULL,
  `description` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `work`
--

INSERT INTO `work` (`typeID`, `measurement`, `description`) VALUES
(1, 'Amount', 'Plucking'),
(2, 'Status', 'Cleaning'),
(3, 'Status', 'Weeding'),
(4, 'Status', 'Fertilizing'),
(5, 'Status', 'Drainage');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `conductor`
--
ALTER TABLE `conductor`
  ADD PRIMARY KEY (`cID`),
  ADD KEY `sNIC` (`sNIC`),
  ADD KEY `divNo` (`divNo`);

--
-- Indexes for table `dailyweather`
--
ALTER TABLE `dailyweather`
  ADD PRIMARY KEY (`divNo`,`curDate`);

--
-- Indexes for table `dailywork`
--
ALTER TABLE `dailywork`
  ADD PRIMARY KEY (`curDate`,`lMobile`,`typeID`),
  ADD KEY `lMobile` (`lMobile`),
  ADD KEY `typeID` (`typeID`),
  ADD KEY `fieldID` (`fieldID`);

--
-- Indexes for table `divenddate`
--
ALTER TABLE `divenddate`
  ADD PRIMARY KEY (`divNo`,`endDate`);

--
-- Indexes for table `division`
--
ALTER TABLE `division`
  ADD PRIMARY KEY (`divNo`);

--
-- Indexes for table `divisionexpenses`
--
ALTER TABLE `divisionexpenses`
  ADD PRIMARY KEY (`divExpenseID`),
  ADD KEY `divNo` (`divNo`),
  ADD KEY `expenseID` (`expenseID`);

--
-- Indexes for table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`expenseID`);

--
-- Indexes for table `factory`
--
ALTER TABLE `factory`
  ADD PRIMARY KEY (`factoryID`);

--
-- Indexes for table `field`
--
ALTER TABLE `field`
  ADD PRIMARY KEY (`fieldID`),
  ADD KEY `divNo` (`divNo`);

--
-- Indexes for table `fieldreplant`
--
ALTER TABLE `fieldreplant`
  ADD PRIMARY KEY (`fieldID`,`plantedDate`);

--
-- Indexes for table `laborer`
--
ALTER TABLE `laborer`
  ADD PRIMARY KEY (`mobileNo`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `targets`
--
ALTER TABLE `targets`
  ADD PRIMARY KEY (`divNo`,`curDate`,`field`);

--
-- Indexes for table `work`
--
ALTER TABLE `work`
  ADD PRIMARY KEY (`typeID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `conductor`
--
ALTER TABLE `conductor`
  MODIFY `cID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `divisionexpenses`
--
ALTER TABLE `divisionexpenses`
  MODIFY `divExpenseID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `expenseID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `field`
--
ALTER TABLE `field`
  MODIFY `fieldID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
