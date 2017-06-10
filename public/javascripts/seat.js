var price = 0; //票价 
$(document).ready(function() {
	document.getElementById('cinema').innerHTML = "";
  var args = getQueryStringArgs();
  var cid = args['id'];
  var ss = args['time'];
  var date = args['date'];
 	var $cart = $('#selected-seats'), //座位区 
 	$counter = $('#counter'), //票数 
 	$total = $('#total'); //总计金额
 	setprice(cid, ss, date); 
 	var sc = $('#seat-map').seatCharts({ 
map: [ //座位图 
  'aaaaaaaaaa', 
  'aaaaaaaaaa', 
  '__________', 
  'aaaaaaaa__', 
  'aaaaaaaaaa', 
  'aaaaaaaaaa', 
  'aaaaaaaaaa', 
  'aaaaaaaaaa', 
  'aaaaaaaaaa', 
  'aa__aa__aa'
], 
legend : { //定义图例 
  node : $('#legend'), 
  items : [ 
  [ 'a', 'available', '可选座' ], 
  [ 'a', 'unavailable', '已售出'] 
  ]   
 }, 
 click: function () { //点击事件 
  if (this.status() == 'available') { //可选座 
  $('<li>'+(this.settings.row+1)+'排'+this.settings.label+'座</li>') 
   .attr('id', 'cart-item-'+this.settings.id) 
   .data('seatId', this.settings.id) 
   .appendTo($cart); 
  $counter.text(sc.find('selected').length+1); 
  $total.text(recalculateTotal(sc)+price); 
  return 'selected'; 
  } else if (this.status() == 'selected') { //已选中 
  //更新数量 
  $counter.text(sc.find('selected').length-1); 
  //更新总计 
  $total.text(recalculateTotal(sc)-price); 
  //删除已预订座位 
  $('#cart-item-'+this.settings.id).remove(); 
  //可选座 
  return 'available'; 
  } else if (this.status() == 'unavailable') { //已售出 
  return 'unavailable'; 
  } else { 
  return this.style(); 
  } 
 } 
 }); 
 //已售出的座位 
 //sc.get(['1_2', '4_4','4_5','6_6','6_7','8_5','8_6','8_7','8_8', '10_1', '10_2']).status('unavailable'); 
}); 
//计算总金额 
function recalculateTotal(sc) { 
 	var total = 0; 
 	sc.find('selected').each(function () { 
 		total += price; 
	}); 
 return total; 
}

function setprice (cid, ss, date) {
	$.each(hotmoviedetil, function(i, item) {
		if (cid == item['id']) {
			price = item['price']*1;
			document.getElementById('cinema').innerHTML = item['nm'];
      document.getElementById('time').innerHTML = date+" "+item[ss];
		};
	})
	$.each(nextcinemasummary, function(i, item) {
		if (cid == item['id']) {
			price = item['price']*1;
			document.getElementById('cinema').innerHTML = item['nm'];
      document.getElementById('time').innerHTML = date+" "+item[ss];
		};
	})
}

function getQueryStringArgs(){  
  var qs = (location.search.length>0?location.search.substring(1):"");
  var args = {};  
  var items = qs.split("&");  
  var item = null, name=null, value=null;  
  for(var i=0;i<items.length;i++) {
    item=items[i].split("=");  
    name=decodeURIComponent(item[0]);  
    value=decodeURIComponent(item[1]);  
    args[name]=value;
  }
  return args;
}