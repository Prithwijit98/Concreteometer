<?php

        //mysqli_connect(host,username,password,dbname,port,socket);
  $link = mysqli_connect("148.66.137.118","Prithwijit","vickY1811","IOT_Database");
  
  if(mysqli_connect_error()) {
    die("There was an error");
  }
  
  $auth = $_GET['auth'];

  $query = "SELECT * from Concreteometer WHERE authkey='".$auth."'";
  $result = mysqli_query($link, $query);
  if($result->num_rows > 0) {  
    include 'activity.html';
  } else {
   	include 'activationkey.html';
  }

  $link->close();
?>
