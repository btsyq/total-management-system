$(function(){
	//日历组件
	; !function () {
		laydate.skin('yalan');
		laydate({
			elem: '#demo'
		})
	}();
	
	$('#team').hide();
	$('#weekly').show();
	$('#project').hide();
	$('#business').hide();


	
	
	$('.slidedown').on('click', function(){
		$('.searchblock').toggleClass('searchblock_show');
		$('.sldlogo').toggleClass('sldlogo_r');
		$('.s_block1').toggleClass('s_block1_s');
		$('.s_block2').toggleClass('s_block2_s');
        $('.s_toggle').toggle();
	})
	$('.checkmenu').on('click', function(){
		$('.cm_list').slideToggle('fast');
		$('.cm_logo').toggleClass('cm_logo_on');
	})
	


//页面跳转
	paging('#weekly', 85, 20, function(x, y){
		console.log(x);
		console.log(y);
	});
	
	

	//未交周报弹出层
	$('.un_weekly').on('click', function(){
		$('.layer').css('display','block');
		$('.pop-box').css('display','block');
	});
	//关闭弹出框
	$('.pop-close').on('click', function(){
		$('.pop-box').hide();
		$('.layer').hide();
	});
})
