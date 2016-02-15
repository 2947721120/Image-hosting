<!DOCTYPE html>  
<html>  
<head>  
    <meta charset="UTF-8" />
    <title>图床_(:з」∠)_</title>
    <link type="text/css" rel="stylesheet" href="style.css" />   
    <script src="//cdn.bootcss.com/jquery/2.2.0/jquery.min.js"></script>
    <script src="//cdn.bootcss.com/jquery.form/3.51/jquery.form.js"></script>
</head>  
<body>
    <form enctype="multipart/form-data" method="post" action="http://up.tietuku.com/" id = "upform">
		<input name="Token" id = "token" value="" type="hidden">
		<input type="file" name="file" id = "selectimage" onchange="upload();">
	</form>
    <div id="textarea" class="drag box-shadow">点击或拖拽上传图片</div>
    <div id="walltitle" style="display:none;"><h1>已上传图片</h1></div>
    <div id="show"></div>
    <script src="upload.js"></script>
</body>
</html> 