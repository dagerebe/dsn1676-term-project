var $BtnTornado = $('.tornado')
var $tornado = $('.pictornado')

var $BtnWave = $('.wave')
var $wave = $('.picwave')

var $BtnSnow = $('.snow')
var $snow = $('.picsnow')

var $houseBad = $('.house-bad')

var $houseGood = $('.house-good')

$BtnTornado.on('click', function () {
	$tornado.toggleClass('js-tornado-in');
	$houseBad.toggleClass('js-house-bad');
	$houseGood.toggleClass('js-house-good');
});

$BtnWave.on('click', function () {
	$wave.toggleClass('js-wave-in');
});

$BtnSnow.on('click', function () {
	$snow.toggleClass('js-snow-in');
});