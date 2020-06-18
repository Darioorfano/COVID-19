
function nombre (){
    $("#boton-responsive").click(function(){
        $("#menu").show();
        $("#menu").slideToggle();
        alert("Cargado");
    });
   
});

/*function slidemenu(){ 
    var menu;
    var open;
    var button;
    menu=document.getElementById("menu");
    open=document.getElementsByClassName("open");
    principal=document.getElementById("principal");
    
    if(menu.style.display=="" || menu.style.display=="none"){
        menu.style.display="inline-block";
        
    }
    else{
        menu.style.display="none";
       menu.style.backgroundColor="#2D3142";
       menu.style.position="relative";
       menu.style.top="20%";
      
    }
    
    
} 
document.getElementById("boton-responsive").addEventListener("click",slidemenu);

/*Fijarme porque desaparece el menu en resolucion de pc y acomodar un poco el contenido del menu*/