<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collecting form data
    $firstName = $_POST['firstName'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $dob = $_POST['dob'];
    $gender = $_POST['gender'];
    $program = $_POST['program'];
    $hobbies = isset($_POST['hobbies']) ? $_POST['hobbies'] : 'None';
    $favColor = $_POST['favColor'];
    $marks = $_POST['marks'];
    $satisfaction = $_POST['satisfaction'];
    $address = $_POST['address'];
    $portfolio = $_POST['portfolio'];

    // Display the collected data
    echo "<h1>Form Data Submitted Successfully</h1>";
    echo "<p><strong>First Name:</strong> $firstName</p>";
    echo "<p><strong>Password:</strong> $password</p>";
    echo "<p><strong>Email:</strong> $email</p>";
    echo "<p><strong>Phone:</strong> $phone</p>";
    echo "<p><strong>Date of Birth:</strong> $dob</p>";
    echo "<p><strong>Gender:</strong> $gender</p>";
    echo "<p><strong>Program:</strong> $program</p>";
    echo "<p><strong>Hobbies:</strong> " . (is_array($hobbies) ? implode(', ', $hobbies) : $hobbies) . "</p>";
    echo "<p><strong>Favorite Color:</strong> $favColor</p>";
    echo "<p><strong>Marks:</strong> $marks</p>";
    echo "<p><strong>Satisfaction Level:</strong> $satisfaction</p>";
    echo "<p><strong>Address:</strong> $address</p>";
    echo "<p><strong>Portfolio URL:</strong> $portfolio</p>";
} else {
    echo "<h1>Invalid Request</h1>";
}
?>
