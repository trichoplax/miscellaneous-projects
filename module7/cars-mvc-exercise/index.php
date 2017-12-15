<?php
$db = new DatabaseConnection();
$model = new CarUserLinkModel($db)
$controller = new CarUserLinkController($model);
$controller->createNewLink($_GET);
$view = new CarUserLinkView($controller);
$view->showUsersAndCarsInForm($controller->users, $controller->cars);
