<?php

class userEntity
{
    public $db;
    public $id;
    public $name;
    public $age;

    public function __construct($db) {
        $this->db = $db;
    }


    public function save() {
        $statement = $this->db->prepare('UPDATE `users` SET `name` = (:name), `age` = (:age) WHERE `id` = (:id)');
        $statement->bindParam(':id', $this->id);
        $statement->bindParam(':name', $this->name);
        $statement->bindParam(':age', $this->age);
        $statement->execute();
    }

    public function __destruct() {
        $this->save();
    }
}

