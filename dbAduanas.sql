-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               5.7.32-log - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             11.1.0.6116
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for dbaduanas
CREATE DATABASE IF NOT EXISTS `dbaduanas` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci */;
USE `dbaduanas`;

-- Dumping structure for table dbaduanas.cat_area
CREATE TABLE IF NOT EXISTS `cat_area` (
  `areaId` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY (`areaId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- Dumping data for table dbaduanas.cat_area: ~4 rows (approximately)
DELETE FROM `cat_area`;
/*!40000 ALTER TABLE `cat_area` DISABLE KEYS */;
INSERT INTO `cat_area` (`areaId`, `descripcion`) VALUES
	(1, 'SISTEMAS'),
	(2, 'CONTABILIDAD'),
	(3, 'GERENCIA'),
	(4, 'SISTEMAS 4');
/*!40000 ALTER TABLE `cat_area` ENABLE KEYS */;

-- Dumping structure for table dbaduanas.cat_estados
CREATE TABLE IF NOT EXISTS `cat_estados` (
  `estadoId` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) COLLATE utf8_spanish_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`estadoId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Dumping data for table dbaduanas.cat_estados: ~2 rows (approximately)
DELETE FROM `cat_estados`;
/*!40000 ALTER TABLE `cat_estados` DISABLE KEYS */;
INSERT INTO `cat_estados` (`estadoId`, `descripcion`) VALUES
	(1, 'Alta'),
	(2, 'Baja');
/*!40000 ALTER TABLE `cat_estados` ENABLE KEYS */;

-- Dumping structure for table dbaduanas.cat_menu
CREATE TABLE IF NOT EXISTS `cat_menu` (
  `menuID` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `icon` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `visible` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`menuID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Dumping data for table dbaduanas.cat_menu: ~4 rows (approximately)
DELETE FROM `cat_menu`;
/*!40000 ALTER TABLE `cat_menu` DISABLE KEYS */;
INSERT INTO `cat_menu` (`menuID`, `label`, `icon`, `visible`) VALUES
	(1, 'Catalagos', NULL, 1),
	(2, 'Procesos', NULL, 0),
	(3, 'Reportes', NULL, 1),
	(4, 'Sesión', NULL, 1);
/*!40000 ALTER TABLE `cat_menu` ENABLE KEYS */;

-- Dumping structure for table dbaduanas.cat_menuitems
CREATE TABLE IF NOT EXISTS `cat_menuitems` (
  `itemID` int(11) NOT NULL AUTO_INCREMENT,
  `submenuID` int(11) DEFAULT NULL,
  `descripcion` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `link` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `icon` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `visible` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`itemID`),
  KEY `FK_cat_menuitems_cat_menusubitem` (`submenuID`),
  CONSTRAINT `FK_cat_menuitems_cat_menusubitem` FOREIGN KEY (`submenuID`) REFERENCES `cat_menusubitem` (`submenuId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Dumping data for table dbaduanas.cat_menuitems: ~7 rows (approximately)
DELETE FROM `cat_menuitems`;
/*!40000 ALTER TABLE `cat_menuitems` DISABLE KEYS */;
INSERT INTO `cat_menuitems` (`itemID`, `submenuID`, `descripcion`, `link`, `icon`, `visible`) VALUES
	(1, 1, 'Empleados', '/empleados', 'pi pi-fw pi-user-plus', 1),
	(2, 1, 'Profesiones', '/profesiones', 'pi pi-fw pi-filter', 1),
	(3, 1, 'Puestos', '/puestos', 'pi pi-fw pi-filter', 1),
	(4, 2, 'Empleados', NULL, NULL, 1),
	(5, 2, 'Profesiones', NULL, NULL, 1),
	(6, 2, 'Puestos', NULL, NULL, 1),
	(7, 3, 'Personalizar', NULL, NULL, 0),
	(8, 3, 'Salir', NULL, NULL, 1);
/*!40000 ALTER TABLE `cat_menuitems` ENABLE KEYS */;

-- Dumping structure for table dbaduanas.cat_menusubitem
CREATE TABLE IF NOT EXISTS `cat_menusubitem` (
  `submenuId` int(11) NOT NULL AUTO_INCREMENT,
  `menuId` int(11) NOT NULL,
  `visible` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`submenuId`),
  KEY `FK_cat_menusubitem_cat_menu` (`menuId`),
  CONSTRAINT `FK_cat_menusubitem_cat_menu` FOREIGN KEY (`menuId`) REFERENCES `cat_menu` (`menuID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Dumping data for table dbaduanas.cat_menusubitem: ~3 rows (approximately)
DELETE FROM `cat_menusubitem`;
/*!40000 ALTER TABLE `cat_menusubitem` DISABLE KEYS */;
INSERT INTO `cat_menusubitem` (`submenuId`, `menuId`, `visible`) VALUES
	(1, 1, 0),
	(2, 3, 0),
	(3, 4, 0);
/*!40000 ALTER TABLE `cat_menusubitem` ENABLE KEYS */;

-- Dumping structure for table dbaduanas.cat_profesion
CREATE TABLE IF NOT EXISTS `cat_profesion` (
  `profesionId` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY (`profesionId`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- Dumping data for table dbaduanas.cat_profesion: ~25 rows (approximately)
DELETE FROM `cat_profesion`;
/*!40000 ALTER TABLE `cat_profesion` DISABLE KEYS */;
INSERT INTO `cat_profesion` (`profesionId`, `descripcion`) VALUES
	(1, 'ING. SISTEMAS'),
	(2, 'LIC. CONTADURIA 2'),
	(3, 'LIC. EN ADMON. ADUANERA'),
	(4, 'LIC. EN ADMON. EMPRESAS'),
	(5, 'LIC. EN MERCADO TECNIA'),
	(7, 'ABOGADO 2'),
	(8, 'esto es una prueba'),
	(9, 'PRUEBA'),
	(16, 'ROW 16'),
	(17, 'LIC. EN MERCADO TECNIA 17'),
	(18, 'LIC. EN MERCADO TECNIA 18'),
	(19, 'ROW 19'),
	(20, 'LIC. EN MERCADO TECNIA 19'),
	(21, 'LIC. EN MERCADO TECNIA 19'),
	(22, 'LIC. EN MERCADO TECNIA 19'),
	(23, 'LIC. EN MERCADO TECNIA 19'),
	(24, 'LIC. EN MERCADO TECNIA 19'),
	(25, 'LIC. EN MERCADO TECNIA 19'),
	(26, 'LIC. EN MERCADO TECNIA 19'),
	(27, 'LIC. EN MERCADO TECNIA 27'),
	(29, 'LIC. EN MERCADO TECNIA 3'),
	(31, 'LIC. EN MERCADO TECNIA 3'),
	(32, 'LIC. EN MERCADO TECNIA 3'),
	(33, 'LIC. EN MERCADO TECNIA'),
	(34, '34 row');
/*!40000 ALTER TABLE `cat_profesion` ENABLE KEYS */;

-- Dumping structure for table dbaduanas.cat_puestos
CREATE TABLE IF NOT EXISTS `cat_puestos` (
  `puestoId` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY (`puestoId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- Dumping data for table dbaduanas.cat_puestos: ~11 rows (approximately)
DELETE FROM `cat_puestos`;
/*!40000 ALTER TABLE `cat_puestos` DISABLE KEYS */;
INSERT INTO `cat_puestos` (`puestoId`, `descripcion`) VALUES
	(1, 'ARQUITECTO DE SOFTWARE'),
	(2, 'CONTADOR'),
	(3, 'CONTADOR VISTA'),
	(4, 'AFORADOR'),
	(5, 'MECANICO'),
	(6, 'SUBGERENTE'),
	(7, 'prueba'),
	(8, 'LIC. EN MERCADO TECNIA 3'),
	(10, 'row 10'),
	(11, 'FILA 11'),
	(12, 'LIC. EN MERCADO TECNIA 25');
/*!40000 ALTER TABLE `cat_puestos` ENABLE KEYS */;

-- Dumping structure for table dbaduanas.empleadodir
CREATE TABLE IF NOT EXISTS `empleadodir` (
  `transaccionID` int(11) NOT NULL AUTO_INCREMENT,
  `empleadoID` int(11) NOT NULL,
  `direccionID` int(11) NOT NULL,
  `descripcion` varchar(50) COLLATE latin1_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`transaccionID`),
  KEY `FK_empleadodir_empleadomae` (`empleadoID`),
  KEY `FK_empleadodir_tipo_direccion` (`direccionID`),
  CONSTRAINT `FK_empleadodir_empleadomae` FOREIGN KEY (`empleadoID`) REFERENCES `empleadomae` (`empleadoID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_empleadodir_tipo_direccion` FOREIGN KEY (`direccionID`) REFERENCES `tipo_direccion` (`direccionID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- Dumping data for table dbaduanas.empleadodir: ~0 rows (approximately)
DELETE FROM `empleadodir`;
/*!40000 ALTER TABLE `empleadodir` DISABLE KEYS */;
INSERT INTO `empleadodir` (`transaccionID`, `empleadoID`, `direccionID`, `descripcion`) VALUES
	(1, 1, 1, 'Residencial Roble Oeste');
/*!40000 ALTER TABLE `empleadodir` ENABLE KEYS */;

-- Dumping structure for table dbaduanas.empleadomae
CREATE TABLE IF NOT EXISTS `empleadomae` (
  `empleadoID` int(11) NOT NULL AUTO_INCREMENT,
  `fec_ingreso` datetime DEFAULT NULL,
  `DNI` varchar(20) COLLATE latin1_spanish_ci DEFAULT NULL,
  `nombres` varchar(60) COLLATE latin1_spanish_ci NOT NULL,
  `primer_apellido` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `segundo_apellido` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `codempleado` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `imp_salario` decimal(12,2) NOT NULL,
  `profesionID` int(11) NOT NULL,
  `puestoID` int(11) NOT NULL,
  `areaID` int(11) NOT NULL,
  `estadoID` int(11) NOT NULL,
  PRIMARY KEY (`empleadoID`),
  KEY `FK_empleadomae_cat_profesion` (`profesionID`),
  KEY `FK_empleadomae_cat_puestos` (`puestoID`),
  KEY `FK_empleadomae_cat_estados` (`estadoID`) USING BTREE,
  KEY `FK_empleadomae_cat_area` (`areaID`) USING BTREE,
  CONSTRAINT `FK_empleadomae_cat_area` FOREIGN KEY (`areaID`) REFERENCES `cat_area` (`areaId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_empleadomae_cat_estados` FOREIGN KEY (`estadoID`) REFERENCES `cat_estados` (`estadoId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_empleadomae_cat_profesion` FOREIGN KEY (`profesionID`) REFERENCES `cat_profesion` (`profesionId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_empleadomae_cat_puestos` FOREIGN KEY (`puestoID`) REFERENCES `cat_puestos` (`puestoId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- Dumping data for table dbaduanas.empleadomae: ~40 rows (approximately)
DELETE FROM `empleadomae`;
/*!40000 ALTER TABLE `empleadomae` DISABLE KEYS */;
INSERT INTO `empleadomae` (`empleadoID`, `fec_ingreso`, `DNI`, `nombres`, `primer_apellido`, `segundo_apellido`, `codempleado`, `imp_salario`, `profesionID`, `puestoID`, `areaID`, `estadoID`) VALUES
	(1, '2022-03-29 00:00:00', '0801197408806', 'ALLAN RAMIRO ', 'FLORES ', 'MURILLO', '001', 5000.00, 1, 1, 1, 1),
	(2, '2022-03-03 06:00:00', '0801198611600', 'INDIRA SARIAH', 'SOLORZANO', 'CASTRO', '002', 2000.00, 2, 2, 1, 1),
	(3, '2022-03-18 00:00:00', '0801198607272', 'NERYS DANIEL', 'MARADIAGA', 'CARRASCO', '003', 1500.00, 4, 3, 2, 1),
	(4, '2022-03-19 00:00:00', '0801197712500', 'ALEXANDER YOVANNI', 'ALMENDAREZ', 'FORTIN', '004', 1500.00, 9, 5, 4, 1),
	(5, '2022-03-19 00:00:00', '213180035996', 'ALDO FRANCISCO', 'FUNEZ', 'RIVERA', '005', 500.00, 2, 3, 1, 1),
	(6, '2022-03-24 00:00:00', '213180025460', 'ERLINDA LIZETH', 'VASQUEZ', 'CHAVARRIA', '006', 300.00, 2, 1, 1, 1),
	(7, '2022-03-24 00:00:00', '213180019249', 'FANNY GISSELA', 'ALONZO', 'GALEAS', '007', 400.00, 2, 4, 1, 1),
	(8, '2022-03-24 00:00:00', '213180048621', 'GLORIA SARAHI', 'LAGOS', 'VARELA', '008', 600.00, 2, 3, 1, 1),
	(9, '2022-03-24 00:00:00', '213030063501', 'ISMAEL ORLANDO', 'FLORES', 'AYALA', '009', 400.00, 2, 2, 1, 1),
	(11, '2020-07-18 12:10:43', '0801197408806', 'ALLAN RAMIRO...', 'FLORES1', 'MURILLO', '001', 5000.00, 1, 1, 1, 1),
	(19, '2019-07-18 12:10:43', '525', 'RITA GABRIELA', 'ZUNIGA', 'MONTOYA', '001', 5000.00, 1, 1, 1, 1),
	(39, '2022-03-25 19:17:31', '', '', '', '', '001', 0.00, 1, 1, 1, 1),
	(41, '2022-03-25 20:19:12', '', '', '', '', '001', 0.00, 1, 1, 1, 1),
	(42, '2022-03-25 20:20:20', '', '', '', '', '001', 0.00, 1, 1, 1, 1),
	(45, '2022-03-25 20:26:23', '', '', '', '', '001', 0.00, 1, 1, 1, 1),
	(46, '2022-03-25 20:26:23', '', '', '', '', '001', 0.00, 1, 1, 1, 1),
	(47, '2022-03-25 20:52:50', '', '', '', '', '001', 0.00, 1, 1, 1, 1),
	(48, '2022-03-25 20:52:50', '', '', '', '', '001', 0.00, 1, 1, 1, 1),
	(51, '2022-03-26 08:36:16', '', '', '', '', '001', 0.00, 1, 1, 1, 1),
	(52, '2022-03-26 08:36:16', '', '', '', '', '001', 0.00, 1, 1, 1, 1),
	(53, '2022-03-26 15:22:18', '', '', '', '', '001', 0.00, 1, 1, 1, 1),
	(54, '2022-03-27 16:22:40', '08011974088', '5212121', '45454', '515445', '001', 0.00, 1, 1, 1, 1),
	(55, '2022-03-27 17:11:55', '0801197408806', '1212121', '12121', '12121', '001', 0.00, 1, 1, 1, 1),
	(56, '2022-03-27 17:21:59', '0801197408806', 'Allan Ramiro', 'Flores ', 'Murillo', '001', 0.00, 1, 1, 1, 1),
	(57, '2022-03-27 17:21:59', '0801197408806', '121121', '121121', '12121', '001', 0.00, 1, 1, 1, 1),
	(58, '2022-03-27 17:31:15', '1212121121212', '1212121', '121212121', '121212121', '001', 0.00, 1, 1, 1, 1),
	(59, '2022-03-29 00:00:00', '0801197408806', 'PE', 'PE', '....', '001', 0.00, 1, 1, 1, 1),
	(60, '2022-03-29 00:00:00', '0801197408806', 'ONELL ', 'FLORES ', 'FLORES ', '001', 5000.00, 1, 1, 1, 1),
	(61, '2022-03-29 00:00:00', '0801197408806', 'ONELL 61', 'FLORES ', 'FLORES ', '001', 5000.00, 1, 1, 1, 1),
	(63, '2022-03-29 00:00:00', '0801197408806', 'ALLAN RAMIRO ', 'FLORES ', 'MURILLO', '001', 5000.00, 1, 1, 1, 1),
	(64, '2022-03-29 00:00:00', '0801197408806', 'ALLAN RAMIRO ', 'FLORES ', 'MURILLO', '001', 5000.00, 1, 1, 1, 1),
	(65, '2022-03-29 00:00:00', '0801197408806', 'ALLAN RAMIRO ', 'FLORES ', 'MURILLO', '001', 5000.00, 1, 1, 1, 1),
	(66, '2022-03-29 00:00:00', '0801197408806', 'ALLAN RAMIRO ', 'FLORES ', 'MURILLO', '001', 5000.00, 1, 1, 1, 1),
	(67, '2022-03-29 00:00:00', '0801197408806', 'ALLAN RAMIRO ', 'FLORES ', 'MURILLO', '001', 5000.00, 1, 1, 1, 1),
	(68, '2022-08-25 14:21:58', '4444444444444', '44', '44', '444444444444', '0003', 0.00, 1, 1, 1, 1),
	(69, '2022-08-25 14:23:32', '5555555555555', '55', '55', '555555555555555555', '0003', 0.00, 1, 1, 1, 1),
	(70, '2022-03-29 00:00:00', '0801197408806', 'ONELL 70', 'FLORES 70 ', 'FLORES 70', '003', 5000.00, 2, 1, 1, 1),
	(71, '2022-03-29 00:00:00', '0801197408806', 'ALLAN RAMIRO ', 'FLORES ', 'MURILLO', '001', 5000.00, 1, 1, 1, 1),
	(72, '2022-03-29 00:00:00', '0801197408806', 'ALLAN RAMIRO ', 'FLORES ', 'MURILLO', '001', 5000.00, 1, 1, 1, 1),
	(73, '2022-03-29 00:00:00', '0801197408806', 'ALLAN RAMIRO ', 'FLORES ', 'MURILLO', '001', 5000.00, 1, 1, 1, 1);
/*!40000 ALTER TABLE `empleadomae` ENABLE KEYS */;

-- Dumping structure for table dbaduanas.empleadotel
CREATE TABLE IF NOT EXISTS `empleadotel` (
  `transaccionId` int(11) NOT NULL AUTO_INCREMENT,
  `empleadoID` int(11) NOT NULL,
  `telefonoID` int(11) NOT NULL,
  `descripcion` varchar(50) COLLATE latin1_spanish_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`transaccionId`),
  KEY `FK_empleadotel_empleadomae` (`empleadoID`),
  KEY `FK_empleadotel_tipo_telefonos` (`telefonoID`),
  CONSTRAINT `FK_empleadotel_empleadomae` FOREIGN KEY (`empleadoID`) REFERENCES `empleadomae` (`empleadoID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_empleadotel_tipo_telefonos` FOREIGN KEY (`telefonoID`) REFERENCES `tipo_telefonos` (`telefonoID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- Dumping data for table dbaduanas.empleadotel: ~0 rows (approximately)
DELETE FROM `empleadotel`;
/*!40000 ALTER TABLE `empleadotel` DISABLE KEYS */;
INSERT INTO `empleadotel` (`transaccionId`, `empleadoID`, `telefonoID`, `descripcion`) VALUES
	(1, 1, 1, '94809806'),
	(2, 1, 2, '22247480');
/*!40000 ALTER TABLE `empleadotel` ENABLE KEYS */;

-- Dumping structure for table dbaduanas.mae_clientes
CREATE TABLE IF NOT EXISTS `mae_clientes` (
  `clienteID` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Nombres` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `primer_apellido` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `segundo_apellido` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fecha_ingreso` datetime NOT NULL,
  `dni` varchar(20) COLLATE utf8_spanish_ci NOT NULL DEFAULT '',
  `estado` int(11) NOT NULL,
  PRIMARY KEY (`clienteID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Dumping data for table dbaduanas.mae_clientes: ~0 rows (approximately)
DELETE FROM `mae_clientes`;
/*!40000 ALTER TABLE `mae_clientes` DISABLE KEYS */;
/*!40000 ALTER TABLE `mae_clientes` ENABLE KEYS */;

-- Dumping structure for table dbaduanas.mae_cuenta
CREATE TABLE IF NOT EXISTS `mae_cuenta` (
  `cuentaID` int(11) NOT NULL AUTO_INCREMENT,
  `clienteID` int(11) NOT NULL,
  `fecha_apertura` datetime NOT NULL,
  `nro_cuenta` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`cuentaID`),
  UNIQUE KEY `nro_cuenta` (`nro_cuenta`),
  KEY `FK_mae_cuenta_mae_clientes` (`clienteID`),
  CONSTRAINT `FK_mae_cuenta_mae_clientes` FOREIGN KEY (`clienteID`) REFERENCES `mae_clientes` (`clienteID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Dumping data for table dbaduanas.mae_cuenta: ~0 rows (approximately)
DELETE FROM `mae_cuenta`;
/*!40000 ALTER TABLE `mae_cuenta` DISABLE KEYS */;
/*!40000 ALTER TABLE `mae_cuenta` ENABLE KEYS */;

-- Dumping structure for table dbaduanas.mov_cuenta
CREATE TABLE IF NOT EXISTS `mov_cuenta` (
  `transaction` int(11) NOT NULL AUTO_INCREMENT,
  `fechamovimiento` datetime NOT NULL,
  `cuentaID` int(11) NOT NULL,
  `tipomovimiento` enum('D','C') COLLATE utf8_spanish_ci NOT NULL DEFAULT 'D',
  `importe` decimal(18,2) NOT NULL DEFAULT '0.00',
  `concepto` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`transaction`) USING BTREE,
  KEY `FK_mov_cuenta_mae_cuenta` (`cuentaID`),
  CONSTRAINT `FK_mov_cuenta_mae_cuenta` FOREIGN KEY (`cuentaID`) REFERENCES `mae_cuenta` (`cuentaID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Dumping data for table dbaduanas.mov_cuenta: ~0 rows (approximately)
DELETE FROM `mov_cuenta`;
/*!40000 ALTER TABLE `mov_cuenta` DISABLE KEYS */;
/*!40000 ALTER TABLE `mov_cuenta` ENABLE KEYS */;

-- Dumping structure for table dbaduanas.passports
CREATE TABLE IF NOT EXISTS `passports` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `passportNumber` int(11) NOT NULL,
  `issueDate` datetime NOT NULL,
  `expirationDate` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `passports_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Dumping data for table dbaduanas.passports: ~0 rows (approximately)
DELETE FROM `passports`;
/*!40000 ALTER TABLE `passports` DISABLE KEYS */;
/*!40000 ALTER TABLE `passports` ENABLE KEYS */;

-- Dumping structure for table dbaduanas.saldo_cuenta
CREATE TABLE IF NOT EXISTS `saldo_cuenta` (
  `cuentaID` int(11) NOT NULL,
  `saldo_anterior` decimal(12,2) NOT NULL,
  `saldo_actual` decimal(12,2) NOT NULL,
  UNIQUE KEY `cuentaID` (`cuentaID`),
  CONSTRAINT `FK_saldo_cuenta_mae_cuenta` FOREIGN KEY (`cuentaID`) REFERENCES `mae_cuenta` (`cuentaID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Dumping data for table dbaduanas.saldo_cuenta: ~0 rows (approximately)
DELETE FROM `saldo_cuenta`;
/*!40000 ALTER TABLE `saldo_cuenta` DISABLE KEYS */;
/*!40000 ALTER TABLE `saldo_cuenta` ENABLE KEYS */;

-- Dumping structure for table dbaduanas.sequelizemeta
CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table dbaduanas.sequelizemeta: ~4 rows (approximately)
DELETE FROM `sequelizemeta`;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` (`name`) VALUES
	('20220821021609-create-user.js'),
	('20220821134312-create-passport.js'),
	('20220821142435-create-cat-estados.js'),
	('20220821165810-create-cat-profesion.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;

-- Dumping structure for table dbaduanas.tipo_direccion
CREATE TABLE IF NOT EXISTS `tipo_direccion` (
  `direccionID` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY (`direccionID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- Dumping data for table dbaduanas.tipo_direccion: ~2 rows (approximately)
DELETE FROM `tipo_direccion`;
/*!40000 ALTER TABLE `tipo_direccion` DISABLE KEYS */;
INSERT INTO `tipo_direccion` (`direccionID`, `descripcion`) VALUES
	(1, 'Residencia'),
	(2, 'Trabajo');
/*!40000 ALTER TABLE `tipo_direccion` ENABLE KEYS */;

-- Dumping structure for table dbaduanas.tipo_telefonos
CREATE TABLE IF NOT EXISTS `tipo_telefonos` (
  `telefonoID` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) COLLATE latin1_spanish_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`telefonoID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- Dumping data for table dbaduanas.tipo_telefonos: ~4 rows (approximately)
DELETE FROM `tipo_telefonos`;
/*!40000 ALTER TABLE `tipo_telefonos` DISABLE KEYS */;
INSERT INTO `tipo_telefonos` (`telefonoID`, `descripcion`) VALUES
	(1, 'Mobil'),
	(2, 'Residencia'),
	(3, 'Trabajo'),
	(4, 'email');
/*!40000 ALTER TABLE `tipo_telefonos` ENABLE KEYS */;

-- Dumping structure for table dbaduanas.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `lastName` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Dumping data for table dbaduanas.users: ~0 rows (approximately)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
