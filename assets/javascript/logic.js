/*
______     __         ______     ______   __  __     ______     ______   ______   __  __   
/\  ___\   /\ \       /\  __ \   /\  == \ /\ \_\ \   /\  __ \   /\  == \ /\  == \ /\ \_\ \  
\ \___  \  \ \ \____  \ \  __ \  \ \  _-/ \ \  __ \  \ \  __ \  \ \  _-/ \ \  _-/ \ \____ \ 
 \/\_____\  \ \_____\  \ \_\ \_\  \ \_\    \ \_\ \_\  \ \_\ \_\  \ \_\    \ \_\    \/\_____\
  \/_____/   \/_____/   \/_/\/_/   \/_/     \/_/\/_/   \/_/\/_/   \/_/     \/_/     \/_____/  
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
  
 
  
  