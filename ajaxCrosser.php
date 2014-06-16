<?php

# Parameters:
# - url: url to invoke
# - proxyHost: proxy host (optional)
# - proxyPort: proxy port (optional)
ini_set('max_execution_time', 0);

function http_parse_headers($header) {
	$retVal = array();
	$fields = explode("\r\n", preg_replace('/\x0D\x0A[\x09\x20]+/', ' ', $header));
	foreach ($fields as $field) {
		if (preg_match('/([^:]+): (.+)/m', $field, $match)) {
			$match[1] = preg_replace('/(?<=^|[\x09\x20\x2D])./e', 'strtoupper("\0")', strtolower(trim($match[1])));
			if (isset($retVal[$match[1]])) {
				$retVal[$match[1]] = array($retVal[$match[1]], $match[2]);
			} else {
				$retVal[$match[1]] = trim($match[2]);
			}
		}
	}
	return $retVal;
}

if (!function_exists("curl_init")) {
	header("HTTP/1.0 404 Curl undefined on Php server");
	echo "";
	exit();
}

if (!isset($_REQUEST["url"])) {
	echo "Missing mandatory parameter 'url'";
	exit ;
}

$url = $_REQUEST["url"];

$session = curl_init();
curl_setopt($session, CURLOPT_URL, $url);
curl_setopt($session, CURLOPT_VERBOSE, 1);
curl_setopt($session, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($session, CURLOPT_HEADER, 1);

if (isset($_REQUEST["proxyHost"])) {
	curl_setopt($session, CURLOPT_PROXY, $_REQUEST["proxyHost"]);
	curl_setopt($session, CURLOPT_PROXYPORT, $_REQUEST["proxyPort"]);
}

$body = file_get_contents('php://input');

$headers = array();
$allRequestHeader = getallheaders();

$allRequestHeader["Access-Control-Allow-Origin"] = "*";
$allRequestHeader["User-Agent"] = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.154 Safari/537.36';
$bodyJson = json_decode($body);

//$allRequestHeader["Authorization"] = $bodyJson->Authorization;

//$allRequestHeader["login"] = $bodyJson->username;
//$allRequestHeader["password"] = $bodyJson->password;

//$allRequestHeader["login"] = 'byblos.dg@gmail.com';
//$allRequestHeader["password"] = 'byblos';

foreach ($allRequestHeader as $key => $value) {
	$lowkey = strtolower($key);
	if (($lowkey == "content-type") || ($lowkey == "accept-language") || ($lowkey == "content-length") || ($lowkey == "user-agent") || ($lowkey == "accept-Language") || ($lowkey == "accept-encoding") || ($lowkey == "accept") || ($lowkey == "cookie") || ($lowkey == "connection") || ($lowkey == "pragma") || ($lowkey == "cache-controls") || ($lowkey == "login") || ($lowkey == "password")) {
		$headers[] = $key . ": " . $value;
	}
}

curl_setopt($session, CURLOPT_HTTPHEADER, $headers);

if (!empty($body)) {
	curl_setopt($session, CURLOPT_POSTFIELDS, $body);
	curl_setopt($session, CURLOPT_POST, 1);
}
curl_setopt($session, CURLOPT_RETURNTRANSFER, 1);

$response = curl_exec($session);
$infoCode = curl_getinfo($session, CURLINFO_HTTP_CODE);
$infoSize = curl_getinfo($session, CURLINFO_HEADER_SIZE);
$header = http_parse_headers(substr($response, 0, $infoSize));
$result = substr($response, $infoSize);

foreach ($header as $key => $val) {
	if ($key == 'Set-Cookie') {
		header("$key: $val");
		break;
	}
}
if ($infoCode != 200) {
	if ($infoCode > 0) {
		header("HTTP/1.0 " . $infoCode . " " . curl_error($session) . " - " . $url);
	} else {
		header("HTTP/1.0 404 " . curl_error($session) . " - " . $url);
	}
} else if ($result == false) {
	header("HTTP/1.0 503 " . curl_error($session) . " - " . $url);
}

curl_close($session);

echo $result;
?>
