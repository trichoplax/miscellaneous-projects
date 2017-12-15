<?php

$string = '0000';
$increasing = true;
do {
    echo $string."\n";

    for ($index = strlen($string) - 1; $index >= 0; $index--){
        $character = $string[$index];

        if ($increasing) {
            if ($character === '9') {
                $character = '0';
            } else {
                $character++;
                break;
            }
        } else {
            if ($character === '0') {
                $character = '9';
            } else {
                $character--;
                break;
            }
        }

        $string[$index] = $character;
    }

    $string[$index] = $character;

    if ($string === '1000') {
        $increasing = false;
    }
} while ($string != '9999');