$(document).ready(function(){
    
    $("#menu-responsive").hide();
    $("#boton-responsive").click(function(){
        if($("#menu-responsive").css("display") == "none"){
            
            $("#menu-responsive").slideDown(300);
            
        }else {
            $("#menu-responsive").slideUp(300);
        }
    });
    
});










