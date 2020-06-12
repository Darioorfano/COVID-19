


function validacion(){
    /*Creamos variables*/    
    var error;
    var mensajeError="";
    var mensaje;
    var nombre_apellido;
    var dni;
    var telefono;
    
    error=false; /*Empezamos con la validacion en false porque no hay errores x el momento*/
    
    mensaje=document.getElementById("mensaje");
    
    nombre_apellido=document.getElementById("nombre-apellido");
    
    dni=document.getElementById("dni");
    
    telefono=document.getElementById("celular");
    
    pregunta_Fiebre=document.getElementsByName("fiebre");
    

    if(nombre_apellido.value==""){
        error=true;
        mensajeError+="<p>El campo nombre y apellido es obligatorio</p>";
        mensaje.style.color="crimson";
        nombre_apellido.style.border="2px solid crimson";
    
    }
    if(dni.value==""){
        error=true;
        mensajeError+="<p> El campo dni es obligatorio</p>";
    
        dni.style.border="2px solid crimson";
    }
    if(telefono.value==""){
        error=true;
        mensajeError+="<p> El campo telefono es obligatorio</p>"
     
        telefono.style.border="2px solid crimson";
        
    }
    
    if(!pregunta_Fiebre.checked){
        var inputSiFiebre=document.getElementById("si-fiebre");
        var inputNoFiebre=document.getElementById("no-fiebre");
        error=true;
        mensajeError+="<p> El campo fiebre es obligatorio</p>";
        inputNoFiebre.style.border="2px solid crimson";
        inputSiFiebre.style.border="2px solid crimson";
    }
    
    /*Esto valida que si da falso el formulario no se envie con los campos vacios*/
    if(error){
        
        mensaje.innerHTML=mensajeError;
        
        return false;
        
    }else{
        
        return true;
    }
    
    
    
    
}
/*Se lo pongo al boton porque es lo que haria el usuario a la hora de enviar el
formulario*/
document.getElementById("button-send").addEventListener("click",validacion);

/*Los radio button no lo puedo seleccionar por id, por lo cual deberia
seleccionarlo por name, Este name devuelve un array*/
function validacionRadioButton( ){
    var opciones;
    var seleccionado=false;
    opciones=document.getElementsByName("fiebre");
    error=false;
    mensaje=document.getElementById("mensaje");
    /*Tenemos que correrlo */
    for (i in opciones) {
        if (opciones[i].checked){    
        seleccionado=true;
        }
    }
    var error;
    
  
    
    

    if(error){
        
        mensaje.innerHTML=mensajeError;
        
        return false;
        
    }else{
        
        return true;
    }
    
}
document.getElementById("button-send").addEventListener("click",validacionRadioButton);

function mostrarPaisesVisitados(){
var seleccionado=false;
var campo_Focus;
var opciones;
var mensajeError;
var mensaje;
opciones=document.getElementsByName("viaje");
campo_Focus=document.getElementById("opciones");
mensaje=document.getElementById("mensaje");

for (i in opciones) {
    if (opciones[i].checked){
        seleccionado=true;
        }
        
        if(!opciones){
            
        }
    }

    if(error){
        
        mensaje.innerHTML=mensajeError;
        
        return false;
        
    }else{
        
        return true;
    }
}