<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if (isset($_POST['name'])) {
   
    $server = "localhost";
    $username = "root";
    $password = "";
    $database = "interior_sb"; 

    $conn = mysqli_connect($server, $username, $password, $database);

   
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    // echo "Successfully connected to the database.<br>";
   

    
    $name = $_POST['name'];
    $plan = $_POST['plan'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $address = $_POST['address'];
    $message = $_POST['message'];
    $gender = $_POST['gender'];

    
    $sql = "INSERT INTO contact (`name`, `plan`, `email`, `number`, `address`, `message`, `gender`) 
            VALUES ('$name', '$plan', '$email', '$number', '$address', '$message', '$gender')";

    
    if ($conn->query($sql) === TRUE) {
        $submit=true;
        echo "<script>alert('Form submitted successfully!'); window.location.href='contact_us.html';</script>";
       // echo "Successfully inserted.";
    } else {
        echo "ERROR: $sql <br>" . $conn->error;
    }

   
    $conn->close();
}
?>
