const btnSol = document.querySelector('.btn-sol')

const jugadores = document.getElementById('section-segunda')
// const flag = document.querySelector('.seccion-bienvenida')

 btnSol.addEventListener('click', () => {
 document.getElementById('section-hide').style.display = 'none';
 jugadores.classList.remove('inactive')
    })

 
    
 