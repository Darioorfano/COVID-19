$(document).ready(function(){
    
    $("#popup1").hide();
    $("#popup2").hide();
    $("#popup3").hide();
    
    /*Boton1*/    
    $("#boton-abrir").click(function(){
        
        if($("#popup1").hide()){
            $("#popup1").show();  
        }
        
    });
    
    $("#boton-abrir").click(function(){
        $("body,html").animate({scrollTop:"0px"},300);
        
    });
    
    $(window).scroll(function(){
        /*Hace referencia a la funcion de arriba*/
        /*Si es menor a cero es x que se encuentra abajo*/        
        if($(this).scrollTop()<0){
            $("#boton-abrir").slideUp(300);
        }
    });
    
    
    $("#boton-cerrar1").click(function(){
        
        if($("#popup1").show()){
            $("#popup1").hide();
            
        }
    });
    
    $("#boton-cerrar1").click(function(){
        $("body,html").animate({
            scrollTop:"1000px"
        },300);
    });
    
    $(window).scroll(function(){
        /*Hace referencia a la funcion de arriba*/
        /*Si es menor a cero es x que se encuentra abajo*/        
        
        if($(this).scrollTop()<1000){
            $("#boton-cerrar1").slideDown(300);
        }
        
        
    });
    
    
    
    
    
    
    $("#boton-abrir2").click(function(){
        
        if($("#popup2").hide()){
            $("#popup2").show();
            
        }    
    });
    
    $("#boton-abrir2").click(function(){
        $("body,html").animate({scrollTop:"0px"},300);
        
    });
    
    $(window).scroll(function(){
        
        if($(this).scrollTop()<0){
            $("#boton-abrir2").slideUp(300);
        }
    });
    
    
    $("#boton-cerrar2").click(function(){
        
        if($("#popup2").show()){
            $("#popup2").hide();
            
        }
    });
    
    $("#boton-cerrar2").click(function(){
        $("body,html").animate({
            scrollTop:"1000px"
        },300);
    });
    
    
    
    $(window).scroll(function(){
        /*Hace referencia a la funcion de arriba*/
        /*Si es menor a cero es x que se encuentra abajo*/        
        
        if($(this).scrollTop()<1000){
            $("#boton-cerrar2").slideDown(300);
        }
        
        
    });
    
    
    
    
    
    $("#boton-abrir3").click(function(){
        
        if($("#popup3").hide()){
            $("#popup3").show();  
        }
        
        
    });
    
    
    $("#boton-abrir3").click(function(){
        $("body,html").animate({scrollTop:"0px"},300);
        
    });
    
    
    $(window).scroll(function(){       
        if($(this).scrollTop()<0){
            $("#boton-abrir3").slideUp(300);
        }
    });
    
    
    
    
    $("#boton-cerrar3").click(function(){
        
        if($("#popup3").show()){
            $("#popup3").hide();
            
        }
    });
    
    $("#boton-cerrar3").click(function(){
        $("body,html").animate({
            scrollTop:"1000px"
        },300);
    });
    
    $(window).scroll(function(){
        
        /*Validamos si el scroll de arriba es mejora 1000
        (Pongo 1000 porque quiero saber hasta donde quiero 
            que baje la pagina)*/
            
            if($(this).scrollTop()<1000){
                $("#boton-cerrar3").slideDown(300);
            }
            
            
        });
        
        
    });
    