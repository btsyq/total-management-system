$(function(){
	//头部点击显示
	$('.employee').on('click', function () {
		$(".employee-message").css("display", "block");
		$(".minute-message").css("display", "none");
	})
	$(".minute").on('click', function () {	
		$(".minute-message").css("display", "block");
		$(".employee-message").css("display", "none");
	});
	$('.pop-close').on('click', function(){
		$('.pop-box').hide();
	});
})
