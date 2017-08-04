var progressbar = $(".progresss")

for (var i = 0; i < progressbar.length; i++) {
	progressbar[i].addEventListener("click",function(){
		var element = $(this).index();
		for (var c = progressbar.length; c > element; c--) {
			$(progressbar[c]).removeClass("change");
		}
		for (var d = 0; d <= element; d++) {
			$(progressbar[d]).attr("class", "change");
		}
	})
}
