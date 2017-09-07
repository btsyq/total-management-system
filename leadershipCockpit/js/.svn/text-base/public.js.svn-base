$(".mtable>tbody,.tb_list,.cl_wrap,.weekly-table,.table_form").niceScroll({
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

//中间圆盘	
$('.fanbtn:not(".fb5")').on('click', function(ev) {
	ev.stopPropagation();
	$(this).addClass('active').siblings().removeClass('active');
	$('.wheel_wrap').addClass('wheel_pull');
	$('.wheel_layer').addClass('wheel_layer_pull');
	$('.ct_bg_1').fadeOut();
	$('.ct_bg_2').fadeIn();
	$('.table_wrap').show().addClass('table_ani');
	setTimeout(function() {
		$('.wl_in').show();
	}, 500);
})

$('.wl_in').on('click', function() {
	$('.wl_in').hide();
	$('.ct_bg_1').fadeIn();
	$('.ct_bg_2').fadeOut();
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
		if(encoding){
			oplist += ('<li encoding="'+ encoding[index] +'">' + item + '</li>');
		}else{
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
	let pagenum = parseInt(rownum / datanum);

	_this.find('.datatot').text(rownum);
	pagego();

	_this.find('.page_row').on('click', function() {
		$(this).children('ul').slideToggle('fast');
	})
	_this.find('.page_row li').on('click', function() {
		_this.find('.page_row>span').text($(this).text());
		datanum = $(this).text();
		pagenow = 0;
		pagenum = parseInt(rownum / datanum);
		_this.find('.rownum').val(1);
		pagego();
	})

	_this.find('.page_go').on('click', function() {
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

	_this.find('.p_nxt').on('click', function() {
		pagenow += 1;
		if(pagenow >= pagenum) {
			pagenow = pagenum;
		}
		pagego();
	})

	_this.find('.p_pre').on('click', function() {
		pagenow -= 1;
		if(pagenow <= 0) {
			pagenow = 0;
		}
		pagego();
	})

	function pagego() {
		//			console.log(datanum +'--'+ pagenow);
		topage(datanum,pagenow);
		if(pagenow == pagenum) {
			_this.find('.p_nxt').addClass('lock');
			_this.find('.p_pre').removeClass('lock');
			if((pagenow * datanum + 1) == rownum) {
				_this.find('.datanum').text(rownum);
			} else {
				_this.find('.datanum').text((pagenow * datanum + 1) + '-' + rownum);
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