<?php 
// TODO: add to productive
$ip = $_SERVER['REMOTE_ADDR']	;
$mail_message = wordwrap($ip, 70);
mail('info@nano.sx', 'yoga 3', $mail_message);

echo '{"message" : "delivered"}';
?>