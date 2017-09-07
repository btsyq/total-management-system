$(function(){
	
	
	$('#team').show();
	$('#weekly').hide();
	$('#project').hide();
	$('#business').hide();
	


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
	
	selectchange('#industry_tag', ['全部','地税','国税','审计'], ['se1','se2','se3','se4']);
	selectchange('#position', ['总监','经理'], ['se1','se2','se3','se4']);
	selectchange('#station', ['全部','地税','国税','审计'], ['se1','se2','se3','se4']);
	selectchange('#ability', ['全部','地税','国税','审计'], ['se1','se2','se3','se4']);
	selectchange('#edubg', ['全部','地税','国税','审计'], ['se1','se2','se3','se4']);
	selectchange('#major', ['全部','地税','国税','审计'], ['se1','se2','se3','se4']);
	selectchange('#experience', ['全部','地税','国税','审计'], ['se1','se2','se3','se4']);
	selectchange('#location', ['实际工作地','劳动关系地','社保所在地','户口所在地','现在地','户籍所在地'], ['se1','se2','se3','se4']);
	


//点击重置按钮
	$('.btn_reset').on('click', function(){
		$('.selon').text('请选择').attr('keyw', null).addClass('norm');
		$('#s_province').val('省份').removeClass('active');
		$('#s_city').val('地级市').removeClass('active');
		$('#s_county').val('市、县级市').removeClass('active');
		$('#team_search').val('');
	})

//表格生成

//	function creattable(id, thead, tbody){
//		let th_str = '';
//		let tb_str = '';
//		$.each(thead, function(index, item) {
//			if(index == 0){
//				th_str += ('<th class="tbnum">'+ item +'</th>');
//			}else{
//				th_str += ('<th>'+ item +'</th>');
//			}
//		});
//		$(id + '>thead>tr').html(th_str);
//		
//		$.each(tbody, function(index, item) {
//			tb_str += '<tr>';
//			let tb_td_str = '';
//			$.each(item, function(idx, itm) {
//				if(idx == 0){
//					tb_td_str += ('<td class="tbnum">'+itm+'</td>');
//				}else{
//					tb_td_str += ('<td>'+itm+'</td>');
//				}
//			});
//			tb_str += (tb_td_str + '</tr>');
//		});
//		$(id + '>tbody').html(tb_str);
//	}
	
//页面跳转
	paging('#team', 85, 20, function(x, y){
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
	$('.s_block3>select').on('change', function(){
		$(this).addClass('active');
	})
	
	
//气泡弹出
	$('.bubble_td').hover(function(ev){
		$('.bubble_wd').fadeIn('fast').append($(this).attr('bubble'));
		$(this).on('mousemove', function(ev){
			$('.bubble_wd').css({
				left: ev.pageX + 10,
				top: ev.pageY - 30
			})
		})
	},function(){
		$('.bubble_wd').fadeOut('fast').html('');
	})

})
