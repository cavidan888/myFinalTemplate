var myHover = document.querySelector(".dmColInput");
myHover.style.backgroundColor = "rgba(0,0,0,0.0)";
myHover.style.padding = "10px";
myHover.style.border = "2px solid #53B778 ";
myHover.style.color = "white";
myHover.style.marginBottom = "50px";
myHover.style.outline = "none";


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

$(".cInput").bind("click", function() {
    $(this).css("borderColor", "green");
})

$(".cInput#second").bind("click", function() {
    $(".cInput#first").css("borderColor", "lightgray");
})


$(".cInput#first").bind("click", function() {
    $(".cInput#second").css("borderColor", "lightgray");
})

function myMap() {
var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}