$(document).ready(function(){ 
	onCurrentSuccess = function(acceleration) {
	console.log(acceleration.x);
	console.log(acceleration.y);
	console.log(acceleration.z);

	var s = 'Acceleration X: ' + acceleration.x + '<br/>' +
			'Acceleration Y: ' + acceleration.y + '<br/>' +
			'Acceleration Z: ' + acceleration.z + '<br/>' +
			'Timestamp: ' + new Date(acceleration.timestamp) + '<br/>';
			$("#status",page).html(s);
	};
});