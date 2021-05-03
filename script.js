function start(){
    let aleatorio1= Math.round(Math.random()*100);    
    show1= aleatorio1;
    document.getElementById("sumando1").innerHTML= show1;

    let aleatorio2= Math.round(Math.random()*100);    
    show2= aleatorio2;
    document.getElementById("sumando2").innerHTML= show2;
  
}


function suma(){
    let userResult= document.getElementById("resultadoUsuario").value;
    resultado= show1 + show2;
    document.getElementById("resultadoCorrecto").innerHTML= resultado;

    /*if (userResult==resultado){
        alert("si");
    }
    else{
        alert("nooo, es " + resultado);
    }*/
}



