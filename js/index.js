
 
    
    $('#slider-fotos').nivoSlider({
        effect:'random',

        slices: 15,
        
        boxCols: 8,
        
        boxRows: 4,
        
        animSpeed: 200,
        
        pauseTime: 2500,
        
        startSlide: 0,
        
        directionNav:true,
        
        controlNav:true,
        
        controlNavThumbs:false,
        
        pauseOnHover:true,
        
        manualAdvance:false,
        
        prevText:'Prev',
        
        nextText:'Next',
        
        randomStart:false,
        
        beforeChange:function(){},
        
        afterChange:function(){},
        
        slideshowEnd:function(){},
        
        lastSlide:function(){},
        
        afterLoad:function(){}
    
    
    });
    

/*$('#boton-responsive').click(function(){

    $(".menu-header").show()
        $(".menu-header").style.display="flex";
     
});
$('boton-responsive').addEventListener("click",)
$('#boton-responsive').click(function(){
$(".menu-header").hide();
});*/
    
    
 


$("#boton-responsive").click(function(){
    var menu=$("#menu");
 if( menu.css("display")=="none" || menu.css("display")==""){
        menu.css("display")=="flex";
        menu.toogle();
    }
        else if(menu.css("display")=="flex" || menu.css("display")=="inline-block"){
    menu.css("display")=="none";
}
    
});



