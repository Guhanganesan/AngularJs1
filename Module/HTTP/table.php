<?php
	    $host="localhost";
	    $user="root";
	    $pass="";
	    mysql_connect($host,$user,$pass);
	    mysql_select_db("anbu");
	    $q=mysql_query("select * from data");
	    $data = array();
		while($row = mysql_fetch_assoc($q))
		{
			$data[] = $row;
		}
		$x = json_encode($data);
	    echo $x;
?>