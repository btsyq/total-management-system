$(function() {
	//layer样式
	$('.layer').width($(document).width());
	$('.layer').height($(document).height());
	
	
	//自定义滚动条样式
	$(".crmain,.menus,.individual_mn").niceScroll({
		cursorcolor: "#015eb5",
		background:"#012144",
		cursoropacitymin: 1,
		cursoropacitymax: 1,
		touchbehavior: false,
		cursorwidth: "8px",
		cursorborder: "0",
		cursorborderradius: "8px"
	});
	
	
	//新建功能
	
	
	$('button.new').on('click', function(){
		$('.newcon').show().siblings().hide();
		$('.btnnew').show().siblings().hide();
	});
	$('.return').on('click', function(){
		$("#individual").trigger("click");
	})
	
	$('.clearicon').on('click', function(){
		$(this).parent().children('input').val('');
	});


	function newtodo(thisdom){
		var newdom = $('<div class="moreinput"><input type="text"  /> <i class="iconfont addicon">&#xe501;</i> <i class="iconfont minicon delicon">&#xe61a;</i></div>');
		thisdom.parents('.nli').append(newdom);
		newdom.children('.addicon').on('click', function(){
			newtodo($(this));
		});
		newdom.children('.delicon').on('click', function(){
			$(this).parent().remove();
		});
	}
	$('.addicon').on('click', function(){
		newtodo($(this));
	});
	

	

	
	//左边栏添加
	
	//内部栏添加
	nbmenu();
	function nbmenu(){
//		var zNodes =[
//			{ id:1, pId:0, name:"父节点1 - 展开"},
//			{ id:11, pId:1, name:"父节点11 - 折叠哈萨克父级看撒父级阿斯利康就是大"},
//			{ id:111, pId:11, name:"叶子节点111"},
//			{ id:112, pId:11, name:"叶子节点112"},
//			{ id:113, pId:11, name:"叶子节点113"},
//			{ id:114, pId:11, name:"叶子节点114"},
//			{ id:1141, pId:11, name:"叶子节点1141"},
//			{ id:11411, pId:11, name:"叶子节点11411"},
//			{ id:114111, pId:11, name:"叶子节点114111"},
//			{ id:12, pId:1, name:"父节点12 - 折叠"},
//			{ id:121, pId:12, name:"叶子节点121"},
//			{ id:122, pId:12, name:"叶子节点122"},
//			{ id:123, pId:12, name:"叶子节点123"},
//			{ id:124, pId:12, name:"叶子节点124"},
//			{ id:13, pId:1, name:"父节点13 - 没有子节点"},
//			{ id:2, pId:0, name:"父节点2 - 折叠"},
//			{ id:21, pId:2, name:"父节点21 - 展开"},
//			{ id:211, pId:21, name:"叶子节点211"},
//			{ id:212, pId:21, name:"叶子节点212"},
//			{ id:213, pId:21, name:"叶子节点213"},
//			{ id:214, pId:21, name:"叶子节点214"},
//			{ id:22, pId:2, name:"父节点22 - 折叠"},
//			{ id:221, pId:22, name:"叶子节点221"},
//			{ id:222, pId:22, name:"叶子节点222"},
//			{ id:223, pId:22, name:"叶子节点223"},
//			{ id:224, pId:22, name:"叶子节点224"},
//			{ id:23, pId:2, name:"父节点23 - 折叠"},
//			{ id:231, pId:23, name:"叶子节点231"},
//			{ id:232, pId:23, name:"叶子节点232"},
//			{ id:233, pId:23, name:"叶子节点233"},
//			{ id:234, pId:23, name:"叶子节点234"},
//			{ id:3, pId:0, name:"父节点3 - 没有子节点"}
//		];

		var zNodesdata = {"status":true,"message":"success","errorInfo":"","data":[{"dempartMentID":670869647114347,"dempartMentName":"九次方大数据","path":"00000001"},{"dempartMentID":5232995931481197930,"dempartMentName":"九连环基础平台研发","path":"000000010011"},{"dempartMentID":-683691343129459380,"dempartMentName":"北京研发中心","path":"0000000100110002"},{"dempartMentID":8271387954476695711,"dempartMentName":"平台产品研发一部","path":"00000001001100020008"},{"dempartMentID":5824806306907244757,"dempartMentName":"应用研发二部","path":"000000010011000200080001"},{"dempartMentID":4362813060565782491,"dempartMentName":"应用研发一部","path":"000000010011000200080002"},{"dempartMentID":8353266410601532337,"dempartMentName":"技术架构部","path":"000000010011000200080003"},{"dempartMentID":-6104476235218204356,"dempartMentName":"前端研发","path":"000000010011000200080004"},{"dempartMentID":6324868185847908719,"dempartMentName":"应用研发三部","path":"000000010011000200080005"}]};
		var zNodes = zNodesdata.data;
		var menushtm = '';
		for(var i = 0; i < zNodes.length; i++){
			menushtm += '<li id="'+ zNodes[i].dempartMentID +'" path="'+ zNodes[i].path +'">'+ zNodes[i].dempartMentName +'(<b>123</b>)</li>';
		}
		
		$('.interior_mn').append(menushtm);
		$('.interior_mn li:eq(0)').addClass('active');
		
		$('.interior_mn li').each(function(){
			var tindent = 28;
			var _thisli = $(this);
			var pathlength = _thisli.attr('path').length/4 - 1;
			tindent = tindent*(pathlength - 1);
			_thisli.css({textIndent : tindent});
			if(pathlength > 1){
				_thisli.hide();
			};
			_thisli.on('click', function(){
				_thisli.addClass('active').siblings().removeClass('active');
				
				if(_thisli.next().is(':hidden')){
					_thisli.nextAll('li').each(function(){			
						if($(this).attr('path').length/4-1 == pathlength){
							return false;
						};
						if($(this).attr('path').length/4-1 == (pathlength + 1)){
							$(this).slideDown();
						}
					})
				}else{
					_thisli.nextAll('li').each(function(){
						if($(this).attr('path').length/4-1 <= (pathlength)){
							return false;
						};
						$(this).slideUp();
					})
				}
				
			})
		})
	};
	
	//个人栏添加
	grmenu();
	function grmenu(){
		var geren = 
		'<li class="active">\
			<span>全部联系人</span>(<b>123</b>)\
		</li>\
		<li>\
			<span>未分组联系人</span>(<b>123</b>)\
		</li>';
		
		for(var i = 0; i < 5; i++ ){
			geren += 
			'<li>\
				<span>项目一组</span>(<b>123</b>)\
				<i class="delete iconfont">&#xe614;</i>\
				<i class="compile iconfont">&#xe77d;</i>\
			</li>'
		};
		
		geren += 
		'<li class="newliwrap">\
			<div class="newli">\
				<input type="text" placeholder="输入文字..." />\
				<i title="删除" class="iconfont cross">&#xe619;</i>\
				<i title="确认修改" class="iconfont tick">&#xe615;</i>\
			</div>\
		</li>';
		

		$('.individual_mn').append(geren);
		
		//新建修改菜单
		$('.newcst').on('click', function(){
			$('.newliwrap').show();
		});
		$('.newliwrap i.cross').on('click', function(){
			$('.newliwrap').hide();
		});
		
		//点击修改菜单
		$('.compile').on('click', function(){
			var newshd =  $('<div class="newli"><input type="text" placeholder="输入文字..." /><i title="取消" class="iconfont cross">&#xe619;</i><i title="确认修改" class="iconfont tick">&#xe615;</i></div>');
			$(this).parent().append(newshd);
			newshd.children('.cross').on('click', function(){
				newshd.remove();
			});
			newshd.children('.tick').on('click', function(){
				var newnm = newshd.children('input').val();
				if(newnm != ''){
					newshd.parents('li').children('span').html(newnm);
				}
				newshd.remove();
			});
		});
		
		//点击切换效果
		$('.individual_mn li').on('click', function(){
			$(this).addClass('active').siblings().removeClass('active');
		})
		
	}
	
	
	


	//全选与反选
	$('#checkbox0').on('click', function() {
		if($(this).is(':checked')) {
			$('.crmain input[type=checkbox]').each(function() {
				if(!$(this)[0].checked) {
					$(this).click();
				}
			})
		} else {
			$('.crmain input[type=checkbox]').each(function() {
				if($(this)[0].checked) {
					$(this).click();
				}
			})
		}
	})

	//菜单栏切换
	$('.tabsb').on('click', function() {
		
		$('.tabsb').removeClass('active');
		$(this).addClass('active');
		var adr = $(this).attr('id');

		var mnadr = '.' + adr + '_mn';
		$(mnadr).show().siblings().hide();

		var tbadr = '.' + adr + '_tb';
		$(tbadr).show().siblings().hide();
		
//		console.log(adr);
		if(adr == 'individual'){
			$('.btnwrap').show().siblings().hide();
			$('.newcst').show();
		}else{
			$('.btnwrapmm').show().siblings().hide();
			$('.newcst').hide();
		}
	})
	
	//移入组
	$('.movebtn').on('click', function(){
		$('.movegroup').toggle();
	});
	
	
	var table1 = {"status":true,"message":"success","errorInfo":"","data":[{"phoneNumber":null,"dempartMentName":"应用研发一部","userName":"谢建花","email":"xiejianhua@jusfoun.com"},{"phoneNumber":null,"dempartMentName":"应用研发一部","userName":"孙国安","email":"sga@jusfoun.com"},{"phoneNumber":null,"dempartMentName":"应用研发一部","userName":"尚焕妮","email":"shn@jusfoun.com"},{"phoneNumber":null,"dempartMentName":"应用研发一部","userName":"李贺霞","email":"lihx@jusfoun.com"},{"phoneNumber":null,"dempartMentName":"应用研发一部","userName":"闫帅兵","email":"ysb@jusfoun.com"},{"phoneNumber":null,"dempartMentName":"应用研发一部","userName":"于海滨","email":"yuhaibin@jusfoun.com"},{"phoneNumber":null,"dempartMentName":"应用研发一部","userName":"姜虎城","email":"jhc@jusfoun.com"},{"phoneNumber":null,"dempartMentName":"应用研发一部","userName":"侯德杰","email":"hdj@jusfoun.com"},{"phoneNumber":null,"dempartMentName":"应用研发一部","userName":"赖飞","email":"lf@jusfoun.com"},{"phoneNumber":null,"dempartMentName":"应用研发一部","userName":"刘蒙蒙","email":"lmm@jusfoun.com"},{"phoneNumber":null,"dempartMentName":"应用研发一部","userName":"任羲光","email":"rxg@jusfoun.com"},{"phoneNumber":null,"dempartMentName":"应用研发一部","userName":"谢云龙","email":"xyl@jusfoun.com"},{"phoneNumber":null,"dempartMentName":"应用研发一部","userName":"李景良","email":"ljl@jusfoun.com"},{"phoneNumber":null,"dempartMentName":"应用研发一部","userName":"于海滨","email":"yuhaibin@jusfoun.com"},{"phoneNumber":null,"dempartMentName":"应用研发一部","userName":"钟佳文","email":"zjw@jusfoun.com"}]};
	var table1data = table1.data;
	
	var table2 = {"status":true,"message":"success","errorInfo":"","data":[{"linkmanemail":"","linkmanname":"xx","linkmanmobile":"13244444444","customername":"北京测试企业004","linkmanwx":null},{"linkmanemail":"","linkmanname":"x","linkmanmobile":"13300998876","customername":"baby创建的客户1","linkmanwx":""},{"linkmanemail":"","linkmanname":"小明","linkmanmobile":"13288997639","customername":"baby创建的客户1","linkmanwx":null},{"linkmanemail":"","linkmanname":"王五","linkmanmobile":"13299887433","customername":"北京测试企业004","linkmanwx":null},{"linkmanemail":"","linkmanname":"小天","linkmanmobile":"13200098763","customername":"北京测试005","linkmanwx":null},{"linkmanemail":"","linkmanname":"你看看","linkmanmobile":"11222","customername":"流量监控看看","linkmanwx":null},{"linkmanemail":"","linkmanname":"自我学习","linkmanmobile":"2556","customername":"流量监控看看","linkmanwx":null},{"linkmanemail":"","linkmanname":"0324测试客户1联系人1","linkmanmobile":"13528078452","customername":"0324测试客户1","linkmanwx":null},{"linkmanemail":"","linkmanname":"0323测试客户3联系人1","linkmanmobile":"520985742","customername":"0323测试客户3","linkmanwx":null}]};
	var table2data = table2.data;
	
	var table3 = {"status":true,"message":"success","errorInfo":"","data":[{"linkManName":"李建明","companyName":"九次方","birthday":"1993.4.25","post":"java开发","remark":"无","grouuName":"项目一组","telephone":["18798913789"],"webChart":["38492579"],"email":["38492579@qq.com"],"address":["北京"]},{"linkManName":"大发","companyName":"九次方","birthday":"1898.9.2","post":"前段","remark":"无","grouuName":"项目四组,项目五组","telephone":null,"webChart":null,"email":null,"address":null}]};
	var table3data = table3.data;
	
	createtb1(table1data);
	createtb2(table2data);
	createtb3(table3data);
	
	
	function createtb1(data){
		var tb1 =
			'<table class="interior_tb">\
				<tr>\
					<td>\
						<div class="mycheck">\
							<input type="checkbox" id="checkbox0">\
							<label for="checkbox0"></label>\
						</div>\
					</td>\
					<td>部门</td>\
					<td>姓名</td>\
					<td>电话</td>\
					<td>邮箱</td>\
					<td>微信</td>\
				</tr>';
		for(var i = 0; i < data.length; i++) {
			tb1 +=
				'<tr>\
					<td>\
						<div class="mycheck">\
							<input type="checkbox" id="checkbox1">\
							<label for="checkbox1"></label>\
						</div>\
					</td>\
					<td>'+ data[i].dempartMentName +'</td>\
					<td>'+ data[i].userName +'</td>\
					<td>'+ data[i].phoneNumber +'</td>\
					<td>'+ data[i].email +'</td>\
					<td>'+ data[i].phoneNumber +'</td>\
				</tr>';
		};
		tb1 += '</table>';
		$('.crmain').append(tb1);
	}
	function createtb2(data){
		var tb2 =
			'<table class="external_tb">\
				<tr>\
					<td>\
						<div class="mycheck">\
							<input type="checkbox" id="checkbox14">\
							<label for="checkbox14"></label>\
						</div>\
					</td>\
					<td>公司名称</td>\
					<td>姓名</td>\
					<td>电话</td>\
					<td>邮箱</td>\
					<td>微信</td>\
				</tr>';
		for(var i = 0; i < data.length; i++) {
			tb2 +=
				'<tr>\
					<td>\
						<div class="mycheck">\
							<input type="checkbox" id="checkbox15">\
							<label for="checkbox15"></label>\
						</div>\
					</td>\
					<td>'+ data[i].customername +'</td>\
					<td>'+ data[i].linkmanname +'</td>\
					<td>'+ data[i].linkmanmobile +'</td>\
					<td>'+ data[i].linkmanemail +'</td>\
					<td>'+ data[i].linkmanwx +'</td>\
				</tr>';
		};
		tb2 += '</table>';
		$('.crmain').append(tb2);
	}
	function createtb3(data){

		var tb3 =
			'<table class="individual_tb">\
				<tr>\
					<td>\
						<div class="mycheck">\
							<input type="checkbox" id="checkbox16">\
							<label for="checkbox16"></label>\
						</div>\
					</td>\
					<td>姓名</td>\
					<td>电话</td>\
					<td>邮箱</td>\
					<td>微信</td>\
					<td>组</td>\
				</tr>';
		for(var i = 0; i < data.length; i++) {
			tb3 +=
				'<tr>\
					<td>\
						<div class="mycheck">\
							<input type="checkbox" id="checkbox17">\
							<label for="checkbox17"></label>\
						</div>\
					</td>\
					<td>'+ data[i].linkManName +'</td>\
					<td>'+ data[i].telephone +'</td>\
					<td>'+ data[i].email +'</td>\
					<td>'+ data[i].webChart +'</td>\
					<td>'+ data[i].grouuName +'</td>\
				</tr>';
		};
		tb3 += '</table>';
		$('.crmain').append(tb3);
	}	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})