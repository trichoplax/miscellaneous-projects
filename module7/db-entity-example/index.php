<?php

error_reporting(E_ALL);

require_once 'userEntity.php';

$connectionStuff = 'mysql:host=127.0.0.1;dbname=db-entity-example';
$db = new PDO($connectionStuff, 'root');
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$query = $db->prepare('SELECT `id`, `name`, `age` FROM `users` WHERE `id` = 1;');
$query->execute();
$query->setFetchMode(PDO::FETCH_CLASS, "userEntity", [$db]);
$user = $query->fetch();

$user->name = 'hector';
$user->age = 29;

unset($user);