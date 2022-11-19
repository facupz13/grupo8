const crearUsuario = (nombre, email, contraseña) => {
    const usuario = {
        nombre: nombre,
        email: email,
        contraseña: contraseña
    }

    return usuario;
}

const agregarNuevoUsuario = () => {
    let Imputnombre = document.querySelector("#nombre").value;
    let imputemail = document.querySelector("#email").value;
    let imputcontraseña = document.querySelector("#Contraseña").value;


    if (!localStorage.getItem("usuarios")) {
        let usuario = crearUsuario(Imputnombre, imputemail, imputcontraseña)
        let usuarios = [usuario];
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

    } else {
        let usuario = crearUsuario(Imputnombre, imputemail, imputcontraseña);
        let usuarios = JSON.parse(localStorage.getItem("usuarios"));
        let result = false;

        for (let i = 0; i < usuarios.length; i++){
            if (usuarios[i].nombre === usuario.nombre) {
                result = true;
            }
        }
        if (result) {
            alert("este usuario ya esta registrado");
        } else {
            alert("gracias por unirte");
            usuarios.push(usuario);
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            console.log(usuarios);
        }
    }
}



document.querySelector("#botonRegistrar").addEventListener("click", (event) => {
    event.preventDefault();
    agregarNuevoUsuario();
})





