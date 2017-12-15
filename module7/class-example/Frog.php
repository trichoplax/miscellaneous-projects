<?php

class Frog
{
    private $colour;

    function __construct($colour) {
        $this->colour = $colour;
    }

    function getColour() {
        return $this->colour;
    }

    function speak() {
        return 'croak, ribbit, I am a ' . $this->colour . ' frog.';
    }
}
