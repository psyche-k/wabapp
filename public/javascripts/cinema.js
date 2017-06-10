$(document).ready(function () {
	getmoive();
    $("#tabs li").bind("click", function () {
    	var index = $(this).index();
    	var divs = $("#tabs-body > div");
    	$(this).parent().children("li").attr("class", "tab-nav");//将所有选项置为未选中
     	$(this).attr("class", "tab-nav-action"); //设置当前选中项为选中样式
    	divs.hide();//隐藏所有选中项内容
    	divs.eq(index).show(); //显示选中项对应内容
    });
});

function getmoive() {
	gethotmoive();
	getnextmoive();
}

function hotmovienm (number) {
	document.getElementById("hot-micket").innerHTML = number;
}

function nextmovienm (number) {
	document.getElementById("onnext-micket").innerHTML = number;
}


function tocinema () {
	var user = document.getElementById('welcome').firstChild.nodeValue;
	temp = event.target.id;
	location.href = 'cinema?'+user+'&id='+temp;
}

$(".cinemaname").click(function(){
	tocinema();
});
