(() =>{
    const imagenes = document.querySelectorAll('.img-galeria')
    const imagenesLight = document.querySelector('.agregar-imagen')
    const contenedorLight = document.querySelector('.imagen-light')
    const hamburger1 = document.querySelector('.hamburger')

    imagenes.forEach((item) =>{
        item.addEventListener('click', ()=>{
            let imagen = item.getAttribute('src')
            aparecerImagen(imagen)
        })
    })
    
    const aparecerImagen = (imgSrc)=>{
        imagenesLight.src = imgSrc
        contenedorLight.classList.add("show")
        imagenesLight.classList.add('showImage')
        //quita el icono ham
        hamburger1.style = 'opacity: 0'
    }
    
    
    contenedorLight.addEventListener('click', (e)=>{
        if(e.target != imagenesLight){
            contenedorLight.classList.remove("show")
            imagenesLight.classList.toggle('showImage') //esto hace qu eno se pierda el efecto de zoom
            //imagenesLight.src = '' INNECESARIO
            hamburger1.style = 'opacity: 1'
        }
    })
})()

