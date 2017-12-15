<?php

error_reporting(E_ALL);

require_once('Frog.php');

$frederick = new Frog('orange');

echo $frederick->speak();

echo '<br>';

$george = new Frog('blue');
echo $george->speak();

echo PHP_MAXPATHLEN;