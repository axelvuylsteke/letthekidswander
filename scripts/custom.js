window.onscroll = function() {
    var nav = document.getElementById("test");
    var headerImageHeight = document.getElementById("header-image").height;
    console.log(headerImageHeight);     
    if ( window.pageYOffset > headerImageHeight ) {
        nav.style.backgroundColor = "#b0f4e6";
    } else {
        nav.style.backgroundColor = "transparent";
    }
}   
