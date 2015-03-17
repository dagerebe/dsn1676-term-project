var $BtnTornado = $('.tornado')
var $tornado = $('.pictornado')

$BtnTornado.on('click', function () {
	$tornado.toggleClass('js-tornado-in');
});