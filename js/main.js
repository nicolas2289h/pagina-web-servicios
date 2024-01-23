// links redes sociales
const linksFooter = document.querySelectorAll('.social-media a')

linksFooter.forEach(item=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault()
    })
})

// formulario

const form = document.querySelector('.formulario')
const nombre = document.getElementById('name')
const telefono = document.getElementById('number')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    if(nombre.value.trim() == '' || nombre.value.length < 4){
        return alert('No puede haber un nombre vacio o contener menos de 4 caracteres.')
    }else if(isNaN(telefono.value) || telefono.value.length !== 10){
        return alert('El telefono no puede contener letras y debe tener 10 numeros.')
    }

    alert('Enviado')
})
