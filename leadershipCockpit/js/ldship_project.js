$(function () {
	//日历组件
	; !function () {
		laydate.skin('yalan');
		laydate({
			elem: '#demo'
		})
	}();

	$('#team').hide();
	$('#weekly').hide();
	$('#project').show();
	$('#business').hide();




	$('.slidedown').on('click', function () {
		if ($(".s_time").css("display") == "none") {
			$('.searchblock').css('height', '175px');
			$(".s_time").show();
		} else {
			$('.searchblock').css('height', '130px');
			$(".s_time").hide();
		}
	})
	$('.checkmenu').on('click', function () {
		$('.cm_list').slideToggle('fast');
		$('.cm_logo').toggleClass('cm_logo_on');
	})

//	select
	selectchange('#project_type', ['实施项目','自研项目','任务单']);
	selectchange('#implementation_department', ['研发一部','研发二部','研发三部','研发四部']);
	selectchange('#item_status', ['工作中','挂起','非正常终止','实施结项','财务结项']);
	selectchange('#timesel', ['项目整体计划起止时间','项目实际起止时间']);
	selectchange('#select_task', ['公司会议','公司培训']);

//页面跳转
	paging('#project', 85, 20, function(x, y){
		console.log(x);
		console.log(y);
	});


	//名称弹出层
	$('.project_name').on('click', function() {
		$('.layer').css('display','block');
		$('.pop-box').css('display','block');
	})
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
	//商务弹出层
	$('.project_business').on('click', function(){
		$('.layer1').css('display','block');
		$('.pop-business').css('display','block');
	});
	//头部点击显示
	$('.employee').on('click', function () {
		$(".employee-message").css("display", "block");
		$(".minute-message").css("display", "none");
	})
	$(".minute").on('click', function () {	
		$(".minute-message").css("display", "block");
		$(".employee-message").css("display", "none");
	});

	//关闭弹出框
	$('.pop-close').on('click', function(){
		$('.pop-box').hide();
		$('.layer').hide();
	});
	$('.pop-close1').on('click', function(){
		$('.layer1').hide();
		$('.pop-business').hide();
	});

	
})
