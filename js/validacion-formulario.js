


function validacion(){
    /*Creamos variables*/    
    var error=false;
    var mensajeError="";
    var mensaje=document.getElementById("mensaje");
    var nombre_apellido=document.getElementById("nombre-apellido");
    var dni=document.getElementById("dni");
    var telefono=document.getElementById("celular");
    var opcion_Fiebre=document.getElementsByClassName("opcion_Fiebre");  
    var pregunta_Fiebre=document.getElementsByName("fiebre");
    var pregunta_Dolor_Cabeza=document.getElementsByName("dolor-cabeza");
    var pregunta_Tos=document.getElementsByName("tos");
    var pregunta_Dolor_Garganta=document.getElementsByName("dolor-garganta");
    var dificultad_Respirar=document.getElementsByName("dificultad-respirar");
    
    var acumuladorTotal=0;
    
    
    if(nombre_apellido.value==""){
        error=true;
        mensajeError+="<p>El campo nombre y apellido es obligatorio</p>";
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
    
    var seleccionado=false;
    for(i in pregunta_Fiebre){
        if(pregunta_Fiebre[i].checked){
     
            if(pregunta_Fiebre[i].value=="Si") {
            
            acumuladorTotal++;
        }
            seleccionado=true;
        }
    }
    if(!seleccionado){
        error=true;
        mensajeError+="<p> El campo fiebre es obligatorio</p>";
    }
    
    /*Creamos una variable seleccionado=false, recorremos con el for
    el name de los inputs y preguntamos si estan seleccionados, que devuelva verdadero
    */
    var seleccionado=false;
    for(i in pregunta_Dolor_Cabeza){
        
        if(pregunta_Dolor_Cabeza[i].checked){
        if(pregunta_Dolor_Cabeza[i].value=="Si"){

            acumuladorTotal++;
            
        }
        seleccionado=true;
    }  
    }
    if(!seleccionado){
        error=true;
        mensajeError+="<p> El campo dolor de cabeza es obligatorio</p>";
        
    }
    
    var seleccionado=false;
    for(i in pregunta_Tos){
        
        if(pregunta_Tos[i].checked){
         if(pregunta_Tos[i].value=="Si"){

            acumuladorTotal++; 
            
        }  
        seleccionado=true;
    }
    }
    if(!seleccionado){
        error=true;
        mensajeError+="<p> El campo tos es obligatorio</p>";
    }
    
    var seleccionado=false;
    for(i in pregunta_Dolor_Garganta){
        
        if(pregunta_Dolor_Garganta[i].checked){ 
        if(pregunta_Dolor_Garganta[i].value=="Si"){
            acumuladorTotal++;
            
        }
        
        seleccionado=true;
    }  
        
    }
    if(!seleccionado){
        error=true;
        mensajeError+="<p> El campo dolor de garganta es obligatorio</p>";
        
    }
    
    
    var seleccionado=false; 
    for(i in dificultad_Respirar){
        
        if(dificultad_Respirar[i].checked){
            if(dificultad_Respirar[i].value=="Si") { 
           
            acumuladorTotal++;
            }
            
            seleccionado=true;
            
        }  
    }
    if(!seleccionado){
        error=true;
        mensajeError+="<p> El campo dificultad para respirar es obligatorio</p>";
    }
    
    
    console.log("La cantidad de sintomas que se encuentra relacionado con la enfermedad es de" +acumuladorTotal);
    
    /*Esto valida que si da falso el formulario no se envie con los campos vacios*/
    if(error){
        
        mensaje.innerHTML=mensajeError;
        
        return false; 
        
    }else{
        mensaje.innerHTML="<p>El formulario fue completado correctamente " +acumuladorTotal+ " síntomas de COVID-19 fueron registrados</p>"
        mensaje.classList.remove("error");
        mensaje.classList.add("exito");
        return true;
    }  
}


/*Se lo pongo al boton porque es lo que haria el usuario a la hora de enviar el
formulario*/
/*document.getElementById("button-send").addEventListener("click",validacion);*/


/*Los radio button no lo puedo seleccionar por id, por lo cual deberia
seleccionarlo por name, Este name devuelve un array*/
function validacionRadioButton( ){
    
    var opcion_Viaje_Si=document.getElementById("si-viaje");
    var opcion_Viaje_No=document.getElementById("no-viaje");
    /*Contenedor que posee el datalist,select,input*/
    var paises=document.getElementById("listado-paises");
    
    if (opcion_Viaje_Si.checked){    
        paises.style.display="flex";
        return true;
    }
    else if(opcion_Viaje_No.checked){
        
        paises.style.display="none";
    return true;
    }
}
document.getElementById("si-viaje").addEventListener("click",validacionRadioButton);
document.getElementById("no-viaje").addEventListener("click",validacionRadioButton);

function validacionCampoDificultadRespirar( ){
    
    var opcion_Dificultad_Si=document.getElementById("si-dificultad");
    var opcion_Dificultad_No=document.getElementById("no-dificultad");
    var direccion=document.getElementById("contenedor-direccion");
    
    if (opcion_Dificultad_Si.checked){    
        direccion.style.display="flex";
    }
    else if(opcion_Dificultad_No.checked){
        
        direccion.style.display="none";
        return true;
    }
}
document.getElementById("no-dificultad").addEventListener("click",validacionCampoDificultadRespirar);
document.getElementById("si-dificultad").addEventListener("click",validacionCampoDificultadRespirar);

function validacionFormulario(){
    
    
    var formulario=document.getElementById("formulario-test");
    var mensaje=document.getElementById("mensaje");
    var mensajeError="";
    var error=false;
    if(validacion()){
        
    }else{
        mensajeError+="<p>Complete los campos restante</p>";
        error=true;
    }
    
    if(validacionRadioButton()){
        
    }else{
        mensajeError+="<p>Seleccione una opcion</p>";
        error=true;
    }
    
    if(error){
        
        mensaje.innerHTML=mensajeError;
        
        return false; 
        
    }else{
        
        return true;
    }  
    
}

document.getElementById("button-send").addEventListener("click",validacionFormulario);


