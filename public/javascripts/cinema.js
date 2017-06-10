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

function gethotmoive () {
	var length = document.getElementById("hotcinema").children.length;
	var number = 0;
	$.each(hotmoviedetil, function(i, item) {
		var htmltemp = "";
		if(number >= length) return false;
		htmltemp = '<img id="'+item['id']+'" class="posters" onclick="tocinema()" src="'+
		item['img']+'"><h3 id="'+item['id']+'" class="cinemaname">'+
		item['nm']+'</h3><p class="cinemadetil">'+item['rt']+'-'+item['ver']+
		'</p><p class="cinematime">'+item['time']+'</p><p class="cinemadetil">'+
		item['cat']+'</p><p class="cinemascore">评分：'+item['sc']+'</p><p class="cinemadra">'+
		item['scm']+'<p>';
		document.getElementById("cinemasummary"+number).innerHTML = htmltemp;
		number = number+1;
	})
	hotmovienm(number);
	number = 0;
}

function getnextmoive () {
	var length = document.getElementById("nextcinema").children.length;
	var number = 0;
	$.each(nextcinemasummary, function(i, item) {
		var htmltemp = "";
		if(number >= length) return false;
		htmltemp = '<img id="'+item['id']+'" class="posters" onclick="tocinema()" src="'+
		item['img']+'"><h3 id="'+item['id']+'" class="cinemaname">'+
		item['nm']+'</h3><p class="cinemadetil">'+item['rt']+'-'+item['ver']+
		'</p><p class="cinemadetil">'+item['cat']+'</p><p class="cinemascore">评分：'+item['sc']+'</p><p class="cinemadetil">预约人数：'+item['wish']+'</p><p class="cinemadra">'+
		item['scm']+'<p>';
		document.getElementById("nextcinema"+number).innerHTML = htmltemp;
		number = number+1;
	})
	nextmovienm(number);
	number = 0;
}

function tocinema () {
	var user = document.getElementById('welcome').firstChild.nodeValue;
	temp = event.target.id;
	location.href = 'cinema?'+user+'&id='+temp;
}

$(".cinemaname").click(function(){
	tocinema();
});
