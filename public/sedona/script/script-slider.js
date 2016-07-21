$(document).ready(function(){


/* слайдер цен */

$('#slider').slider({
	min: 0,
	max: 5000,
	values: [0,3000],
	range: true,
	stop: function(event, ui) {
		$('input#min').val($('#slider').slider('values',0));
    $('input#max').val($('#slider').slider('values',1));

    },
    slide: function(event, ui){
		$('input#min').val($('#slider').slider('values',0));
    $('input#max').val($('#slider').slider('values',1));
    }
});

$("input#min").change(function(){

	var value1=$("input#min").val();
	var value2=$("input#max").val();

    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		$("input#min").val(value1);
	}
	$("#slider").slider("values",0,value1);
});


$("input#max").change(function(){

	var value1=$("input#min").val();
	var value2=$("input#max").val();

	if (value2 > 5000) { value2 = 5000; $("input#max").val(5000)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		$("input#max").val(value2);
	}
	$("#slider").slider("values",1,value2);
});



// фильтрация ввода в поля
	$('input').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;

		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;

		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);

		if(!/\d/.test(keyChar))	return false;

	});


});
