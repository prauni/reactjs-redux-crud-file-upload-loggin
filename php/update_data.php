<?php
header("Access-Control-Allow-Origin", "*");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header("Access-Control-Allow-Credentials", "true");
header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,DELETE,POST,PUT");
header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

$file_name = 'surya-truck-parts.jpg';
if(isset($_FILES['image'])){
	   
	$errors= array();
	$file_name = $_FILES['image']['name'];
	$file_size =$_FILES['image']['size'];
	$file_tmp =$_FILES['image']['tmp_name'];
	$file_type=$_FILES['image']['type'];
	/*$file_ext=strtolower(end(explode('.',$_FILES['image']['name'])));

	$extensions= array("jpeg","jpg","png");

	if(in_array($file_ext,$extensions)=== false){
	 $errors[]="extension not allowed, please choose a JPEG or PNG file.";
	}

	if($file_size > 2097152){
	 $errors[]='File size must be excately 2 MB';
	}*/

	if(empty($errors)==true){
	 move_uploaded_file($file_tmp,"../public/images/".$file_name);
	 echo "Success";
	}else{
	 print_r($errors);
	}
}


$con = mysqli_connect("localhost","root","","test");
$sql = "INSERT INTO users(name,department,img) value('".$_POST['name']."','".$_POST['dept']."','".$file_name."')";
mysqli_query($con,$sql);
$res['status'] = 'Success';
	
echo json_encode($res);

?>