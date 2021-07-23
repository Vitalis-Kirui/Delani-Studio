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

// Collecting and displaying data from contact us section

$(document).ready(function(){

    $("form").submit(function(autoRefresh){

        var userName = $(".name").val();
        var userEmail = $(".email").val();

        alert("Hi "+userName+", your message was successfully sent. Thank you for reaching out to us.")

        return true;

        // autoRefresh.preventDefault();
    });

});