<?php

error_reporting(E_ALL);

require_once('TextAnalyser.php');

$myTextAnalyser = new TextAnalyser();
$myTextAnalyser->setText('A test string

Some more text. Text:with;punctuation.

Stuff...');

echo nl2br($myTextAnalyser->getText()) . "<br><br>";
echo "Characters: " . $myTextAnalyser->characterCount() . "<br>";
echo "Words: " . $myTextAnalyser->wordCount() . "<br>";
echo "Sentences: " . $myTextAnalyser->sentenceCount() . "<br>";
echo "Paragraphs: " . $myTextAnalyser->paragraphCount() . "<br>";
echo "Longest word: " . $myTextAnalyser->longestWord() . "<br>";
echo "Average sentence length: " . $myTextAnalyser->averageSentenceLength() . "<br>";
