$(".topnav").on("click", ".high", function() {
    $(".topnav a").removeClass("hrv");
    $(this).toggleClass("hrv");
})

$(".fa-hackerrank").on("click", function() {
    window.open("https://www.hackerrank.com/RohitReddy19", "_blank");
})
$(".fa-instagram").on("click", function() {
    window.open("https://instagram.com/rohit_reddy19?utm_medium=copy_link", "_blank");
})
$(".fa-linkedin").on("click", function() {
    window.open("https://www.linkedin.com/in/rohit-reddy19?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTAq3idIURlaHeJxXHkbllw%3D%3D", "_blank");
})
$(".fa-github").on("click", function() {
    window.open("https://github.com/RohitRed19", "_blank");
})
$(".fa-envelope").on("click", function() {
    window.open("mailto: reddyrohit19919@gmail.com", "_parent");
})
$("#homebtn").on("click", function() {
    window.open("index.html", "_self")
})