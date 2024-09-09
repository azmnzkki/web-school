<?php 

$server = 'localhost';
$username = 'root';
$password = '';
$database = "blog_school";

$conn = mysqli_connect($server, $username, $password, $database);

if(!$conn){
    echo mysqli_connect_error();
}

function getData($query) {
    global $conn;
    $result = mysqli_query($conn, $query);

    $rows = [];
    while($row = mysqli_fetch_assoc($result)){
        $rows[] = $row;
    };

    return $rows;
}