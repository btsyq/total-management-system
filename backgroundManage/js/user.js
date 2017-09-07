$(function () {
	//蒙板
	$('.layer').width($('body').width());
	$('.layer').height($('body').height());
	$(window).resize(function (a) {
		$('.layer').width($('body').width());
		$('.layer').height($('body').height());
	});

	$(".table-roll").niceScroll({
		cursorcolor: "#015eb5",
		background: "#012144",
		cursoropacitymin: 1,
		cursoropacitymax: 1,
		touchbehavior: false,
		cursorwidth: "8px",
		cursorborder: "0",
		cursorborderradius: "8px"
	});

	//分页
	$('.page').createPage(function (n) {
		console.log(n);
	}, {
			pageCount: 20
		});
	//修改弹窗
	$(".amend").on('click', function () {
		$('.layer').show();
		$('.addconfirm').show();
	});
	$('button.confirmbtn').on('click', function () {
		$('.layer').hide();
		$(this).parents('.popup').hide();
	});

})