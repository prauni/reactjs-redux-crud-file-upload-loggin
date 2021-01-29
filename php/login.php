<?php
header("Access-Control-Allow-Origin", "*");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header("Access-Control-Allow-Credentials", "true");
header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,DELETE,POST,PUT");
header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

	//$res[] = 'success ..';
	$res['status']	= 1;
	$res['time'] = time();
	$res['username'] = 'Riyan';
	$res['token']	 = md5(rand(99,999));
	echo json_encode($res);
	/*$con = mysqli_connect('localhost','root','','laravel63');
	$cleaner = array(2,3,4,6,15,16,17,18,19,20,21);	
	foreach($cleaner as $clr){		
		$i = 1;
		while($i<2){
			$i++;
			$j = 8;
			$sql = "INSERT INTO `cleaner_calendar_slot` (`cleaner_id`, `dtd`, `slot`) VALUES ";
			while($j<29){
				$j++;
				if(strlen($j) == 1){
					$k = '0'.$j;
				}
				else{
					$k = $j;
				}
				$sql .= "
(".$clr.",  '2020-0".$i."-".$k."', '7.0'), 
(".$clr.",  '2020-02-".$k."', '8.0'), 
(".$clr.",  '2020-02-".$k."', '9.0'), 
(".$clr.",  '2020-02-".$k."', '10.0'), 
(".$clr.",  '2020-02-".$k."', '11.0'), 
(".$clr.",  '2020-02-".$k."', '12.0'), 
(".$clr.",  '2020-02-".$k."', '13.0'), 
(".$clr.",  '2020-02-".$k."', '14.0'), 
(".$clr.",  '2020-02-".$k."', '15.0'), 
(".$clr.",  '2020-02-".$k."', '16.0'), 
(".$clr.",  '2020-02-".$k."', '17.0'), 
(".$clr.",  '2020-02-".$k."', '18.0'),
(".$clr.",  '2020-02-".$k."', '19.0'),";
			}
			$sql = substr($sql,0,-1);
			mysqli_query($con,$sql);
		}
	}*/
	//echo $sql;exit;
?>