<?php

class salesPen extends standardPen
{
    public function parade($salesPitch = "Get ready to be impressed and spend all your money\n") {
        echo $salesPitch;
        echo "<br>";
        parent::parade();
    }
}