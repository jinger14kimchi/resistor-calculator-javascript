var colors = document.getElementById('colors');
var colorBtn = colors.getElementsByTagName('button');
console.log(colorBtn);

var color_num = 0;
var num = 0;

for (var i = 0; i < colorBtn.length; i++) {
	colorBtn[i].style.backgroundColor = colorBtn[i].innerHTML;
	colorBtn[i].classList.add('btn');
	console.log(colorBtn[i].innerHTML);
}


function band_clicked(band) {
	var bands = document.getElementsByClassName('band');
	for (var i = 0; i < bands.length ; i++) {
		if(bands[i] == band) {
			num = i;
		}
		bands[i].classList.remove('cur_clicked');
	}
	band.classList.add('cur_clicked');
	var band_msg = document.getElementById('band-msg');

	band_msg.innerHTML =   "Band " + (num+1) +" Clicked!";

}

function btn_clicked(btn) {
	var cur = document.getElementsByClassName('cur_clicked')[0];
	var color = btn.innerHTML;
	var color_msg = document.getElementById('color-msg');
	color_msg.innerHTML = "Color: " + color;
	if(cur!=null) {
		cur.style.backgroundColor = color;
	}

	var first = document.getElementById('first');
	var second = document.getElementById('second');
	var multi = document.getElementById('multi');

}


function calculate() {	
	var bands = document.getElementsByClassName('band');
	var base = bands[0] + bands[1];
	var multiplier = bands[2];
}




	// var btn = document.getElementsByTagName('button')[0];

	// btn.addEventListener("click", function(){
	// 	console.log(btn.innerHTML);
	//     alert(btn.innerHTML);
	// });