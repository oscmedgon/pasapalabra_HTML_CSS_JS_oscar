
var questions = [
    { letter: "a", answer: "a", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { letter: "b", answer: "a", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { letter: "c", answer: "a", status: 0, question: ("CON LA C. Niño, crío, bebé") },
    { letter: "d", answer: "a", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
    { letter: "e", answer: "a", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
    { letter: "f", answer: "a", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
    { letter: "g", answer: "a", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
    { letter: "h", answer: "a", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
    { letter: "i", answer: "a", status: 0, question: ("CON LA I. Templo cristiano") },
    { letter: "j", answer: "a", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
    { letter: "k", answer: "a", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
    { letter: "l", answer: "a", status: 0, question: ("CON LA L. Hombre lobo") },
    { letter: "m", answer: "a", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
    { letter: "n", answer: "a", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
    { letter: "ñ", answer: "armiño", status: 0, question: ("CONTIENE LA Ñ. Es un druida de Skellige. Fue consejero del rey Bran de Skellige") },
    { letter: "o", answer: "a", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
    { letter: "p", answer: "a", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
    { letter: "q", answer: "a", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
    { letter: "r", answer: "a", status: 0, question: ("CON LA R. Roedor") },
    { letter: "s", answer: "a", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
    { letter: "t", answer: "a", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
    { letter: "u", answer: "a", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
    { letter: "v", answer: "a", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
    { letter: "w", answer: "a", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
    { letter: "x", answer: "a", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
    { letter: "y", answer: "a", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    { letter: "z", answer: "a", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
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
var pos2 = 1;
var myAnswer = "";
var aciertos = 0;
var fallos = 0;
var music = true;
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
function nameReq(){

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
        nombre = document.getElementById("respuesta").value
        console.log(nombre)
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


