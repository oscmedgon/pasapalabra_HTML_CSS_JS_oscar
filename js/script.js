var questions = [
{ letter: "A", answer: "aedirn", status: 0, question: ("CON LA A. Uno de los Reinos del Norte cuya capital es Vengergerg.") },
{ letter: "B", answer: "brujo", status: 0, question: ("CON LA B. Un individuo que ha pasado por un extensivo entrenamiento y misteriosos rituales con el fin de convertirlo en un cazador de monstruos errante a sueldo.") },
{ letter: "C", answer: "ciri", status: 0, question: ("CON LA C. Última hija de la vieja sangre que se conoce con vida.") },
{ letter: "D", answer: "driada", status: 0, question: ("CON LA D. Raza de mujeres guerreras que habitan en el bosque de Brokilon.") },
{ letter: "E", answer: "emhyr", status: 0, question: ("CON LA E. Emperador, también conocido como la llama blanca que danza sobre la tumba de sus enemigos.") },
{ letter: "F", answer: "francesca", status: 0, question: ("CON LA F. Nombre de la elfa y hechicera que reina en Dol Blathanna.") },
{ letter: "G", answer: "geralt", status: 0, question: ("CON LA G. Nombre del protagonista de la saga.") },
{ letter: "H", answer: "henselt", status: 0, question: ("CON LA H. Rey de Kaedwen.") },
{ letter: "I", answer: "imlerith", status: 0, question: ("CON LA I. Comandante de la cacería salvaje, cuyo punto debil son su ego y los placeres carnales.") },
{ letter: "J", answer: "jaskier", status: 0, question: ("CON LA J. Habilidoso y atractivo bardo, bien conocido por la danza de sus manos sobre el laud y con gran éxito con las mujeres.") },
{ letter: "K", answer: "kaer morhen", status: 0, question: ("CON LA K. Nombre compuesto de la fortaleza utilizada por la escuela del lobo.") },
{ letter: "L", answer: "leshen", status: 0, question: ("CON LA L. Monstruo que habita en los bosques y que pueden controlar la naturaleza a su alrededor.") },
{ letter: "M", answer: "mahakam", status: 0, question: ("CON LA M. Región independiente famosa por sus minas y sus forjas.") },
{ letter: "N", answer: "novigrado", status: 0, question: ("CON LA N. Ciudad libre dentro de la region de redania.") },
{ letter: "Ñ", answer: "armiño", status: 0, question: ("CONTIENE LA Ñ. Es un druida de Skellige. Fue consejero del rey Bran de Skellige.") },
{ letter: "O", answer: "oxenfurt", status: 0, question: ("CON LA O. Ciudad famosa por albergar la mayor academia de los reinos del norte.") },
{ letter: "P", answer: "pontar", status: 0, question: ("CON LA P. Es uno de los mayores ríos de los reinos del norte y hace de frontera entre los reinos de Redania y Kaedwen.") },
{ letter: "Q", answer: "quen", status: 0, question: ("CON LA Q. Hechizo menor o señal utilizado como protección.") },
{ letter: "R", answer: "radovid", status: 0, question: ("CON LA R. Rey conocido como el severo, por sus estrictos y a veces sangrientos métodos.") },
{ letter: "S", answer: "skellige", status: 0, question: ("CON LA S. Conjunto de íslas conocida por sus saqueadores y piratas.") },
{ letter: "T", answer: "triss", status: 0, question: ("CON LA T. Hechicera especializada en sanación, que también fue consejera real.") },
{ letter: "U", answer: "uma", status: 0, question: ("CON LA U. Nombre del enano deforme, llamado así ya que es la única palabra que sabe pronunciar.") },
{ letter: "V", answer: "vesemir", status: 0, question: ("CON LA V. Es miembro más antiguo y experimentado de la escuela del lobo.") },
{ letter: "W", answer: "wyverno", status: 0, question: ("CON LA W. Munstruo dracónido, a menudo confundido con un dragon, a pesar de ser mucho más pequeño.") },
{ letter: "X", answer: "axia", status: 0, question: ("CONTIENE LA X. Señal de mucha utilidad cuando quieres información sin golpear a nadie.") },
{ letter: "Y", answer: "yennefer", status: 0, question: ("CONTIENE LA Y. Hechicera conocida por sus rizos negros como el ala de un cuervo.") },
{ letter: "Z", answer: "zerrikania", status: 0, question: ("CON LA Z. Tierra lejana y exótica, famosa por sus desiertos y sus sables.") },
]
var leaderboard = [
{ name: "Geralt" , ok: 10 ,  nok: 17 },
{ name: "Yennefer" , ok: 24 ,  nok: 3 },
{ name: "Ciri" , ok: 25 ,  nok: 2 },
{ name: "Eskel" , ok: 1  ,  nok: 26 },
]
var stop = 0;
var nombre = "";
var myAnswer = "";
var aciertos = 0;
var fallos = 0;
var music = true;
//----------------------Muestra la clasificación en pantalla
function clasi(){
    var ordered = (leaderboard.sort(function (a, b) {
        return b.ok - a.ok;
    }));
    for(i = 0 ; i < ordered.length ; i++){
        document.getElementById("clas" + (i +1)).innerHTML = "<td>" + (i +1) + "</td>" + "<td>" + ordered[i].name + "</td>" + "<td>" + ordered[i].ok + "</td>" + "<td>" + ordered[i].nok + "</td>" + "<td>" + "N/A" + "</td>"
        console.log(ordered[i].name , "está en el puesto" , i+1 , "de la clasificación con", ordered[i].ok , "aciertos y" , ordered[i].nok , "fallos.")
    }
}
//----------------------Música de fondo
function musicSW(){
    if(music === true){
        music = false;
        document.getElementById("music").innerHTML = "<button onclick='musicSW()'' value='off' id='musicSW'><img src='img/sound_off.png' width='80'/></button>"
    } else if(music === false){
        music = true;
        document.getElementById("music").innerHTML = "<button onclick='musicSW()'' value='on' id='musicSW'><img src='img/sound_on.png' width='80'/></button><audio autoplay loop><source src='sound/background_music.mp3' type='audio/mpeg'>Tu navegador no soporta este tipo de música</audio>"
    }
}
//----------------------Esta función entra en juego cuando pulsas el boton de NUEVA PARTIDA
function introNext(){
    countdown();
    stop = 0;
    nombre = "";
    myAnswer = "";
    aciertos = 0;
    fallos = 0;
    gameZone.setAttribute("class", "not_hidden");
    nombre = document.getElementById("nameCK").value
    cardGenerator()
    introStop()

}
//---------------------Función que genera todas las tarjetas del juego y les asigna id y class
function cardGenerator(){
    var cards = []
    for(var i = 0 ; i < questions.length; i++){
        cards.push("<div id='card" + i + "' onclick='launchQuestion("+ i +")'><p class='letra'>" + questions[i].letter + "</p><img src='img/card.png' width='100%'></div>")
        
    }
    document.getElementById("cards").innerHTML = cards
}
//--------------------Función que lanza la pregunta a la zona de juego.
function launchQuestion(n1){
    document.getElementById("questionZone").innerHTML = "<p class='cardTitle'>" + questions[n1].question +".</p><input type='text' id='respuesta' placeholder='Introduce tu respuesta'><br><img src='img/validate.png' width='30%' onclick='validar(" + n1 +")'>"
}

