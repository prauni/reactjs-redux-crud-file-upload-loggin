<?php
header("Access-Control-Allow-Origin", "*");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header("Access-Control-Allow-Credentials", "true");
header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,DELETE,POST,PUT");
header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
/*
$result = array();
$rows 	= array();
$con = mysqli_connect("localhost","root","","test");
$sql = "select * from users";
$res = mysqli_query($con,$sql);
while($row = mysqli_fetch_array($res)){
	$rows[] = $row;
}
$result['status'] 	= 'Success';
$result['list'] 	= $rows;
echo json_encode($res);
/*
*/
$coin = array();

$coin[0]['id'] 			= 1;
$coin[0]['name'] 		= 'Bitcoin';
$coin[0]['price_usd']	= 5400;

$coin[1]['id'] 			= 2;
$coin[1]['name'] 		= 'Ethereum';
$coin[1]['price_usd']	= 2700;



echo json_encode($coin);
?>