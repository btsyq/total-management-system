$(function() {
	
//	var basePath = "http://localhost:8080/portal/";
//	function getData(url,callback){
//		var value=null;
//		$.ajax({
//				url:url,
//				type:"GET",
//				dataType:"json",
//				success:function(val){
//					value=val;
//					callback(value)
//				},
//				error:function(error){
//					console.error(error)
//					return {};
//				}
//		});
//	}
//	
//	getData(basePath + "homepage/find",function(val){
//		console.log(val);
//	});
//

//头部添加链接
//	var headlink = {"status":true,"message":"success","errorInfo":"","data":[{"menuUrl":null,"menuName":"主系统"},{"menuUrl":"http://192.168.1.68:18080/jusfoun-esb/pc/ssoservice/ssologin?linkType=2&accesskey=n7VPtGsjcaJouUWLywJ5U4wWJaSNCDiWmGA2UBjHqphGWysN7BIr97FxP%2BoRK10yJ2ThQ39CFpkcuLd87m6uOruYMISXLXl4DL0c08oNrRcu0qwjOtng2oi0RC8HlDMdiA%2BJ%2BDzMkiIUSxcFvMDO5wenAh1OA%2B2345%2BfXS2yWhM%3D","menuName":"CRM"},{"menuUrl":"http://oa.9cfcf.com&accesskey=NMI6S2dthmQiSRUjOOys62%2Bi6tR1g9hWBmPLjBVyI2zqhlRkVZ39EVfy%2F57Ky5BbgefKh1Sxo5zbCgDiZNT4TowlIP0IRXgLjMTdmXiCROUoM7NGkyq5dvGm%2B2dQELFpMROGr%2BI7bbG%2F%2BlO0jUnaaUUnuwx%2FjuKIvhOYuGQ6PUI%3D","menuName":"OA"},{"menuUrl":"http://192.168.16.101:8080/teamwok&accesskey=vRWSqjXsacz3iWdH61ioPgJbnAAGVK7GlmYb0ukAMq8M4QMiyz%2FCrTvr%2BxWTMgjuqPGHHt%2BiGpJyd5JNOWoEvtN0XiDzSqvPR57%2BVP5HD4lniXP5kfAgFbdZlAB2519RGoWS4kjnZl5xyS3SF8xWYkYZXOB6479uby06r4ZOugM%3D","menuName":"teamwork"},{"menuUrl":"http://192.168.16.101:18080/bugfree&accesskey=GZngseiWIfdFS9aes66EosYneAEX54EP8%2F%2BUqfuFj64oya12s8bH5dOgLGGLPVRxxzlTn7e6SiBqydZCvuPeZJLR9Ye7N%2F3ltjAUiB1N4Sy0uOTJRB3hNGsjpPvekzfhSaTyze6zCnOk2UO5qDn6N%2BkTOVw5jP2NFQ0%2BASEE9R4%3D","menuName":"bugfree"},{"menuUrl":null,"menuName":"e-Leaning"}]};
//	var headlinks = headlink.data;
//	
//	for(var i = 0; i < headlinks.length; i++){
//		var linkname = headlinks[i].menuName;
//		console.log(linkname);
//		switch (linkname){
//			case 'OA':
//				$('.linkoa').attr('href', headlinks[i].menuUrl);
//				break;
//			case 'CRM':
//				$('.linkcrm').attr('href', headlinks[i].menuUrl);
//				break;
//			case 'teamwork':
//				$('.linkteamwork').attr('href', headlinks[i].menuUrl);
//				break;
//			case 'bugfree':
//				$('.linkbugfree').attr('href', headlinks[i].menuUrl);
//				break;
//			case 'e-Leaning':
//				$('.linkelearning').attr('href', headlinks[i].menuUrl);
//				break;
//		}
//	}




//添加链接
//	var linksdata = {"status":true,"message":"success","errorInfo":"","data":[{"menuUrl":"http://192.168.1.68:8090/jusfoun-esb/pc/ssoservice/ssologin?linkType=2&accesskey=U%2B8LJv1TwGPcv%2FRwVj7cvidL1Ej2MRuajQkcYSFWL1LOJobyzijLmiR8pB9l0A%2Bb2ElIPzItbnyrXiFG%2FN3Vibgp%2BXrAkRWvWSpZkwNW1IvrcBCmxMTfzunHf2Mk%2BLdiIIcbo2XWtMfNu686L4BKiV6Mp%2FjBaIylsHQIgWSobUo%3D","menuName":"商机"},{"menuUrl":"http://192.168.1.68:8090/jusfoun-esb/pc/ssoservice/ssologin?linkType=1&accesskey=TOwCizL%2F07BVM2jvn9hfAQ9rk1KOk3966hoeIT9PoMB4LBUCkNMA0jbhVE3Qz9EHVshn2QmCF7oDbodaJNF2bHb4QraSsgBwMgoY2eN5qdltjyIPnbDdenB2m7hpTSRxMzS5inaf7Zr99%2B1hDZB8S0ySUs4n5xOO8qywt6E4OTQ%3D","menuName":"客户"},{"menuUrl":"http://192.168.1.68:8090/teamwok/?&accesskey=GbXuY53O4nrjKSnwL8ZIDCMYMGdhSBi0xynOCcyYMtn1pj%2FhrOn89NgcFxJqLc84%2FnGil2k6s7kzBDGZEV%2Fmv8nPhyNBJbFvZ5xmsLxV7WiZQqJ1EZzJzP%2BIUNArH699pgmSiG961zl%2FPpDlGZ1LMMaxcljbAkGOGSxybn8t7bM%3D","menuName":"签约项目"},{"menuUrl":"http://192.168.1.68:8090/jusfoun-esb/pc/ssoservice/ssologin?linkType=3&accesskey=KYBrBiX5Qw5aWF4SL47x6KtjMHZlfcf5VPAFgTq3TWGMkCLlEpbQ2NBEP3iyJndl5P%2B%2BBgWMHhYuw%2F2Ca97k2suMMoOLDRkuPhOvfdpUHVPodavNYXAjdbWEwNcvduRcELZD9c6HiF6fnONYM01Me%2BJYwHSKxzhLDs61Frs3ecg%3D","menuName":"日报"},{"menuUrl":null,"menuName":"周报"},{"menuUrl":null,"menuName":"通讯录"},{"menuUrl":null,"menuName":"模板"},{"menuUrl":null,"menuName":"商情"},{"menuUrl":null,"menuName":"军火库"},{"menuUrl":null,"menuName":"招标"}]};
//	var links = linksdata.data;
//	
//	for(var i = 0; i < links.length; i++){
//		var blockname = links[i].menuName;
//		switch (blockname){
//			case '商机':
//				$('.opportunity_in').parent('a').attr('href', links[i].menuUrl);
//				break;
//			case '客户':
//				$('.clientele_in').parent('a').attr('href', links[i].menuUrl);
//				break;
//			case '签约项目':
//				$('.project_in').parent('a').attr('href', links[i].menuUrl);
//				break;
//			case '日报':
//				$('.daily_in').parent('a').attr('href', links[i].menuUrl);
//				break;
//			case '周报':
//				$('.weekly_in').parent('a').attr('href', links[i].menuUrl);
//				break;
//			case '通讯录':
//				$('.contacts_in').parent('a').attr('href', links[i].menuUrl);
//				break;
//			case '模板':
//				$('.template_in').parent('a').attr('href', links[i].menuUrl);
//				break;
//			case '商情':
//				$('.conditions_in').parent('a').attr('href', links[i].menuUrl);
//				break;
//			case '军火库':
//				$('.arsenal_in').parent('a').attr('href', links[i].menuUrl);
//				break;
//			case '招标':
//				$('.bids_in').parent('a').attr('href', links[i].menuUrl);
//				break;
//			case '公告':
//				$('.notice_in').parent('a').attr('href', links[i].menuUrl);
//				break;
//		}
//	}
	

	
	//	最近浏览左右滑动点击事件
	var hsdata = {"status":true,"message":"success","errorInfo":"","data":[{"menuName":"商机","menuUrl":"#","usedTime":1495595468000},{"menuName":"公告","menuUrl":"#","usedTime":1495595468000},{"menuName":"商机","menuUrl":"#","usedTime":1495595468000},{"menuName":"公告","menuUrl":"#","usedTime":1495595468000},{"menuName":"商机","menuUrl":"#","usedTime":1495595468000},{"menuName":"公告","menuUrl":"#","usedTime":1495595468000},{"menuName":"商机","menuUrl":"#","usedTime":1495595468000},{"menuName":"公告","menuUrl":"#","usedTime":1495595468000},{"menuName":"商机","menuUrl":"#","usedTime":1495595468000},{"menuName":"公告","menuUrl":"#","usedTime":1495595468000}]};
	var historyarr = hsdata.data;
	
	
//	var historyarr = ['公告', '商机', '军火库', '签约项目', '通讯录', '日报', '招标', '商情', '客户', '商情', '客户'];   //目前浏览记录不能超过12个

	historylist(historyarr);

	function historylist(data) {
		var appendhtml = '';
		var dlength = data.length;
		var posnum = 0;
		var classname = '';
		for(var i = 0; i < dlength; i++) {
			switch (data[i].menuName){
				case '商机':
					classname = 'opportunity_hs';
					break;
				case '客户':
					classname = 'clientele_hs';
					break;
				case '签约项目':
					classname = 'project_hs';
					break;
				case '日报':
					classname = 'daily_hs';
					break;
				case '周报':
					classname = 'weekly_hs';
					break;
				case '通讯录':
					classname = 'contacts_hs';
					break;
				case '模板':
					classname = 'template_hs';
					break;
				case '商情':
					classname = 'conditions_hs';
					break;
				case '军火库':
					classname = 'arsenal_hs';
					break;
				case '招标':
					classname = 'bids_hs';
					break;
				case '公告':
					classname = 'notice_hs';
					break;
			};
			appendhtml +=
				'<li>\
					<div class="notice_hs">\
						<a href="'+ data[i].menuUrl +'">\
							<div class="'+ classname +' bin">\
								<div class="bin_txt hsrb">'+ data[i].menuName +'</div>\
								<div class="bin_logo hslt">\
								</div>\
							</div>\
						</a>\
					</div>\
				</li>';
		};
		$(".sliderwrap>ul").append(appendhtml);

		if(dlength <= 4) {
			$(".sright").addClass('locked');
		} else {
			var pagenum = -2;
			if(dlength <= 8){
				pagenum = -1;
			}
			$(".sright").on('click', function() {
				$(".sleft").removeClass('locked');
				posnum--;
				if(posnum <= pagenum){
					posnum = pagenum;
					$(this).addClass('locked');
				}
				$(".sliderwrap>ul").animate({
					left: 840*posnum + 'px'
				});
			})
			$(".sleft").on('click', function() {
				$(".sright").removeClass('locked');
				posnum++;
				if(posnum >= 0){
					posnum = 0;
					$(this).addClass('locked');
				}
				$(".sliderwrap>ul").animate({
					left: 840*posnum + 'px'
				});
			})
		}
	};

})


