"use strict";

$(function() {
	$('#hw').change(function() {
		//var file = 'homeworks/'+$('#hw').val();
		//var file = 'https://megaunknown.github.io/Lab10/res/'+$('#hw').val();
		var file ='https://megaunknown.github.io/Lab10/res/' + $('#hw').val();
		//alert(file);
		$.ajax({
			'url': file,
			'type': 'GET',
			'success': ajaxSuccess,
			'error': ajaxFailure
		});
	});
});

function ajaxSuccess(data) {
	$('#output').val(data);
}

function ajaxFailure(xhr, status, exception) {
  console.log(xhr, status, exception);
}