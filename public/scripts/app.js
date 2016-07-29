var state = 0;
var viewport = document.getElementById("viewport");
var boton_analogo = document.getElementById("analogo");
var boton_digital = document.getElementById("digital");

boton_analogo.addEventListener("click", function(){
	state = 0;
	viewport.innerHTML = render(state);
});

boton_digital.addEventListener("click", function(){
	state = 1;
	viewport.innerHTML = render(state);
});


function render(state){
	var html = "";
	if(state === 0){
		html += '<div class="reloj">';
		html += '<div class="centro">';
		for (var i = 1; i < 13; i++) {
			html += '<div class="hora h'+i+'">'+i+'</div>'
		}
		/*
		for (var j = 1; j < 61; j++) {
			html += '<div class="minuto m'+j+'"></div>'
		}*/
		html += '<div id="segundo"><div id="segs"></div></div>'
		
		html += '</div>';
		html += '</div>';
	}
	else if(state===1){
		var d = new Date();
    	var t = d.toLocaleTimeString();
    	var html = "";
    	html += '<div id="rel_digital">'+t+'</div>';
	}
	return html;
}

viewport.innerHTML = render(state);


function manecillaSegundos(it){
	//var d = new Date();
	//var t = d.getSeconds();
	//var html = "";
	//html += '<div class="segundo"></div>'
	//return html;
	document.getElementById("segundo").style.transform = "rotate("+it+"deg)";
}

function digital(){
	var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("rel_digital").innerHTML = t;
}

var it=0;
var myVar = setInterval(function myTimer(){
	manecillaSegundos(it);
	it = it +5;	
}, 1000);

var myVar2 = setInterval(function myTimer2(){
	digital();
}, 1000);







