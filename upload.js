$("#upform").ajaxForm(function(data,status){
	if(status == "success"){
        var linkurl = data.linkurl;
        var turl = data.t_url;
        selectimage.removeAttribute("disabled");
        textarea.innerHTML = '点击或拖拽上传图片';
        walltitle.style.display = 'block';
        var a = document.createElement('a');
		a.target = '_blank';
		a.className = 'imgsrc';
		a.href = linkurl
        a.innerHTML='<div class="showimage box-shadow" style="background-image:url('+turl+');"></div>'
		show.insertBefore(a,show.firstChild);
    }
	else{
		alert('上传错误！请重新上传图片。');
	}
});

function upload(){
		//判断上传文件的类型
	filepath=$("#selectimage").val();
	var extStart=filepath.lastIndexOf(".");
	var ext=filepath.substring(extStart,filepath.length).toUpperCase();
	if(ext!=".BMP"&&ext!=".PNG"&&ext!=".GIF"&&ext!=".JPG"&&ext!=".JPEG"){
		alert("这不是一个正确的图片");
		return false;
	}
    
    $("#upform").submit();
    selectimage.disabled='disabled';
    textarea.innerHTML='图片上传中...';
};

window.onload = function(){
	textarea.style.cssText = "background-image: url(http://ww2.sinaimg.cn/large/a15b4afegw1f0op3ut36wj21kw0idads.jpg);";
    $.ajax({
        type: 'GET',
        url: 'ajax.php?_r=' + Math.random(),
        dataType: 'json',
        cache: false,
        success:function (data) {
            var ttktoken = data.token;
        	token.value = ttktoken;
        }
    });
}