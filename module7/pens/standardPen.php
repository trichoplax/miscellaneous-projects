<?php

class standardPen
{
    public $occupants;

    public function __construct() {
        $this->occupants = [];
    }

    public function addOccupant($occupant) {
        array_push($this->occupants, $occupant);
    }

    public function parade() {
        echo get_class($this);
        foreach($this->occupants as $occupant) {
            echo "Here is " . $occupant->name . " the " . get_class($occupant) . ", " . $occupant->performing() . "<br>";
        }
    }
}