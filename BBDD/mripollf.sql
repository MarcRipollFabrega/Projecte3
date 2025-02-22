-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 13-12-2024 a las 09:37:54
-- Versión del servidor: 8.0.40-0ubuntu0.20.04.1
-- Versión de PHP: 8.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mripollf`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuaris`
--

CREATE TABLE `usuaris` (
  `id` int NOT NULL,
  `username` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuaris`
--

INSERT INTO `usuaris` (`id`, `username`, `password`) VALUES
(5, 'Marc', '1234');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vocabulari`
--

CREATE TABLE `vocabulari` (
  `ID` int NOT NULL,
  `tema` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `angles` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `castella` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `descripcio` text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `vocabulari`
--

INSERT INTO `vocabulari` (`ID`, `tema`, `angles`, `castella`, `descripcio`) VALUES
(3, 'verbs', 'Accept', 'Aceptar', 'To agree to receive something offered.'),
(4, 'verbs', 'Achieve', 'Lograr', 'To successfully reach a desired objective or result.'),
(5, 'verbs', 'Allow', 'Permitir', 'To give permission for something to happen.'),
(15, 'verbs', 'Apply', 'Aplicar', 'To put something into operation or use.'),
(16, 'verbs', 'Argue', 'Discutir', 'To present reasons for or against something.'),
(17, 'verbs', 'Ask', 'Preguntar', 'To request information or an answer.'),
(18, 'verbs', 'Believe', 'Creer', 'To accept something as true or real.'),
(19, 'verbs', 'Bring', 'Traer', 'To take or carry something to a place.'),
(20, 'verbs', 'Build', 'Construir', 'To construct by putting parts or materials together.'),
(21, 'verbs', 'Buy', 'Comprar', 'To acquire something in exchange for money.'),
(22, 'verbs', 'Call', 'Llamar', 'To communicate with someone by phone or to shout out.'),
(23, 'verbs', 'Change', 'Cambiar', 'To make or become different.'),
(24, 'verbs', 'Choose', 'Elegir', 'To select from a range of options.'),
(25, 'verbs', 'Clean', 'Limpiar', 'To remove dirt, impurities, or unwanted items.'),
(26, 'verbs', 'Climb', 'Escalar', 'To go up or ascend something.'),
(27, 'verbs', 'Create', 'Crear', 'To bring something into existence.'),
(28, 'verbs', 'Decide', 'Decidir', 'To make a choice or come to a conclusion.'),
(29, 'verbs', 'Describe', 'Describir', 'To give a detailed account of something.'),
(30, 'verbs', 'Develop', 'Desarrollar', 'To grow or cause to grow and become more mature.'),
(31, 'verbs', 'Discuss', 'Discutir', 'To talk about something with others.'),
(32, 'verbs', 'Drive', 'Conducir', 'To operate and control the direction of a vehicle.'),
(33, 'verbs', 'Eat', 'Comer', 'To consume food.'),
(34, 'verbs', 'Enjoy', 'Disfrutar', 'To take pleasure in something.'),
(35, 'verbs', 'Explain', 'Explicar', 'To make something clear or easy to understand.'),
(36, 'verbs', 'Find', 'Encontrar', 'To discover something that was lost or unknown.'),
(37, 'verbs', 'Get', 'Obtener', 'To acquire or receive something.'),
(38, 'verbs', 'Give', 'Dar', 'To present something to someone.'),
(39, 'verbs', 'Go', 'Ir', 'To move from one place to another.'),
(40, 'verbs', 'Help', 'Ayudar', 'To assist someone in doing something.'),
(41, 'verbs', 'Hope', 'Esperar', 'To desire something with expectation of its fulfillment.'),
(42, 'verbs', 'Know', 'Saber', 'To be aware of something through observation or experience.'),
(43, 'verbs', 'Learn', 'Aprender', 'To gain knowledge or skills through experience.'),
(44, 'verbs', 'Leave', 'Dejar', 'To go away from a place.'),
(45, 'verbs', 'Like', 'Gustar', 'To have a fondness for something.'),
(46, 'verbs', 'Listen', 'Escuchar', 'To give attention to sound.'),
(47, 'verbs', 'Live', 'Vivir', 'To exist or have life.'),
(48, 'verbs', 'Look', 'Mirar', 'To direct one\'s gaze in a specified direction.'),
(49, 'verbs', 'Make', 'Hacer', 'To create or form something.'),
(50, 'verbs', 'Mean', 'Significar', 'To convey a particular idea or concept.'),
(51, 'verbs', 'Meet', 'Conocer', 'To come into the presence of someone for the first time.'),
(52, 'verbs', 'Move', 'Mover', 'To change position or location.'),
(53, 'verbs', 'Need', 'Necesitar', 'To require something because it is essential.'),
(54, 'verbs', 'Open', 'Abrir', 'To move something to allow access.'),
(55, 'verbs', 'Play', 'Jugar', 'To engage in activity for enjoyment or recreation.'),
(56, 'verbs', 'Put', 'Poner', 'To place something in a specific position.'),
(57, 'verbs', 'Read', 'Leer', 'To look at and comprehend the meaning of written words.'),
(58, 'verbs', 'Run', 'Correr', 'To move swiftly on foot.'),
(59, 'verbs', 'Say', 'Decir', 'To express something in words.'),
(60, 'verbs', 'See', 'Ver', 'To perceive with the eyes.'),
(61, 'verbs', 'Show', 'Mostrar', 'To present something to someone.'),
(62, 'verbs', 'Sit', 'Sentarse', 'To rest with the weight on the buttocks.'),
(63, 'verbs', 'Speak', 'Hablar', 'To communicate verbally.'),
(64, 'verbs', 'Take', 'Tomar', 'To grasp or seize something.'),
(65, 'verbs', 'Talk', 'Hablar', 'To communicate or converse with someone.'),
(66, 'verbs', 'Think', 'Pensar', 'To have thoughts or consider something.'),
(67, 'verbs', 'Try', 'Intentar', 'To make an attempt or effort to do something.'),
(68, 'verbs', 'Use', 'Usar', 'To employ something for a purpose.'),
(69, 'verbs', 'Wait', 'Esperar', 'To stay in a place until something happens.'),
(70, 'verbs', 'Want', 'Querer', 'To have a desire for something.'),
(71, 'verbs', 'Work', 'Trabajar', 'To engage in physical or mental activity to achieve a result.'),
(72, 'verbs', 'Write', 'Escribir', 'To form letters, words, or symbols on a surface.');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuaris`
--
ALTER TABLE `usuaris`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuari` (`username`);

--
-- Indices de la tabla `vocabulari`
--
ALTER TABLE `vocabulari`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuaris`
--
ALTER TABLE `usuaris`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `vocabulari`
--
ALTER TABLE `vocabulari`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
