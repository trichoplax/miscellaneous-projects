<?php

class CarUserLinkController
{
    private $model;

    function __construct($model) {
        $this->model = $model;
    }

    function createNewLink($get) {
        if (isset($get['car']) && isset($get['user'])) {
            $model->addNewLink($get['car'], $get['user']);
            return true;
        }
        return false;
    }

    function returnCarsAndUsers($view) {

    }
}