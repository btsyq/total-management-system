$(function () {
	//蒙板
	$('.layer').width($('body').width());
	$('.layer').height($('body').height());
	$(window).resize(function (a) {
		$('.layer').width($('body').width());
		$('.layer').height($('body').height());
	});

	$('.new').on('click', function () {
		$('.layer').show();
		$('.addconfirm').show();
	});
	$('.limits').on('click', function () {
		$('.layer').show();
		$('.privileges').show();
	});
	$('.forbidden').on('click', function () {
		$('.layer').show();
		$('.delconfirm').show();
	});
	$('button.confirmbtn').on('click', function () {
		$('.layer').hide();
		$(this).parents('.popup').hide();
	});

	var setting = {
		check: {
			enable: true,
			chkboxType: { "Y": "ps", "N": "s" }
		},
		data: {
			simpleData: {
				enable: true
			}
		},
		view: {
			showIcon: false
		}
	};

	var zNodes = [
		{ id: 1, pId: 0, name: "随意勾选 1", open: true },
		{ id: 11, pId: 1, name: "随意勾选 1-1", open: true },
		{ id: 111, pId: 11, name: "随意勾选 1-1-1" },
		{ id: 112, pId: 11, name: "随意勾选 1-1-2" },
		{ id: 12, pId: 1, name: "随意勾选 1-2", open: true },
		{ id: 121, pId: 12, name: "随意勾选 1-2-1" },
		{ id: 122, pId: 12, name: "随意勾选 1-2-2" },
		{ id: 2, pId: 0, name: "随意勾选 2", checked: true, open: true },
		{ id: 21, pId: 2, name: "随意勾选 2-1" },
		{ id: 22, pId: 2, name: "随意勾选 2-2", open: true },
		{ id: 221, pId: 22, name: "随意勾选 2-2-1", checked: true },
		{ id: 222, pId: 22, name: "随意勾选 2-2-2" },
		{ id: 23, pId: 2, name: "随意勾选 2-3" }
	];
	$.fn.zTree.init($("#treeDemo"), setting, zNodes);

	//获取选中节点
	var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
	var nodes = treeObj.getCheckedNodes(true);
	console.log(nodes);

	//自定义滚动条
		$(".table-roll,.inputallot").niceScroll({
		cursorcolor: "#015eb5",
		background:"#012144",
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
	},{
		pageCount:20
	});

})