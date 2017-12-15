<?php

class CarUserLinkView
{
    private $controller;

    function __construct($controller) {
        $this->controller = $controller;
    }

    function showUsersAndCarsInForm($users, $cars) {
        <html>
        <body>
            <form action='index.php' method='GET'>
                $controller->
            <input type='submit'>
        </form>
        </body>
        </html>
    }
}