<?php


// SMTP Server Configuration
$smtp_server = "smtp.gmail.com";
$smtp_port = 465;
$smtp_username = "your-email@gmail.com";
$smtp_password = "your-email-password";




$name=$_POST['name'];
$visitor_email=$_POST['email'];
$field=$_POST['field'];
$message=$_POST['message'];
$email_from='gkk@sihproject.com';
$email_subject="New Form Submission";
$email_body="User Name: $name \n".
            "User Email:$visitor_email \n".
            "User Field: $field \n".
            "User Message:$message \n";
 $to='gurnamkaur8307@gamil.com';
 $headers="From: $email_from \r\n";           
 $headers .="Reply-To: $visitor_email \r\n";
mail($to,$email_subject,$email_body,$headers);
 
if (mail($to, $email_subject, $email_body, $headers)) {
  echo "Mail Sent Successfully";
} else {
  echo "Mail Not Sent. Error: " . error_get_last()['message'];
}

header('location:contact.html');
 ?>