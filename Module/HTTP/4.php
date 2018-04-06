<?php
      $host="localhost";
	  $user="root";
	  $pass="";
	  mysql_connect($host,$user,$pass);
	  mysql_select_db("payilagam");
	  $q=mysql_query("select * from data where pass='5599' ");
	  $row=mysql_fetch_row($q);
	  $x = json_encode($row);
	  echo $x;

?>
