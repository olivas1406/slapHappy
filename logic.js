/*
______     __         ______     ______   __  __     ______     ______   ______   __  __   
/\  ___\   /\ \       /\  __ \   /\  == \ /\ \_\ \   /\  __ \   /\  == \ /\  == \ /\ \_\ \  
\ \___  \  \ \ \____  \ \  __ \  \ \  _-/ \ \  __ \  \ \  __ \  \ \  _-/ \ \  _-/ \ \____ \ 
 \/\_____\  \ \_____\  \ \_\ \_\  \ \_\    \ \_\ \_\  \ \_\ \_\  \ \_\    \ \_\    \/\_____\
  \/_____/   \/_____/   \/_/\/_/   \/_/     \/_/\/_/   \/_/\/_/   \/_/     \/_/     \/_____/  
*/

$(document).ready(function(){ 

    $(".rubs").hide();                                                
    $(".bars").hide();                                           
    $(".gyms").hide();                                                  
    $(".arcades").hide();
    $(".foods").hide();
    $(".goBack").hide();

    function hideMe() {
        $(".text1").hide();                                           
        $(".text2").hide();
        $(".text3").hide();
        $(".text4").hide();
        $(".text5").hide();
    }

    $(".text1").on("click", function() {                              // Click event listener
        $(".rubs").show();     
        $(".goBack").show();                          
        hideMe();
    });

    $(".text2").on("click", function() {                              // Click event listener
        $(".bars").show();        
        $(".goBack").show();                                     
        hideMe();
    });

    $(".text3").on("click", function() {                              // Click event listener
        $(".gyms").show(); 
        $(".goBack").show();                                             
        hideMe();                                        
    });

    $(".text4").on("click", function() {                              // Click event listener
        $(".arcades").show();                                         
        $(".goBack").show();  
        hideMe();                                          
    });

    $(".text5").on("click", function() {                              // Click event listener
        $(".foods").show();   
        $(".goBack").show();                                          
        hideMe();                                         
    });
    
    $(".goBack").on("click", function() {
        goBack();
    });

    function goBack() {
        $(".text1").show();                                                
        $(".text2").show();                                           
        $(".text3").show();                                                  
        $(".text4").show();
        $(".text5").show();
        $(".rubs").hide();                                                
        $(".bars").hide();                                           
        $(".gyms").hide();                                                  
        $(".arcades").hide();
        $(".foods").hide();
        $(".goBack").hide();

    }

});
  
 
  
  