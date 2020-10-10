let cajaNombre = document.getElementById("nombre");
let cajaApellido = document.getElementById("apellido");
let cajaEmailu = document.getElementById("emailf");
let cajaPassword = document.getElementById("password");

let botonEnviar = document.getElementById("boton");

let ayuda1 = document.getElementById("ayuda1");

//Verificar el contenido de las cajas:
botonEnviar.addEventListener("click", validarFormulario);


//funcion para ejecutar al momento del envio de datos
function validarFormulario(evento) {
    evento.preventDefault();

    if (cajaNombre.value == "" && cajaApellido.value == "" && cajaEmailu.value == ""  && cajaPassword.value == "") {

        cajaNombre.classList.add("is-invalid");
        cajaApellido.classList.add("is-invalid");
        cajaEmailu.classList.add("is-invalid");
        cajaPassword.classList.add("is-invalid");

      

    } else if (cajaNombre.value == "" && cajaApellido.value != "" && cajaEmailu.value == ""  && cajaPassword.value == "") {

        cajaNombre.classList.add("is-invalid");
        cajaApellido.classList.remove("is-invalid");
        cajaEmailu.classList.add("is-invalid");
        cajaPassword.classList.add("is-invalid");


    } else if (cajaNombre.value != "" && cajaApellido.value == "" && cajaEmailu.value == ""  && cajaPassword.value == "") {

        cajaNombre.classList.remove("is-invalid");
        cajaApellido.classList.add("is-invalid");
        cajaEmailu.classList.add("is-invalid");
        cajaPassword.classList.add("is-invalid");


        ayuda1.textContent = "Campo obligatorio";

     } else if (cajaNombre.value == "" && cajaApellido.value == "" && cajaEmailu.value != ""  && cajaPassword.value == "") {

        cajaNombre.classList.add("is-invalid");
        cajaApellido.classList.add("is-invalid");
        cajaEmailu.classList.remove("is-invalid");
        cajaPassword.classList.add("is-invalid");


        ayuda1.textContent = "Campo obligatorio";

    } else if (cajaNombre.value == "" && cajaApellido.value == "" && cajaEmailu.value == ""  && cajaPassword.value != "") {

        cajaNombre.classList.add("is-invalid");
        cajaApellido.classList.add("is-invalid");
        cajaEmailu.classList.add("is-invalid");
        cajaPassword.classList.remove("is-invalid");


        ayuda1.textContent = "Campo obligatorio";

    } else if (cajaNombre.value != "" && cajaApellido.value != "" && cajaEmailu.value == ""  && cajaPassword.value == "") {

        cajaNombre.classList.remove("is-invalid");
        cajaApellido.classList.remove("is-invalid");
        cajaEmailu.classList.add("is-invalid");
        cajaPassword.classList.add("is-invalid");


        ayuda1.textContent = "Campo obligatorio";

    } else if (cajaNombre.value != "" && cajaApellido.value == "" && cajaEmailu.value != ""  && cajaPassword.value == "") {

        cajaNombre.classList.remove("is-invalid");
        cajaApellido.classList.add("is-invalid");
        cajaEmailu.classList.remove("is-invalid");
        cajaPassword.classList.add("is-invalid");


        ayuda1.textContent = "Campo obligatorio";

    } else if (cajaNombre.value != "" && cajaApellido.value == "" && cajaEmailu.value == ""  && cajaPassword.value != "") {

        cajaNombre.classList.remove("is-invalid");
        cajaApellido.classList.add("is-invalid");
        cajaEmailu.classList.add("is-invalid");
        cajaPassword.classList.remove("is-invalid");


        ayuda1.textContent = "Campo obligatorio";

    } else if (cajaNombre.value == "" && cajaApellido.value != "" && cajaEmailu.value != ""  && cajaPassword.value == "") {

        cajaNombre.classList.add("is-invalid");
        cajaApellido.classList.remove("is-invalid");
        cajaEmailu.classList.remove("is-invalid");
        cajaPassword.classList.add("is-invalid");


        ayuda1.textContent = "Campo obligatorio";

    } else if (cajaNombre.value == "" && cajaApellido.value != "" && cajaEmailu.value == ""  && cajaPassword.value != "") {

        cajaNombre.classList.add("is-invalid");
        cajaApellido.classList.remove("is-invalid");
        cajaEmailu.classList.add("is-invalid");
        cajaPassword.classList.remove("is-invalid");


        ayuda1.textContent = "Campo obligatorio";

    } else if (cajaNombre.value == "" && cajaApellido.value != "" && cajaEmailu.value != ""  && cajaPassword.value != "") {

        cajaNombre.classList.add("is-invalid");
        cajaApellido.classList.remove("is-invalid");
        cajaEmailu.classList.remove("is-invalid");
        cajaPassword.classList.remove("is-invalid");

        ayuda1.textContent = "Campo obligatorio";

    } else if (cajaNombre.value != "" && cajaApellido.value != "" && cajaEmailu.value != ""  && cajaPassword.value == "") {

        cajaNombre.classList.remove("is-invalid");
        cajaApellido.classList.remove("is-invalid");
        cajaEmailu.classList.remove("is-invalid");
        cajaPassword.classList.add("is-invalid");

        ayuda1.textContent = "Campo obligatorio";
  
   } else if (cajaNombre.value != "" && cajaApellido.value != "" && cajaEmailu.value == ""  && cajaPassword.value != "") {

        cajaNombre.classList.remove("is-invalid");
        cajaApellido.classList.remove("is-invalid");
        cajaEmailu.classList.add("is-invalid");
        cajaPassword.classList.remove("is-invalid");

        ayuda1.textContent = "Campo obligatorio";

 } else if (cajaNombre.value != "" && cajaApellido.value == "" && cajaEmailu.value != ""  && cajaPassword.value != "") {

        cajaNombre.classList.remove("is-invalid");
        cajaApellido.classList.add("is-invalid");
        cajaEmailu.classList.remove("is-invalid");
        cajaPassword.classList.remove("is-invalid");

        ayuda1.textContent = "Campo obligatorio";

  

    } else {
        cajaNombre.classList.remove("is-invalid");
        cajaApellido.classList.remove("is-invalid");
        cajaEmailu.classList.remove("is-invalid");
        cajaPassword.classList.remove("is-invalid");

        ayuda1.textContent = "";
        //llamado al backend
    }





}