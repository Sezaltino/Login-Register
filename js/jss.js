function CheckPassword() 
{ 

    const inputtxt = document.getElementById("form2Example2");
    const nome = document.getElementById("form2Exemplo3");
    const mail = document.getElementById("form2Exemplo1");
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(inputtxt.value.match(passw) && length(mail)>0 && length(nome)>0) 
    { 
    alert('Registo efetuado');
    return true;
    }
    else
    { 
    alert('Insira uma Senha de 6-20 Caracteres, no Mínimo 1 Letra Maiúscula e Minúscula e um Caracter Especial');
    return false;
}
}

function togglepassword(){

    var div = document.getElementById("divtest");
    var identify = document.getElementById("iconpassword").getAttribute("value");
    const s1= "m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z";
    const s2 =  "M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z";
    const s3 = "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z";
    const s4 = "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z";

    if (identify == 200) {
        document.getElementById("iconpassword").className = "bi bi-eye-slash-fill";
        document.getElementById("s1").setAttribute("d", s1);
        document.getElementById("s2").setAttribute("d", s2);
        document.getElementById("iconpassword").setAttribute("value", 201);
        document.getElementById("form2Example2").setAttribute("type", "text")
	} 
    if ( identify == 201){
        document.getElementById("iconpassword").className = "bi bi-eye-fill";
        document.getElementById("s1").setAttribute("d", s3);
        document.getElementById("s2").setAttribute("d", s4);
        document.getElementById("iconpassword").setAttribute("value", 200);
        document.getElementById("form2Example2").setAttribute("type", "password")
    }


}