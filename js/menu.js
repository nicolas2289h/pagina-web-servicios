(()=>{
    const hamburger = document.querySelector('.hamburger')
    const menu = document.querySelector('.menu-navegacion')
    
    hamburger.addEventListener('click', ()=>{
        menu.classList.toggle('spread')
    })
    
    //para que el al clickear afuera del menu, este se oculte
    window.addEventListener('click', (e)=>{
        if(menu.classList.contains('spread')
        && e.target != menu //click a algo distinto de menu
        && e.target != hamburger){ //click a algo distinto al icono ham
            menu.classList.toggle('spread');
        }
    })
    
})()