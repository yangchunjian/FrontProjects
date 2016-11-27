$(function() {
	$(".link .button").hover(function() {
		var title = $(this).attr("data");
		$(".tip em").text(title);
		var left= $(this).position().left + 13; // 按钮相对于.box左侧的距离
		// 实现居中效果
		if($(".tip").outerWidth() >= $(this).outerWidth()) {
			var dis = ($(".tip").outerWidth() - $(this).outerWidth()) / 2; // 提示框的宽度-按钮的宽度的一半
			left = left - dis;
		} else { // 如果tip的宽度小于按钮的宽度
			var dis = ($(this).outerWidth() - $(".tip").outerWidth()) / 2;
			left += dis;
		}
		var top = $(this).position().top - 146;
		// 动态显示tip
		$(".tip").css({"left": left+"px", "top": top+"px"}).animate({
			"top": top+100,
			"opacity": 1
		}, 300);
	}, function() {
		if(!$(".tip").is(":animated")) { // 如果tip当前没有动画效果
			$(".tip").animate({ "top": 100, "opacity": 0 }, 300); // 添加隐藏的动画效果
		}
	});
});
