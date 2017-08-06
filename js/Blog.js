var myHover = document.querySelector(".dmColInput");
myHover.style.backgroundColor = "rgba(0,0,0,0.0)";
myHover.style.padding = "10px";
myHover.style.border = "2px solid #53B778 ";
myHover.style.color = "white";
myHover.style.marginBottom = "50px";


myHover.addEventListener("mouseover", function() {
    this.style.backgroundColor = "#53B778";
    this.style.transition = "0.2s ease-in";
    this.style.color = "white";

});


myHover.addEventListener("mouseleave", function() {
    this.style.backgroundColor = "rgba(0,0,0,0.0)";
    this.style.transition = "0.2s ease-in";
    this.style.color = "white";

});
// $(".slider ul li").hide();
// $(".slider ul li:first").show();

$(function() {
    var liLength = $(".slider ul li").length;
    var liWidth = 780;
    var totalWidth = liLength * liWidth;
    var liCount = 0;
    $(".slider ul").css("width", totalWidth + "px");

    $("input.Next").click(function() {
        if (liCount < liLength - 1) {
            liCount++;
            newWidth = liWidth * liCount;
            $(".slider ul").animate({ marginLeft: "-" + newWidth + "px" }, 350);
        } else {

            liCount = 0;
            $(".slider ul").animate({ marginLeft: "0" }, 350);
        }
        return false;
    })


    $("input.Prev").click(function() {
        if (liCount > 0) {
            liCount--;
            newWidth = liWidth * liCount;
            $(".slider ul").animate({ marginLeft: "-" + newWidth + "px" }, 350);
        } else {


        }
        return false;
    })


});