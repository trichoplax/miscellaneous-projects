<?php

require 'standardPen.php';
require 'salesPen.php';
require 'ape.php';
require 'gorilla.php';
require 'silverBackGorilla.php';
require 'orangutan.php';

$standardPen = new standardPen();
$standardPen->addOccupant(new gorilla('George'));
$standardPen->addOccupant(new silverBackGorilla('Harold'));
$standardPen->addOccupant(new orangutan('Hector'));
$standardPen->parade();

$salesPen = new salesPen();
$salesPen->addOccupant(new gorilla('Geoffrey'));
$salesPen->addOccupant(new silverBackGorilla('Chris'));
$salesPen->addOccupant(new orangutan('Paul'));
$salesPen->parade();


