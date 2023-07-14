<?php

$email = $password = "";
$errorMessage = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $email = $_POST["email"];
    $password = $_POST["password"];

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errorMessage = "Invalid email format. Please enter a valid email.";
    } else {

        $conn = new mysqli("localhost", "root", "", "user_auth");
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT * FROM users WHERE email = '$email'";
        $result = $conn->query($sql);

        if ($result->num_rows == 1) {
            $row = $result->fetch_assoc();
            $hashedPassword = $row["password"];

            if (password_verify($password, $hashedPassword)) {

                header("Location: index.html");
                exit();
            } else {
                echo '<script>alert("Invalid password. Please re-enter the correct password."); window.location.href = "login.html";</script>';
                exit();
            }
        } else {
            echo '<script>alert("User not found. Please enter a valid email."); window.location.href = "login.html";</script>';
            exit();
        }

    }
    $conn->close();
}
?>