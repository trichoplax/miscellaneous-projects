<?php

class silverBackGorilla extends gorilla
{
    public function performing()
    {
        return "very " . parent::performing();
    }
}