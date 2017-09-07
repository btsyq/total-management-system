$(function () {
	//蒙板
	$('.layer').width($('body').width());
	$('.layer').height($('body').height());
	$(window).resize(function (a) {
		$('.layer').width($('body').width());
		$('.layer').height($('body').height());
	})


	$('.modules').find('label').on('click', function () {
		var logo = $(this).parents('.modules').find('.mdlogo');
		if (logo.hasClass('active')) {
			logo.removeClass('active');
		} else {
			logo.addClass('active');
		}
	})


	$("ol.sortb").sortable();

	//弹框
	$('button.new').on('click', function () {
		$('.layer').show();
		$('.addconfirm').show();
	});

	$('button.del').on('click', function () {
		$('.layer').show();
		$('.delconfirm').show();
	});

	$('button.modi').on('click', function () {
		$('.layer').show();
		$('.modiconfirm').show();
	});

	$('button.sort').on('click', function () {
		$('.layer').show();
		$('.sortconfirm').show();
	});

	$('button.confirmbtn').on('click', function () {
		$('.layer').hide();
		$(this).parents('.popup').hide();
	});

	//自定义滚动条
	$(".pwarn").niceScroll({
		background:"#012144",
		cursorcolor: "#015eb5",
		cursoropacitymin: 1,
		cursoropacitymax: 1,
		touchbehavior: false,
		cursorwidth: "8px",
		cursorborder: "0",
		cursorborderradius: "8px"
	});
})