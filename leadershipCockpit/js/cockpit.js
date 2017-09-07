$(function(){
	//头部点击显示
	$('.summarize').on('click', function () {
		$(".pre-summarize").css("display", "block");
		$(".pre-resources").css("display", "none");
		$(".pre-construction").css("display", "none");
	})
	$(".resources").on('click', function () {	
		$(".pre-resources").css("display", "block");
		$(".pre-summarize").css("display", "none");
		$(".pre-construction").css("display", "none");
	});
	$(".construction").on('click', function () {
		$(".pre-construction").css("display", "block");
		$(".pre-summarize").css("display", "none");
		$(".pre-resources").css("display", "none");
	});
	$('.pop-close').on('click', function(){
		$('.pop-box').hide();
	});
})
