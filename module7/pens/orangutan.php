<?php

class orangutan extends ape
{
    public function performing()
    {
        return "sullenly " . parent::performing();
    }
}