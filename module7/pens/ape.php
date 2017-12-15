<?php

class ape
{
    public $name;

    public function __construct($name) {
        $this->name = $name;
    }

    public function performing() {
        return "dancing<br>";
    }

    public function myClass() {
        return __CLASS__;
    }
}