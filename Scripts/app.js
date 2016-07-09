/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression

//Tetiana Reznychenko, 300870231, Mini portfolio.
(function(){
    "use strict";      
    // event handler function
    
    // create a reference 
    var login = document.getElementById("login");
    var password = document.getElementById("password");
           
// User Class +++++++++++++++++++++++++++++++

    var User = (function () {
        // Constructor ++++++++++++++++++++++++++++
        function User(login, password) {
         this.login = login;
         this.password = password;
        }

        // METHODS ++++++++++++++++++++++++++++++++
        User.prototype.Console = function () {
        console.log("Login: " + login);
        console.log("Password: " + password);
        };

        return User;
    } ());

    // App entry function
    function init() {
        var user = new User();
        user.Console();
    }
    
    if(contactForm) {
        // event listener with inline anonymous event handler function
        contactForm.addEventListener("submit", function(event){
            event.preventDefault();
            console.log("submitted");
            init();
        });
    }
                     

    
    
})();