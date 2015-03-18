var $toggle = $('.toggle')
var $nav = $('.nav')

var $BtnTornado = $('.tornado')
var $tornado = $('.pictornado')

var $BtnWave = $('.wave')
var $wave = $('.picwave')

var $BtnSnow = $('.snow')
var $snow = $('.picsnow')
var $snowtwo = $('.picsnowtwo')

var $houseBad = $('.house-bad')

var $houseGood = $('.house-good')

$toggle.on('click', function () {
	$nav.toggleClass('js-nav-open');
});

$BtnTornado.on('click', function () {
	$tornado.addClass('js-tornado-in');
	$houseBad.addClass('js-house-bad');
	$houseGood.addClass('js-house-good');
});

$tornado.on('animationend', function () {
	$tornado.removeClass('js-tornado-in');
	$houseBad.removeClass('js-house-bad');
	$houseGood.removeClass('js-house-good');
});

$BtnWave.on('click', function () {
	$wave.addClass('js-wave-in');
	$houseBad.addClass('js-house-bad');
	$houseGood.addClass('js-house-good');
});

$wave.on('animationend', function () {
	$wave.removeClass('js-wave-in');
	$houseBad.removeClass('js-house-bad');
	$houseGood.removeClass('js-house-good');
});


$BtnSnow.on('click', function () {
	$snow.addClass('js-snow-in');
	$snowtwo.addClass('js-snow-in');
	$houseBad.addClass('js-house-bad');
	$houseGood.addClass('js-house-good');
});

$snow.on('animationend', function () {
	$snow.removeClass('js-snow-in');
	$snowtwo.removeClass('js-snow-in');
	$houseBad.removeClass('js-house-bad');
	$houseGood.removeClass('js-house-good');
});