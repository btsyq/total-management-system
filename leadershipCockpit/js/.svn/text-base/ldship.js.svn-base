$(function() {

	//	$('#team').show();
	//	$('#weekly').hide();
	//	$('#project').hide();
	//	$('#business').hide();

	$(".tb_list,.mtable>tbody,.cl_wrap,.weekly-table,.table_form").niceScroll({
		cursorcolor: "#0364e2",
		cursoropacitymin: 0.5,
		cursoropacitymax: 1,
		touchbehavior: false,
		cursorwidth: "8px",
		cursorborder: "0",
		cursorborderradius: "8px",
	});


	//左侧菜单
	$(".wl_in").mouseenter(function() {
		$(".wheel-menu").slideDown();
	});
	$(".wl_in").mouseleave(function() {
		$(".wheel-menu").slideUp();
	});
	$('.menu-group').on('click', function(ev) {
		ev.stopPropagation();
		$('.fanbtn[target = "'+ $(this).attr('target') +'"]').addClass('active').siblings().removeClass('active');
		$('#' + $(this).attr('target')).addClass('active').siblings().removeClass('active');
		if($(this).hasClass('main_g')){
			$(this).addClass('active').siblings().removeClass('active');
		}
	});

	//中间圆盘	
	$('.fanbtn:not(".fb5")').on('click', function(ev) {
		ev.stopPropagation();
		$(this).addClass('active').siblings().removeClass('active');
		$('.main_g[target = "'+ $(this).attr('target') +'"]').addClass('active').siblings().removeClass('active');
//		console.log($(this).attr('target'));
		$('#' + $(this).attr('target')).addClass('active').siblings().removeClass('active');
		$('.wheel_wrap').addClass('wheel_pull');
		$('.wheel_layer').addClass('wheel_layer_pull');
		$('.ct_bg_1').fadeOut();
		$('.ct_bg_2').fadeIn();
		$('.w_star').fadeOut();
		$('.table_wrap').show().addClass('table_ani');
		setTimeout(function() {
			$('.wl_in').show();
		}, 500);
	})

	$('.wl_in').on('click', function() {
		$('.wl_in').hide();
		$('.ct_bg_1').fadeIn();
		$('.ct_bg_2').fadeOut();
		$('.w_star').fadeIn();
		$('.table_wrap').fadeOut('fast', function() {
			$(this).removeClass('table_ani');
		})

		$(".wheel-menu").css("display", "none");
		if($('.wheel_wrap').hasClass('wheel_pull')) {
			$('.wheel_wrap').removeClass('wheel_pull');
			$('.wheel_layer').removeClass('wheel_layer_pull');
		}
	})

	//select下拉框
	function selectchange(id, options, encoding) {
		let _this = $(id + '.selblock');
		let oplist = '';

		$.each(options, function(index, item) {
			if(encoding) {
				oplist += ('<li encoding="' + encoding[index] + '">' + item + '</li>');
			} else {
				oplist += ('<li>' + item + '</li>');
			}
		})
		_this.find('ul').append(oplist);

		_this.on('click', function(ev) {
			ev.stopPropagation();
			_this.toggleClass('active');
			$('.selblock').not(id + '.selblock').find('.selop').slideUp();
			_this.find('.selop').slideToggle('fast');
		})
		_this.find('li').on('click', function() {
			let selon = _this.find('.selon');
			//		console.log($(this).attr('encoding'));
			selon.text($(this).text()).attr('keyw', $(this).attr('encoding'));
			if(selon.hasClass('norm')) {
				selon.removeClass('norm');
			}
		})
	}

	//页面跳转
	function paging(id, rownum, datanum, topage) {
		let _this = $(id + ' .tb_page');
		let pagenow = 0;
		let pagenum = Math.ceil(rownum / datanum) - 1;

		_this.find('.datatot').text(rownum);
		pagego();

		_this.find('.page_row').unbind().on('click', function() {
			$(this).children('ul').slideToggle('fast');
		})
		_this.find('.page_row li').unbind().on('click', function() {
			_this.find('.page_row>span').text($(this).text());
			datanum = $(this).text();
			pagenow = 0;
			pagenum = parseInt(rownum / datanum);
			_this.find('.rownum').val(1);
			pagego();
		})

		_this.find('.page_go').unbind().on('click', function() {
			let pageipt = parseInt(_this.find('.rownum').val() - 1);
			if(_this.find('.rownum').val() == '') {
				pageipt = 1;
			}
			if(pageipt > pagenum) {
				alert('页码超出范围');
			} else {
				pagenow = pageipt;
				pagego();
			}

		})

		_this.find('.p_nxt').unbind().on('click', function() {
			pagenow += 1;
			if(pagenow >= pagenum) {
				pagenow = pagenum;
			}
			pagego();
		})

		_this.find('.p_pre').unbind().on('click', function() {
			pagenow -= 1;
			if(pagenow <= 0) {
				pagenow = 0;
			}
			pagego();
		})

		function pagego() {
			console.log(datanum + '--' + pagenow);
			topage(datanum, pagenow);
			if(pagenow == pagenum) {
				_this.find('.p_nxt').addClass('lock');
				_this.find('.p_pre').removeClass('lock');
				if((pagenow * datanum + 1) == rownum) {
					_this.find('.datanum').text(rownum);
				} else {
					_this.find('.datanum').text((pagenow * datanum + 1) + '-' + rownum);
				}

				if(pagenow == 0) {
					_this.find('.p_pre').addClass('lock');
				}

			} else if(pagenow == 0) {
				_this.find('.p_nxt').removeClass('lock');
				_this.find('.p_pre').addClass('lock');
				_this.find('.datanum').text((pagenow * datanum + 1) + '-' + (pagenow + 1) * datanum);

			} else {
				_this.find('.p_nxt').removeClass('lock');
				_this.find('.p_pre').removeClass('lock');
				_this.find('.datanum').text((pagenow * datanum + 1) + '-' + (pagenow + 1) * datanum);
			}
		}
	}

//团队页面js*******************	

	//搜索框变化	
	$('#team .slidedown').on('click', function() {
		$('#team .searchblock').toggleClass('searchblock_show');
		$('#team .sldlogo').toggleClass('sldlogo_r');
		$('#team .s_block1').toggleClass('s_block1_s');
		$('#team .s_block2').toggleClass('s_block2_s');
		$('#team .s_toggle').toggle();
	})

	//表格菜单
	$('#team .checkmenu').on('click', function() {
		$('#team .cm_list').slideToggle('fast');
		$('#team .cm_logo').toggleClass('cm_logo_on');
	})

	//select下拉框

	selectchange('#industry_tag', ['全部', '地税', '国税', '审计'], ['se1', 'se2', 'se3', 'se4']);
	selectchange('#position', ['总监', '经理'], ['se1', 'se2', 'se3', 'se4']);
	selectchange('#station', ['全部', '地税', '国税', '审计'], ['se1', 'se2', 'se3', 'se4']);
	selectchange('#ability', ['全部', '地税', '国税', '审计'], ['se1', 'se2', 'se3', 'se4']);
	selectchange('#edubg', ['全部', '地税', '国税', '审计'], ['se1', 'se2', 'se3', 'se4']);
	selectchange('#major', ['全部', '地税', '国税', '审计'], ['se1', 'se2', 'se3', 'se4']);
	selectchange('#experience', ['全部', '地税', '国税', '审计'], ['se1', 'se2', 'se3', 'se4']);
	selectchange('#location', ['实际工作地', '劳动关系地', '社保所在地', '户口所在地', '现在地', '户籍所在地'], ['se1', 'se2', 'se3', 'se4']);

	//点击重置按钮
	$('#team .btn_reset').on('click', function() {
		$('#team .selon').text('请选择').attr('keyw', null).addClass('norm');
		$('#team #s_province').removeClass('active');
		$('#team #s_city').removeClass('active');
		$('#team #s_county').removeClass('active');
		$('#team #team_search').val('');
		_init_area();
	})

	//页面跳转
	paging('#team', 85, 20, function(x, y) {
		console.log(x);
		console.log(y);
	});

	//列表列选择
	$('#team .cm_list label').on('click', function() {
		if($(this).siblings('input')[0].checked) {
			$('#team_table').width($('#team_table').width() - 100);
		} else {
			$('#team_table').width($('#team_table').width() + 100);
		}
	})

	//地区选择联动
	_init_area();
	$('#team .s_block3>select').on('change', function() {
		$(this).addClass('active');
	})

	//气泡弹出
	$('.bubble_td').hover(function(ev) {
		$('.bubble_wd').fadeIn('fast').append($(this).attr('bubble'));
		$(this).on('mousemove', function(ev) {
			$('.bubble_wd').css({
				left: ev.pageX + 10,
				top: ev.pageY - 30
			})
		})
	}, function() {
		$('.bubble_wd').fadeOut('fast').html('');
	})
	
//********************


//周报页面js*************

	//日历组件
	; !function () {
		laydate.skin('yalan');
		laydate({
			elem: '#weekly_date'
		})
	}();
	
	paging('#weekly', 85, 20, function(x, y){
		console.log(x);
		console.log(y);
	});
	
	//未交周报弹出层
	$('.un_weekly').on('click', function(){
		$('.un_weekly_layer').show();
		$('.un_weekly_box').show();
	});
	//关闭弹出框
	$('.pop-close').on('click', function(){
		$('.un_weekly_box').hide();
		$('.un_weekly_layer').hide();
	});
	
//*********************


//项目页面js**************
	; !function () {
		laydate.skin('yalan');
		laydate({
			elem: '#projec_date'
		})
	}();
	
	$('#project .slidedown').on('click', function () {
		$('#project .searchblock').toggleClass('searchblock_show');
		$('#project .sldlogo').toggleClass('sldlogo_r');
		if ($("#project .s_time").css("display") == "none") {
			$("#project .s_time").show();
		} else {
			$("#project .s_time").hide();
		}
	})
	$('#project .checkmenu').on('click', function () {
		$('#project .cm_list').slideToggle('fast');
		$('#project .cm_logo').toggleClass('cm_logo_on');
	})

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
		$('.project_layer').show();
		$('.project_box').show();
	})
	//头部点击显示
	$('.summarize').on('click', function () {
		$(this).addClass('active').siblings().removeClass('active');
		$(".pre-summarize").css("display", "block");
		$(".pre-resources").css("display", "none");
		$(".pre-construction").css("display", "none");
	})
	$(".resources").on('click', function () {	
		$(this).addClass('active').siblings().removeClass('active');
		$(".pre-resources").css("display", "block");
		$(".pre-summarize").css("display", "none");
		$(".pre-construction").css("display", "none");
	});
	$(".construction").on('click', function () {
		$(this).addClass('active').siblings().removeClass('active');
		$(".pre-construction").css("display", "block");
		$(".pre-summarize").css("display", "none");
		$(".pre-resources").css("display", "none");
	});


	//关闭弹出框
	$('.pop-close').on('click', function(){
		$('.pop-box').hide();
		$('.layer').hide();
	});

//*********************



//商机页面js****************
	//搜索框变化	
	$('#business .slidedown').on('click', function(){
		$('#business .searchblock').toggleClass('searchblock_show');
		$('#business .sldlogo').toggleClass('sldlogo_r');
		$('#business .s_block1').toggleClass('s_block1_s');
		$('#business .s_block2').toggleClass('s_block2_s');
        $('#business .s_toggle').toggle();
	})
	
	
	//表格菜单
	$('#business .checkmenu').on('click', function(){
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
	$('#business .cm_list label').on('click', function(){
		if($(this).siblings('input')[0].checked){
			$('#team_table').width($('#team_table').width() - 100);
		}else{
			$('#team_table').width($('#team_table').width() + 100);
		}
	})
	
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
	
	//地区选择联动
	_init_area2();
	$('#business select').on('change', function() {
		$(this).addClass('active');
	})
//***********************


})