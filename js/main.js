var $toggle = $('.toggle')
var $nav = $('.nav')

var $BtnTornado = $('.tornado')
var $tornado = $('.pictornado')

var $BtnWave = $('.wave')
var $wave = $('.picwave')

var $BtnSnow = $('.snow')
var $snow = $('.picsnow')

var $houseBad = $('.house-bad')

var $houseGood = $('.house-good')

$toggle.on('click', function () {
	$nav.toggleClass('js-nav-open');
});

$BtnTornado.on('click', function () {
	$tornado.toggleClass('js-tornado-in');
	$houseBad.toggleClass('js-house-bad');
	$houseGood.toggleClass('js-house-good');
});

$BtnWave.on('click', function () {
	$wave.toggleClass('js-wave-in');
	$houseBad.toggleClass('js-house-bad');
	$houseGood.toggleClass('js-house-good');
});

$BtnSnow.on('click', function () {
	$snow.toggleClass('js-snow-in');
	$houseBad.toggleClass('js-house-bad');
	$houseGood.toggleClass('js-house-good');
});