const btnSol = document.querySelector('.btn-sol')

const jugadores = document.getElementById('section-segunda')

const capitulos = document.getElementById('section-tercera')

const imagenes = document.getElementById('section-cuarta')

// const flag = document.querySelector('.seccion-bienvenida')

 btnSol.addEventListener('click', () => {
 document.getElementById('section-hide').style.display = 'none';

 jugadores.classList.remove('inactive');

 capitulos.classList.remove('inactive');

 imagenes.classList.remove('inactive');
    })
 
   
 