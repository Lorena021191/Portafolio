window.addEventListener('load', ()=> {
    const form = document.querySelector('.form_contacto');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const asunto = document.getElementById('asunto');
   const mensaje = document.getElementById('mensaje');

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()

    })
    
    const validaCampos = ()=> {
        //capturar los valores ingresados por el usuario
        const nombreValor = nombre.value.trim()
        const emailValor = email.value.trim()
        const asuntoValor =asunto.value.trim()
            const mensajeValor = mensaje.value.trim()
     
        //validando campo usuario
        //(!usuarioValor) ? console.log('CAMPO VACIO') : console.log(usuarioValor)
        if(!nombreValor){
            //console.log('CAMPO VACIO')
            validaFalla(nombre, 'Campo nombre vacío')
        }else{
            validaOk(nombre, "")
        }

        //validando campo email
        if(!emailValor){
            validaFalla(email, 'Campo email vacío')            
        }else if(!validaEmail(emailValor)) {
            validaFalla(email, 'El e-mail no es válido')
        }else {
            validaOk(email)
        }
          if(!asuntoValor){
            //console.log('CAMPO VACIO')
            validaFalla(asunto, 'Campo asunto vacío')
        }else{
            validaOk(asunto)
        }
         //validando campo mensaje
            
         if(!mensajeValor) {
             validaFalla(mensaje, 'Campo mensaje vacío')
         } else if (mensajeValor.length >50) {             
             validaFalla(mensaje, 'Debe tener 50 caracteres cómo maximo.')

         } else {
             validaOk(mensaje)
         }
if(nombreValor && emailValor && asuntoValor && mensajeValor&&validaEmail(emailValor) ){
	     alert("Enviado");


}

    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'input-container falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
          const aviso = formControl.querySelector('p')
        formControl.className = 'input-container ok'
        aviso.innerText = ""
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }

})

