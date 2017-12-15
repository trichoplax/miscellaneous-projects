<?php

class TextAnalyser
{
    private $text = '';

    public function setText($text) {
        $this->text = $text;
    }

    public function getText() {
        return $this->text;
    }

    public function words() {
        return array_filter(preg_split("/[\s,.-:;]+/", $this->text), "isNotEmpty");
    }

    public function sentences() {
        return array_filter(preg_split("/[.\n\r]+/", $this->text), "isNotEmpty");
    }

    public function characterCount() {
        return strlen($this->text);
    }

    public function wordCount() {
        return count($this->words());
    }

    public function sentenceCount() {
        return count($this->sentences());
    }

    public function paragraphCount() {
        return count(preg_split("/[\n\r]+/", $this->text));
    }

    public function longestWord() {
        $words = $this->words();
        usort($words, "isShorter");
        return $words[0];
    }

    public function averageSentenceLength() {
        $sentences = $this->sentences();
        $lengths = array_map("strlen", $sentences);
        return array_sum($lengths) / count($lengths);
    }
}

function isShorter($string1, $string2) {
    return strlen($string1) < strlen($string2);
}

function isNotEmpty($string) {
    return strlen($string) > 0;
}
