<?php
require_once('TwitterAPIExchange.php');

$hashtag = $_GET["q"];



$settings = array(
    'oauth_access_token' => "1487424068836290564-vG1Xi5AF09ajQVPgrYY1K1l6UkxkRg",
    'oauth_access_token_secret' => "AbluubsehjGzssNI7gGq8rdxbXxgtxXBS6wvnQAZDK9Vd",
    'consumer_key' => "haQHiFBDQA7oHiWdHhifkGrC8",
    'consumer_secret' => "IWIo8dps0D89aaa8KSoNoeIGZy3vW7yF8wzhkEqR1CGHW7QO3f"
);

$url = 'https://api.twitter.com/1.1/search/tweets.json';
$news = "news";

// $hashtag = $hashtag+$news;
$getfield = '?q=#'.$hashtag.' AND -filter:retweets AND -filter:replies&lang=en&count=20&tweet_mode=extended';
$requestMethod = 'GET';

$twitter = new TwitterAPIExchange($settings);
$response = $twitter->setGetfield($getfield)
     ->buildOauth($url, $requestMethod)
     ->performRequest();

echo $response;
?>