//Selecciono boton en sol para quitar la primer section
const btnSol = document.querySelector('.btn-sol')

const jugadores = document.getElementById('section-segunda')

const capitulos = document.getElementById('section-tercera')

const imagenes = document.getElementById('section-cuarta')

//Selecciones botones para abrir capitulos
const btnArabia = document.querySelector('.primavera-arabe')
const btnMexico = document.querySelector('.llave-dios')
const btnPolonia = document.querySelector('.casa-orden')
const btnAustralia = document.querySelector('.pico-pala')
const btnHolanda = document.querySelector('.hablar-hacer')
const btnCroacia = document.querySelector('.creer')
const btnFrancia = document.querySelector('.epicidad')

const botonesCapitulos = [btnArabia, btnMexico, btnPolonia, btnAustralia, btnHolanda, btnCroacia, btnFrancia]

//Selecciono parrafos
const capArabia = document.querySelector('.arabia')
const capMexico = document.querySelector('.mexico')
const capPolonia = document.querySelector('.polonia')
const capAustralia = document.querySelector('.australia')
const capHolanda = document.querySelector('.holanda')
const capCroacia = document.querySelector('.croacia')
const capFrancia = document.querySelector('.francia')

const parrafosCapitulos = [capArabia, capMexico, capPolonia, capAustralia, capHolanda, capCroacia, capFrancia]

//Selecciono imagenes
const imgArabia = document.querySelector('.arabia-img')
const imgMexico = document.querySelector('.mexico-img')
const imgPolonia = document.querySelector('.polonia-img')
const imgAustralia = document.querySelector('.australia-img')
const imgHolanda = document.querySelector('.holanda-img')
const imgCroacia = document.querySelector('.croacia-img')
const imgFrancia = document.querySelector('.francia-img')

const imagenesParrafo = [imgArabia, imgMexico, imgPolonia, imgAustralia, imgHolanda, imgCroacia, imgFrancia]

//Selecciono botones de Capitulos
const btnVolverCapitulo = document.querySelector('.button-anteriorCapitulo')
const btnVolverCapitulos = document.querySelector('.button-volverCapitulos')
const btnProximoCapitulo = document.querySelector('.button-proximoCapitulo')

//Event Listener para boton Sol
 btnSol.addEventListener('click', () => {
 document.getElementById('section-hide').style.display = 'none';
 jugadores.classList.remove('inactive');

//  capitulos.classList.remove('inactive');

//  imagenes.classList.remove('inactive')
    })
// Desarrollo de funcion pata iterar capitulos, imagenes y parrafos
for (let i = 0; i < botonesCapitulos.length; i++) {
   const capitulosBoton = botonesCapitulos[i];

botonesCapitulos[i].addEventListener('click', ()=> {
   
      capitulos.classList.remove('inactive');
      parrafosCapitulos[i].classList.toggle('inactive');

      // imagenes.classList.remove('inactive');
      imagenesParrafo[i].classList.toggle('inactive');

})


//Función de botones de Capítulos
btnVolverCapitulo.addEventListener('click', ()=> {

})

btnVolverCapitulos.addEventListener('click', ()=> {
 
   parrafosCapitulos[i].classList.add('inactive');
   imagenesParrafo[i].classList.add('inactive');
})
;
btnProximoCapitulo.addEventListener('click', ()=> {

})



//   function toggleCapitulos() {
//       const isCapitulo = parrafosCapitulos[i].classList.contains('inactive');
//      if (isCapitulo[i] != parrafosCapitulos[i]) {
//        parrafosCapitulos[i].classList.add('inactive')
//        parrafosCapitulos[i].classList.toggle('inactive')
//    }
//  }

//Event Listener para abrir capitulos desde las imagenes
   //  btnArabia.addEventListener('click', ()=> {
   //    capitulos.classList.remove('inactive');
   //    capArabia.classList.toggle('inactive');

   //    imagenes.classList.remove('inactive')
   //    imgArabia.classList.toggle('inactive');
   //  })
   //  btnMexico.addEventListener('click', ()=> {
   //    capitulos.classList.remove('inactive');
   //    capMexico.classList.toggle('inactive');

   //    imagenes.classList.remove('inactive')
   //    imgMexico.classList.toggle('inactive');
      
   //  })
   //  btnPolonia.addEventListener('click', ()=> {
   //    capitulos.classList.remove('inactive');
   //    capPolonia.classList.toggle('inactive');

   //    imagenes.classList.remove('inactive')
   //    imgPolonia.classList.toggle('inactive');
      
   //  })
   //  btnAustralia.addEventListener('click', ()=> {
   //    capitulos.classList.remove('inactive');
   //    capAustralia.classList.toggle('inactive');

   //    imagenes.classList.remove('inactive')
   //    imgAustralia.classList.toggle('inactive');
      
   //  })
   //  btnHolanda.addEventListener('click', ()=> {
   //    capitulos.classList.remove('inactive');
   //    capHolanda.classList.toggle('inactive');

   //    imagenes.classList.remove('inactive')
   //    imgHolanda.classList.toggle('inactive');
      
   //  })
   //  btnCroacia.addEventListener('click', ()=> {
   //    capitulos.classList.remove('inactive');
   //    capCroacia.classList.toggle('inactive');

   //    imagenes.classList.remove('inactive')
   //    imgCroacia.classList.toggle('inactive');
      
   //  })
   //  btnFrancia.addEventListener('click', ()=> {
   //    capitulos.classList.remove('inactive');
   //    capFrancia.classList.toggle('inactive');

   //    imagenes.classList.remove('inactive')
   //    imgFrancia.classList.toggle('inactive');
      
   //  })
 
   
}