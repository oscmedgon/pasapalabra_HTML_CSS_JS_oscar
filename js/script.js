var questions = [
    { letter: "A", answer: "aedirn", status: 0, question: ("CON LA A. Uno de los Reinos del Norte cuya capital es Vengergerg.") },
    { letter: "B", answer: "brujo", status: 0, question: ("CON LA B. Un individuo que ha pasado por un extensivo entrenamiento y misteriosos rituales con el fin de convertirlo en un cazador de monstruos errante a sueldo.") },
    { letter: "C", answer: "ciri", status: 0, question: ("CON LA C. Última hija de la vieja sangre que se conoce con vida.") },
    { letter: "D", answer: "driada", status: 0, question: ("CON LA D. Raza de mujeres guerreras que habitan en el bosque de Brokilon.") },
    { letter: "E", answer: "Emhyr", status: 0, question: ("CON LA E. Emperador, también conocido como la llama blanca que danza sobre sus enemigos.") },
    { letter: "F", answer: "francesca", status: 0, question: ("CON LA F. Nombre de la elfa y hechicera que reina en Dol Blathanna.") },
    { letter: "G", answer: "geralt", status: 0, question: ("CON LA G. Nombre del protagonista de la saga.") },
    { letter: "H", answer: "henselt", status: 0, question: ("CON LA H. Rey de Kaedwen.") },
    { letter: "I", answer: "imlerith", status: 0, question: ("CON LA I. Comandante de la caceria salvaje, cuyo punto debil son su ego y los placeres carnales.") },
    { letter: "J", answer: "jaskier", status: 0, question: ("CON LA J. Habilidoso y atractivo bardo, bien conocido por la danza de sus manos sobre el laud y con gran éxito con las mujeres.") },
    { letter: "K", answer: "kaher morhen", status: 0, question: ("CON LA K. Nombre compuesto de la fortaleza utilizada por la escuela del lobo.") },
    { letter: "L", answer: "leshen", status: 0, question: ("CON LA L. Monstruo que habita en los bosques y que pueden controlar la naturaleza a su alrededor.") },
    { letter: "M", answer: "mahakam", status: 0, question: ("CON LA M. Región independiente famosa por sus minas y sus forjas.") },
    { letter: "N", answer: "novigrado", status: 0, question: ("CON LA N. Ciudad libre dentro de la region de redania.") },
    { letter: "Ñ", answer: "armiño", status: 0, question: ("CONTIENE LA Ñ. Es un druida de Skellige. Fue consejero del rey Bran de Skellige.") },
    { letter: "O", answer: "oxenfurt", status: 0, question: ("CON LA O. Ciudad famosa por alvergar la mayor academia de los reinos del norte.") },
    { letter: "P", answer: "pontar", status: 0, question: ("CON LA P. Es uno de los mayores ríos de los reinos del norte y hace de frontera entre los reinos de Redania y Kaedwen.") },
    { letter: "Q", answer: "quen", status: 0, question: ("CON LA Q. Hechizo menor o señal utilizado como protección.") },
    { letter: "R", answer: "radovid", status: 0, question: ("CON LA R. Rey conocido como el severo, por sus estrictos y a veces sangrientos métodos.") },
    { letter: "S", answer: "skellige", status: 0, question: ("CON LA S. Conjunto de íslas conocida por sus saqueadores y piratas.") },
    { letter: "T", answer: "triss", status: 0, question: ("CON LA T. Hechicera especializada en sanación, que también fué consejera real.") },
    { letter: "U", answer: "uma", status: 0, question: ("CON LA U. Nombre del enano deforme, llamado así ya que es la única palabra que sabe pronunciar.") },
    { letter: "V", answer: "vesemir", status: 0, question: ("CON LA V. Es miembro más antiguo y experimentado de la escuela del lobo.") },
    { letter: "W", answer: "wyverno", status: 0, question: ("CON LA W. Munstruo draconido, a menudo confundido con un dragon, a pesar de ser mucho más pequeño.") },
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
var nombre = "";
var firstRun = true;
var pos = 0;
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
    gameZone.setAttribute("class", "not_hidden");
    nombre = document.getElementById("nameCK").value
    console.log(nombre)
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
        document.getElementById("questionZone").innerHTML = "<div></div>"
    } else{
        document.getElementById("card" + p1).innerHTML = "<div id='card" + p1 + "'><p class='letra'>" + questions[p1].letter + "</p><img src='img/card_nok.png' width='100%'></div>"
        document.getElementById("questionZone").innerHTML = "<div></div>"
    }
}
//--------------------Resto de funciones
function salute(){
    instructions.setAttribute("class", "not_hidden");
}
function introStop(){
    instructions.setAttribute("class", "hidden");
}
function tablon(){
    tabOpen.setAttribute("class", "not_hidde");
    clasi();
}
function closeClas(){
    tabOpen.setAttribute("class", "hidden");
}
function submit(){    
    if (firstRun === true){
        document.getElementById("pregunta").innerHTML = "Hola " + nombre + " tienes 160 segundos para responder a todas las preguntas, aquí tienes la primera." + "</br>" + questions[pos].question
        respuesta = (document.getElementById("respuesta").value)
        firstRun = 2;
    } else if( firstRun = 2){
        game();
        
    }
}
function game(){
    if (fallos + aciertos === 27){
            GameStart = false;
            document.getElementById("pregunta").innerHTML = "has terminado con " + aciertos + " aciertos y " + fallos + " fallos."
            leaderboard.push({name: nombre, ok : aciertos, nok: fallos})
            clasi();
    } else {
        if(pos === 27){
            pos =0;
        }
        if(pos2 === 27){
            pos2 = 0;
        }
        while(questions[pos2].status === true){
            pos2 +=1
        };
        if(questions[pos].status === 0){
            document.getElementById("pregunta").innerHTML = (questions[pos].question);
            var myAnswer = document.getElementById("respuesta").value.toLowerCase()
            if(myAnswer === "end"){
                document.getElementById("pregunta").innerHTML = "Has detenido el juego, no se ha guardado tu puntuación"
                GameStart = false;
            } else{
            if (myAnswer === "pasapalabra"){
                selector()
                pos +=1;
                pos2 +=1
                
            } else if(myAnswer === questions[pos].answer){
                aciertos += 1;
                questions[pos].status = true;
                document.getElementById("pregunta").innerHTML = ("Respuesta correcta, vamos a por la siguiente" + "</br>" + questions[pos2].question)
                pos +=1;
                pos2 +=1
            } else{
                fallos += 1;
                questions[pos].status = false;
                document.getElementById("pregunta").innerHTML = ("Respuesta incorrecta, más suerte con la siguiente" + "</br>" + questions[pos2].question)
                pos +=1;
            }
            }
        } else{
                pos +=1;
        }
    }
    document.getElementById("ok").innerHTML = aciertos;


var respuesta = "";
function firstSteps(){
    document.getElementById("pregunta").innerHTML = "Hola vaquero, se que tienes muchas ganas de jugar al pasapalabra, pero antes dinos tu nombre, escribe tu nombre y pulsa enter.";
}
}
function newGame(){
    zone1.setAttribute("class", "no_show");
    zone3.setAttribute("class", "show");
}


