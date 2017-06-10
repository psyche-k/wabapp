$(document).ready(function () {
	cinemaid = window.location.href.split("=")[1];
	$.each(hotmoviedetil, function(i, item) {
		if (cinemaid == item['id']) {
			newmovie(item);
			getmoivesession(item);
		}
	})
	$.each(nextcinemasummary, function(i, item) {
		if (cinemaid == item['id']) {
			newmovie(item);
			getmoivesession(item);
		};
	})
});

function getmoivesession (item) {
	var htmltemp = "";
	for (var i = 0; ; i++) {
		if(item['session'+i] == null) break;
		htmltemp += '<button onclick="toServe()" id="session'+i+'">'+item['session'+i]+'</button>';
	};
	document.getElementById('session').innerHTML = htmltemp;
}

function newmovie (item) {
	document.getElementById('moivename').innerHTML = item['nm'];
	document.getElementById('poster').src = item['img'];
	document.getElementById('star').innerHTML = item['star'];
	document.getElementById('dir').innerHTML = item['dir'];
	document.getElementById('rt').innerHTML = item['rt'];
	document.getElementById('ver').innerHTML = item['ver'];
	document.getElementById('sc').innerHTML = item['sc'];
	document.getElementById('wish').innerHTML = item['wish'];
	document.getElementById('cat').innerHTML = item['cat'];
	document.getElementById('time').innerHTML = item['time'];
	document.getElementById('dra').innerHTML = item['dra'];
	document.getElementById('date').min = item['data'];
}


function toServe (argument) {
	if(document.getElementById('date').value != "") {
		var t = window.location.href.split("=")[1];
		temp = event.target.id;
		var d = document.getElementById('date').value;
		location.href = 'reserve?time=' + temp +'&id='+t+'&date='+d;
	} else {
		alert("请选择观影日期。");
	}
}