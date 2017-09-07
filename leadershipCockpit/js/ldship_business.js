$(function(){
	
	
	$('#team').hide();
	$('#weekly').hide();
	$('#project').hide();
	$('#business').show();
	
	

//搜索框变化	
	$('.slidedown').on('click', function(){
		$('.searchblock').toggleClass('searchblock_show');
		$('.sldlogo').toggleClass('sldlogo_r');
		$('.s_block1').toggleClass('s_block1_s');
		$('.s_block2').toggleClass('s_block2_s');
        $('.s_toggle').toggle();
	})
	
//表格菜单
	$('.checkmenu').on('click', function(){
		$('.cm_list').slideToggle('fast');
		$('.cm_logo').toggleClass('cm_logo_on');
	})
	
//select下拉框
	
	selectchange('#source_of_business', ['全部','地税','国税','审计']);
	selectchange('#business_category', ['总监','经理']);
	selectchange('#business_level', ['全部','地税','国税','审计']);

	
//页面跳转
	paging('#business', 85, 20, function(x, y){
		console.log(x);
		console.log(y);
	});	
	
//列表列选择
	$('#team .cm_list label').on('click', function(){
		if($(this).siblings('input')[0].checked){
			$('#team_table').width($('#team_table').width() - 100);
		}else{
			$('#team_table').width($('#team_table').width() + 100);
		}
	})
	
//地区选择联动
	_init_area();	
	
//提示框
	$('.level_help').on('click', function(){
		$('.level_msg').fadeToggle('fast');
		$(this).toggleClass('active');
	})

//日历组件
	; !function () {
		laydate.skin('yalan');
		laydate({
			elem: '#b_date'
		})
	}();

	//弹出层
	$('.plderive_btn').on('click', function(){
		$('.layer').css('display','block');
		$('.batch_pop').css('display','block');
	});
	$('.pop-close').on('click', function(){
		$('.layer').css('display','none');
		$('.batch_pop').css('display','none');
	});
	//下拉框
	selectchange('#batch_pop1', ['未审批','同意','拒绝']);

})
