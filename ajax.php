<?php
require_once 'tietuku.php';

$AccessKey = '';//贴图库开放平台的AccessKey
$SecretKey = '';//贴图库开放平台的SecretKey
$aid = '';//你的相册ID

$tietuku = new TieTuKuToken($AccessKey,$SecretKey);
$param['deadline'] = time()+60;
$param['aid'] = $aid;
$token=$tietuku->dealParam($param)->createToken();

header('Content-type: application/json;charset=utf-8');
echo '{"token":"'.$token.'"}';