<?php
header("Access-Control-Allow-Origin", "*");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header("Access-Control-Allow-Credentials", "true");
header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,DELETE,POST,PUT");
header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

$result = array();
$rows 	= array();
$con = mysqli_connect("localhost","root","","test");
$sql = "select * from users order by id desc";
$res = mysqli_query($con,$sql);
while($row = mysqli_fetch_assoc($res)){
	$rows[] = $row;
}
$result['status'] 	= 'Success';
$result['list'] 	= $rows;
echo json_encode($rows);
?>