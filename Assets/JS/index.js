// Toggles on what we do

$(document).ready(function(){
    
    // Design
    $("#design").click(function(){

        $(".design").fadeToggle();
        $("#designPic").toggle();
    });

    // Development
    $("#development").click(function(){

        $(".development").fadeToggle();
        $("#developmentPic").toggle();
    });

    // Product management
    $("#management").click(function(){

        $(".management").fadeToggle();
        $("#managementPic").toggle();
    });
});