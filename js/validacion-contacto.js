function validacionNombreYApellido(){
    var nombre=document.getElementById("nombre_apellido");
    var mensajeError="";
    var mensaje=document.getElementById("mensaje");
    var error=false;
    
    if(nombre.value==""){
        error=true;
        mensajeError+="<p>El campo nombre y apellido no puede estar vacio</p>";
        mensaje.style.color="Crimson";
    }
    
    
    if(error){
        mensaje.innerHTML=mensajeError;
        return false;
        
    }else{
        return true;
        
    }
    
    
}
document.getElementById("button").addEventListener("click",validacionNombreYApellido);


function validacionEmail(){
    var mensajeError="";
    var mensaje=document.getElementById("mensaje1");
    var expresionRegular=/^[0-9a-zA-Z..-]+\@[0-9a-zA-Z..-]+\.[0-9a-zA-Z]+$/;
    var inputEmail=document.getElementById("campo_Email").value;
    var error=false;
    
    
    if(!expresionRegular.test(inputEmail)){
        error=true;
        mensajeError+= "<p>La direccion de email parece incorrecta, verifique que su mail sea correcto</p>";
    }
    
    if(error){
        mensaje.innerHTML=mensajeError;
        return false;
    }else{
        return true;
    }
    
}
document.getElementById("button").addEventListener("click",validacionEmail);

function validacionTelefono(){
    var mensaje=document.getElementById("mensaje2");
    var mensajeExito="";
    var error=false;
    var inputTelefono=document.getElementById("campo_Telefono").value;
    var expresionRegularTelefono=/^[0-9]{4}[-]{1}[0-9]{4}$/;
    
    if(!expresionRegularTelefono.test(inputTelefono)){
        error=true; 
      return false;
    }else{
        mensajeExito+="<p>Felicitaciones el numero se ha ingresado con exito</p>"; 
    
    }
    
    if(error){
        
        return false;
    }
    else{
        mensaje.innerHTML=mensajeExito;
        return true;
    }
   
}
document.getElementById("button").addEventListener("click",validacionTelefono);

function caracteresRestantes(){
    var mensaje=document.getElementById("mensaje3");
    var mensajeError="";
    var error=false;
    var caracteres=document.getElementById("consulta").value.length;
    const cantidadMaxima=1000;
    var caracteresRestantes=cantidadMaxima-caracteres;
    
    if(caracteresRestantes<=0){
        error=true;
        mensajeError+="<p>Lo sentimos ha llegado al limite  de caracteres</p>";
        
    }else{
        
    }
    
    if(error){
        mensaje.innerHTML=mensajeError;
        
        return false;
    }else{
        mensaje.innerHTML="<p>Caracteres restantes</p>" +caracteresRestantes;
        return true;
    }
}
    document.getElementById("consulta").addEventListener("keyup",caracteresRestantes);