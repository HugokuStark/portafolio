const seccionesPagina = new fullpage(`#fullpage`,{
	//   :::::: Barra de navegación
	// ──────────────────────────────────────────────────
		 navigation: true, // Muesta la barra de navegación.
		 menu: '#menu', // Menu de navegación.
		 anchors: ['Inicio', 'Estudios', 'Trabajo', 'Acerca'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
		 navigationTooltips: ['Inicio', 'Estudios', 'Trabajo', 'Acerca de mi'], // Tooltips que mostrara por cada boton.
		 showActiveTooltip: false, // Mostrar tooltip activa.
	// ──────────────────────────────────────────────────

	//   :::::: Secciones
	// ──────────────────────────────────────────────────
		 sectionsColor : ['#4f2361', '#4f2361', '#4f2361','#7f5281'], // Color de fondo de cada seccion.
		 verticalCentered: false, // Si alineara de forma vertical los contenidos de cada seccion.
	// ──────────────────────────────────────────────────

	//   :::::: Slides
	// ──────────────────────────────────────────────────
		 controlArrows: true, // Flechas del slide
		 slidesNavigation: false, // Indicadores del slide
	// ──────────────────────────────────────────────────
	//   :::::: Animaciones (Callbacks de FullPage.js)
	// ──────────────────────────────────────────────────

	afterLoad: function(origin,destination){
if(destination.anchor==`Acerca`){
document.querySelector(`.footer h2`) .style.opacity=1;
	}
}
});









//javascript letras type

// function([string1, string2],target id,[color1,color2])    
 consoleText(['HOLA,BIENVENIDO.', 'SOY PROGRAMADOR', 'SOY DESARROLADOR DE SOFTWARE'], 'text',['tomato','orange','lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}