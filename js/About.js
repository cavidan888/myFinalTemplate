

var myHover = document.querySelector(".dmColInput");
myHover.style.backgroundColor = "rgba(0,0,0,0.0)";
myHover.style.padding = "10px";
myHover.style.border = "2px solid #53B778 ";
myHover.style.color = "white";
myHover.style.marginBottom = "50px";


myHover.addEventListener("mouseover", function(){
	 this.style.backgroundColor = "#53B778";
	 this.style.transition = "0.2s ease-in";
	 this.style.color="white";
	
});


myHover.addEventListener("mouseleave", function(){
	 this.style.backgroundColor = "rgba(0,0,0,0.0)";
	 this.style.transition = "0.2s ease-in";
	 this.style.color="white";
	
});


$(".iconDiv").bind("mouseover",function(){
	$(this).css("background", "#53B778");
	$(this).css("transition", "0.1s ease-in");
	$(this).css("color", "white");

});

$(".iconDiv").bind("mouseleave",function(){
	$(this).css("background", "lightgray");
	$(this).css("transition", "0.1s ease-in");
	$(this).css("color", "black");
});

 
