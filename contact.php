
<?php
require_once('recaptchalib.php');
  $privatekey = "6LcNwPgSAAAAAKmRQYo1iM23dgSzQnWT2OjHSTTh";
  $resp = recaptcha_check_answer ($privatekey,
                                $_SERVER["REMOTE_ADDR"],
                                $_POST["recaptcha_challenge_field"],
                                $_POST["recaptcha_response_field"]);

  if (!$resp->is_valid) {
    // What happens when the CAPTCHA was entered incorrectly
    die ("The reCAPTCHA wasn't entered correctly. Go back and try it again." .
         "(reCAPTCHA said: " . $resp->error . ")");
  } else {
    // Your code here to handle a successful verification 
    $to = "nader@nader.site40.net"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['FN'];
    $last_name = $_POST['LN'];
    $subject = "Form submission";
    $message = $first_name . "" . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];
    $message = wordwrap($message,70);
    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
      if(mail($to,$subject,$message,$headers)){
        echo "your email was sent! Thank you.";
      }
      else{
        echo "Mail sending failed.";
      }
    //include("index.php");
  }
?>