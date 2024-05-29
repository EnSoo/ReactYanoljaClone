<?php
    header("Contexnt-Type:text/plain; charset=utf-8");
    $responseData=json_decode(file_get_contents('php://input'),true);

    $contentid=$responseData['contentid'];
    $title=$responseData['title'];
    $nickname=$responseData['nickname'];
    $message=$responseData['message'];

    $db=mysqli_connect('localhost','backtrackrt5','A1s2D3f4!','backtrackrt5'); //DB서버주소, DB접속아이디, DB접속비밀번호, DB명
    mysqli_query($db,"set names utf8");
    $sql= "INSERT INTO yanolja_clone_review(contentid, title, nickname, message) VALUES('$contentid', '$title', '$nickname', '$message')";
    $result= mysqli_query($db, $sql);
    
    if($result) { // review 추가 성공시
        echo "리뷰 작성에 성공하였습니다.";
    } else {    // review 추가 실패 시
        echo "리뷰 작성에 실패하였습니다.";
    }
?>