//--------------------Función que valida las respuestas enviadas por el usuario.
function validar(p1){
    myAnswer = (document.getElementById("respuesta").value).toLowerCase();
    if(myAnswer === questions[p1].answer){
        document.getElementById("card" + p1).innerHTML = "<div id='card" + p1 + "'><p class='letra'>" + questions[p1].letter + "</p><img src='img/card_ok.png' width='100%'></div>"
        aciertos +=1;
        gameStatus();
    } else{
        document.getElementById("card" + p1).innerHTML = "<div id='card" + p1 + "'><p class='letra'>" + questions[p1].letter + "</p><img src='img/card_nok.png' width='100%'></div>"
        fallos +=1;
        gameStatus();
    }
}
//--------------------Función que para el juego en el momento que el jugador para la partida o el tiempo se termina
function stopGame(){
    if(stop === 0){
        stop +=1;
    }
    if (stop === 1) {
        stop += 1;
        document.getElementById("questionZone").innerHTML = "<p class='cardTitle'>" + nombre + " Has detenido el juego estas son tus estadísticas aunque no van a ser almacenadas en la clasificación.</p><p>Aciertos: " + aciertos + "<br>Fallos:" + fallos + ". </p>"
    } else if (stop === 2) {
        gameZone.setAttribute("class", "hidden");
         document.getElementById("questionZone").innerHTML = ""
         cards.setAttribute("class", "");
    }
}
function stopGameTimeout(){
        stop +=2;
        document.getElementById("questionZone").innerHTML = "<p class='cardTitle'>" + nombre + " Se ha agotado el tiempo, estas son tus estadísticas, puedes comprobar tu clasificación en el inicio, pulsa el boton de salir.</p><p>Aciertos: " + aciertos + "<br>Fallos:" + fallos + ". </p>"
        leaderboard.push({name : nombre, ok: aciertos, nok: fallos})
        cards.setAttribute("class", "hidden");
}
//--------------------Función temporizador
var seconds;
var temp;

function countdown() {
    seconds = document.getElementById('clock_timer').innerHTML;
    seconds = parseInt(seconds, 10);

    if (seconds == 1) {
      temp = document.getElementById('clock_timer');
      temp.innerHTML = "Tiempo agotado";
      stopGameTimeout()
      return;
  }

  seconds--;
  temp = document.getElementById('clock_timer');
  temp.innerHTML = seconds + " segundos  restantes";
  timeoutMyOswego = setTimeout(countdown, 1000);
} 

// 
//--------------------Resto de funciones
function salute(){
    instructions.setAttribute("class", "not_hidden");
}
function introStop(){
    instructions.setAttribute("class", "hidden");
}
function about(){
    social.setAttribute("class", "not_hidden");
}
function aboutStop(){
    social.setAttribute("class", "hidden");
}
function tablon(){
    tabOpen.setAttribute("class", "not_hidde");
    clasi();
}
function closeClas(){
    tabOpen.setAttribute("class", "hidden");
}
function gameStatus(){
    if ((aciertos + fallos) !== 27 ) {
        document.getElementById("questionZone").innerHTML = "<p class='cardTitle'>" + nombre + " estas son tus estadísticas actuales.</p><p>Aciertos: " + aciertos + "<br>Fallos:" + fallos + ". </p>"
    } else if((aciertos + fallos) === 27 ){
        document.getElementById("questionZone").innerHTML = "<p class='cardTitle'>" + nombre + " estas son tus estadísticas finales.</p><p>Aciertos: " + aciertos + "<br>Fallos:" + fallos + ". </p>"
        leaderboard.push({ name: nombre , ok: aciertos  ,  nok: fallos })
    }
}
