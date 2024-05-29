<?php
    header("Contenxt-Type:application/json; charset:utf-8");

    $page=$_GET['page'];
    $contentid=$_GET['contentid'];

    $db=mysqli_connect('localhost','backtrackrt5','A1s2D3f4!','backtrackrt5'); //DB서버주소, DB접속아이디, DB접속비밀번호, DB명
    mysqli_query($db,"set names utf8");
    


?>