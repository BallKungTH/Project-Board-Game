function openSideMenu(){
    document.getElementById('side-menu').style.width='250px';
    document.getElementById('main').style.marginLeft='250px';
}
function closeSideMenu(){
    document.getElementById('side-menu').style.width='0px';
    document.getElementById('main').style.marginLeft='0px';
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;


// This adds some nice ellipsis to the description:
document.querySelectorAll(".projcard-description").forEach(function(box) {
	$clamp(box, {clamp: 6});
});









































