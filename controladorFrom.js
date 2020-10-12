let cajaNombre = document.getElementById("nombre");
let cajaApellido = document.getElementById("apellido");
let cajaEmailu = document.getElementById("emailf");
let cajaPassword = document.getElementById("password");
let cajaCheck =document.getElementById("check")

let botonEnviar = document.getElementById("boton");

let ayuda1 = document.getElementById("ayuda1");
let ayuda2 = document.getElementById("ayuda2");

botonEnviar.addEventListener("click", validarFormulario);


function validarFormulario(evento) {
    evento.preventDefault();

    if (cajaNombre.value == "" && cajaApellido.value == "" && cajaEmailu.value == ""  && cajaPassword.value == "") {

        cajaNombre.classList.add("is-invalid");
        cajaApellido.classList.add("is-invalid");
        cajaEmailu.classList.add("is-invalid");
        cajaPassword.classList.add("is-invalid");

        ayuda1.textContent = "Campos obligatorios";
        ayuda2.textContent = "";

    } else if (cajaNombre.value == "" && cajaApellido.value != "" && cajaEmailu.value == ""  && cajaPassword.value == "") {

        cajaNombre.classList.add("is-invalid");
        cajaApellido.classList.remove("is-invalid");
        cajaEmailu.classList.add("is-invalid");
        cajaPassword.classList.add("is-invalid");

        ayuda1.textContent = "Campos obligatorios";
        ayuda2.textContent = "";

    } else if (cajaNombre.value != "" && cajaApellido.value == "" && cajaEmailu.value == ""  && cajaPassword.value == "") {

        cajaNombre.classList.remove("is-invalid");
        cajaApellido.classList.add("is-invalid");
        cajaEmailu.classList.add("is-invalid");
        cajaPassword.classList.add("is-invalid");


        ayuda1.textContent = "Campos obligatorios";
        ayuda2.textContent = "";

     } else if (cajaNombre.value == "" && cajaApellido.value == "" && cajaEmailu.value != ""  && cajaPassword.value == "") {

        cajaNombre.classList.add("is-invalid");
        cajaApellido.classList.add("is-invalid");
        cajaEmailu.classList.remove("is-invalid");
        cajaPassword.classList.add("is-invalid");


        ayuda1.textContent = "Campos obligatorios";
        ayuda2.textContent = "";

    } else if (cajaNombre.value == "" && cajaApellido.value == "" && cajaEmailu.value == ""  && cajaPassword.value != "") {

        cajaNombre.classList.add("is-invalid");
        cajaApellido.classList.add("is-invalid");
        cajaEmailu.classList.add("is-invalid");
        cajaPassword.classList.remove("is-invalid");


        ayuda1.textContent = "Campos obligatorios";
        ayuda2.textContent = "";

    } else if (cajaNombre.value != "" && cajaApellido.value != "" && cajaEmailu.value == ""  && cajaPassword.value == "") {

        cajaNombre.classList.remove("is-invalid");
        cajaApellido.classList.remove("is-invalid");
        cajaEmailu.classList.add("is-invalid");
        cajaPassword.classList.add("is-invalid");


        ayuda1.textContent = "Campos obligatorios";
        ayuda2.textContent = "";

    } else if (cajaNombre.value != "" && cajaApellido.value == "" && cajaEmailu.value != ""  && cajaPassword.value == "") {

        cajaNombre.classList.remove("is-invalid");
        cajaApellido.classList.add("is-invalid");
        cajaEmailu.classList.remove("is-invalid");
        cajaPassword.classList.add("is-invalid");


        ayuda1.textContent = "Campos obligatorios";
        ayuda2.textContent = "";

    } else if (cajaNombre.value != "" && cajaApellido.value == "" && cajaEmailu.value == ""  && cajaPassword.value != "") {

        cajaNombre.classList.remove("is-invalid");
        cajaApellido.classList.add("is-invalid");
        cajaEmailu.classList.add("is-invalid");
        cajaPassword.classList.remove("is-invalid");


        ayuda1.textContent = "Campos obligatorios";
        ayuda2.textContent = "";

    } else if (cajaNombre.value == "" && cajaApellido.value != "" && cajaEmailu.value != ""  && cajaPassword.value == "") {

        cajaNombre.classList.add("is-invalid");
        cajaApellido.classList.remove("is-invalid");
        cajaEmailu.classList.remove("is-invalid");
        cajaPassword.classList.add("is-invalid");


        ayuda1.textContent = "Campos obligatorios";
        ayuda2.textContent = "";

    } else if (cajaNombre.value == "" && cajaApellido.value != "" && cajaEmailu.value == ""  && cajaPassword.value != "") {

        cajaNombre.classList.add("is-invalid");
        cajaApellido.classList.remove("is-invalid");
        cajaEmailu.classList.add("is-invalid");
        cajaPassword.classList.remove("is-invalid");


        ayuda1.textContent = "Campos obligatorios";
        ayuda2.textContent = "";

    } else if (cajaNombre.value == "" && cajaApellido.value != "" && cajaEmailu.value != ""  && cajaPassword.value != "") {

        cajaNombre.classList.add("is-invalid");
        cajaApellido.classList.remove("is-invalid");
        cajaEmailu.classList.remove("is-invalid");
        cajaPassword.classList.remove("is-invalid");

        ayuda1.textContent = "Campo obligatorio";
        ayuda2.textContent = "";

    } else if (cajaNombre.value != "" && cajaApellido.value != "" && cajaEmailu.value != ""  && cajaPassword.value == "") {

        cajaNombre.classList.remove("is-invalid");
        cajaApellido.classList.remove("is-invalid");
        cajaEmailu.classList.remove("is-invalid");
        cajaPassword.classList.add("is-invalid");

        ayuda1.textContent = "Campo obligatorio";
        ayuda2.textContent = "";
  
   } else if (cajaNombre.value != "" && cajaApellido.value != "" && cajaEmailu.value == ""  && cajaPassword.value != "") {

        cajaNombre.classList.remove("is-invalid");
        cajaApellido.classList.remove("is-invalid");
        cajaEmailu.classList.add("is-invalid");
        cajaPassword.classList.remove("is-invalid");

        ayuda1.textContent = "Campo obligatorio";
        ayuda2.textContent = "";

 } else if (cajaNombre.value != "" && cajaApellido.value != "" && cajaEmailu.value != ""  && cajaPassword.value != "" && cajaCheck==this.checked) {

        cajaNombre.classList.remove("is-invalid");
        cajaApellido.classList.add("is-invalid");
        cajaEmailu.classList.remove("is-invalid");
        cajaPassword.classList.remove("is-invalid");

        ayuda1.textContent = "Campo obligatorio 1";
        ayuda2.textContent = "";

    } else if (cajaNombre.value != "" && cajaApellido.value == "" && cajaEmailu.value != ""  && cajaPassword.value != "") {

        cajaNombre.classList.remove("is-invalid");
        cajaApellido.classList.add("is-invalid");
        cajaEmailu.classList.remove("is-invalid");
        cajaPassword.classList.remove("is-invalid");

        ayuda1.textContent = "Campo obligatorio";
        ayuda2.textContent = "";

    } else if (cajaNombre.value == "" && cajaApellido.value == "" && cajaEmailu.value != ""  && cajaPassword.value != "") {

        cajaNombre.classList.add("is-invalid");
        cajaApellido.classList.add("is-invalid");
        cajaEmailu.classList.remove("is-invalid");
        cajaPassword.classList.remove("is-invalid");

        ayuda1.textContent = "Campo obligatorio";
        ayuda2.textContent = "";
   
   

    } else {
        cajaNombre.classList.remove("is-invalid");
        cajaApellido.classList.remove("is-invalid");
        cajaEmailu.classList.remove("is-invalid");
        cajaPassword.classList.remove("is-invalid");

        ayuda2.textContent = "Registro exitoso";
        ayuda1.textContent = "";
  
    }





}