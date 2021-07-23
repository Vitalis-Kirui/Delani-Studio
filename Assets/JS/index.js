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

    //all
    $("#what").click(function(){

        $(".management").fadeToggle();
        $(".development").fadeToggle();
        $(".design").fadeToggle();
        $("#designPic").fadeToggle();
        $("#developmentPic").fadeToggle();
        $("#managementPic").fadeToggle();
        
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

// javascript form validation

var contactUsValidation = function(){

    var name = document.getElementById("userName").value;    
    var email = document.getElementById("userEmail").value;

    // validation

    if (name.length < 2 || name == " "){
        alert("Please enter a valid name! \nName must be filled")
        return false;
    };

    atPosition = email.indexOf("@");
    dotPosition = email.lastIndexOf(".");

    if(email == " "){
        alert("Email must be filled!")
        return false;
    };

    if (atPosition <= 2 || atPosition >= -2){
        alert("Provide a valid Email address!")
        return false;
    };

    if(dotPosition  == -1){
        alert("Provide a valid email address.")
        return false;
    };

};