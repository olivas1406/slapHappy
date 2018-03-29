/*
 _____   _           ___   _____   _   _       ___   _____   _____  __    __ 
/  ___/ | |         /   | |  _  \ | | | |     /   | |  _  \ |  _  \ \ \  / / 
| |___  | |        / /| | | |_| | | |_| |    / /| | | |_| | | |_| |  \ \/ /  
\___  \ | |       / / | | |  ___/ |  _  |   / / | | |  ___/ |  ___/   \  /   
 ___| | | |___   / /  | | | |     | | | |  / /  | | | |     | |       / /    
/_____/ |_____| /_/   |_| |_|     |_| |_| /_/   |_| |_|     |_|      /_/   
*/

$(document).ready(function(){ 


    
    $(".gym").hide();                                                   // Hide the map with local gyms
    $(".arcades").hide();                                               // Hide the map with local arcades
    $(".bars").hide();                                                  // Hide the map with local bars
    $(".yourLocation").hide();

    $(".holdMe1").on("click", function() {                              // When you click on the first image
        $(".gym").show();                                               // Show the map with local gyms
        $(".holdMe1").hide();                                           // Hide the image that was clicked
    });

    $(".holdMe2").on("click", function() {                              // When you click on the second image
        $(".arcades").show();                                           // Show the map with local arcades
        $(".holdMe2").hide();                                           // Hide the image that was clicked
    });

    $(".holdMe3").on("click", function() {                              // When you click on the third image
        $(".bars").show();                                              // Show the map with local bars
        $(".holdMe3").hide();                                           // Hide the image that was clicked
    });

    $(".holdMe4").on("click", function() {                              // When you click on the third image
        $(".yourLocation").show();                                              // Show the map with local bars
        $(".holdMe4").hide();                                           // Hide the image that was clicked
    });
    
});
  
 
  
  