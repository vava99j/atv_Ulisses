<?php

$conn = mysqli_connect("localhost", "root", "", "doepet");


if (!$conn) {
    die("Falha na conexão: " . mysqli_connect_error());
}


$email = $_POST['email'];
$senha = $_POST['senha'];


$sql = "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha'";
$result = mysqli_query($conn, $sql);


if (mysqli_num_rows($result) > 0) {
    echo "Login bem-sucedido!";
} else {
    echo "Email ou senha incorretos.";
}


mysqli_close($conn);
?>