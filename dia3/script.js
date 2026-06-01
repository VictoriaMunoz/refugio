/**
 * ARCHIVO: script.js
 * SISTEMA: Refugio Digital Día 03
 * DESCRIPCIÓN: Terminal con login, pista musical, títulos estéticos y tres frases ocultas independientes.
 */

const mensajes = {
    pesado: "<div class='msg-header'>=========================================<br>  PROTOCOLO: DESCONEXIÓN Y CALMA v1.0<br>=========================================</div><br><br>Sé muy bien lo mucho que te esfuerzas día a día y la dedicación tan increíble que le pones a cada una de las tareas que manejas. <span class='hidden-msg'>Aquí</span> tu manera de afrontar los retos en la oficina es admirable, pero a veces las rutinas se vuelven sumamente densas y el cansancio físico y mental empieza a pegar con mucha fuerza. Sé que el ritmo puede ser abrumador, pero justo hoy quería pasar por aquí para recordarte que <span class='hidden-msg'>estoy</span> convencida de que está bien pausar, respirar profundo y soltar el control por un momento. No tienes que cargar con el peso del mundo sobre tus hombros; <span class='hidden-msg'>siempre</span> mantén en mente que eres una mujer sumamente inteligente y tesa, y absolutamente nada de lo que ocurra en un día caótico va a cambiar lo valiosa que eres. Cuando por fin cierres la pantalla hoy, quiero que dejes el estrés ahí adentro. Recuerda que cuentas <span class='hidden-msg'>contigo</span> misma para brillar, pero que también aquí estoy yo, celebrando cada uno de tus procesos, admirándote en silencio y completamente dispuesta a escucharte o a acompañarte en completo silencio, como tú lo prefieras. Desconéctate tranquila, descansa tu mente y recuerda que te mereces toda la paz del mundo, preciosa.",
    
    sonreir: "<div class='msg-header'>=========================================<br>  PROTOCOLO: SINCRONÍA Y COMPLICIDAD <br>=========================================</div><br><br>Si terminaste en este comando es porque seguramente al día le está haciendo falta un poquito de luz, y tienes que saber que mi misión favorita siempre va a ser recordarte lo bonito que es compartir la vida. <span class='hidden-msg'>Tu</span> forma de ser es increíble, tienes una chispa única y una <span class='hidden-msg'>felicidad</span> que contagia a cualquiera. Me pasa seguido que me quedo pensando en nuestras charlas, en las bobadas que solo nosotras entendemos, en los chistes internos y en cómo un día cualquiera <span class='hidden-msg'>me</span> parece el mejor momento de la semana con solo ponernos a conversar un rato. Me <span class='hidden-msg'>hace</span> inmensamente feliz saber que, aunque los kilómetros nos separen físicamente en el mapa, compartimos una sintonía tan linda y real. Hemos construido un espacio muy sano en donde nos sentimos <span class='hidden-msg'>bien</span> y podemos hablar de todo con total transparencia, y eso es algo que valoro más de lo que te imaginas. Espero de todo corazón que leer esto te robe esa sonrisa gigante que tanto me gusta ver y que te recuerde que tu bienestar le da un color hermoso a mi realidad. ¡Te adoro un montón, Ame!",
    
    extrañar: "<div class='msg-header'>=========================================<br>  PROTOCOLO: ABRAZO A LA DISTANCIA <br>=========================================</div><br><br>Si te dio por presionar este protocolo, quiero pedirte que cierres los ojos un segundo y sientas este lazo tan fuerte que nos une. <span class='hidden-msg'>Eres</span> una persona hermosa en todos los sentidos posibles, tanto por dentro como por fuera, de esas que esparcen <span class='hidden-msg'>magia</span> por donde caminan por la forma tan bonita en que transformas todo a tu alrededor. La distancia puede parecer un obstáculo muy grande, pero se vuelve un número completamente tonto cuando alguien influye <span class='hidden-msg'>en</span> tu día de la manera tan limpia, bonita y honesta en que lo hacemos nosotras. No pasa un solo día en el que no agradezca el haber coincidido contigo en el camino; tu presencia le da un toque hermoso a <span class='hidden-msg'>mi</span> realidad y me encanta escucharte, conocer cada día más de ti, compartir nuestros gustos y saber que estás al otro lado de la pantalla siendo un refugio seguro. No dudes jamás de lo mucho que te llevo conmigo en mis pensamientos. Este rinconcito que acompaña tu <span class='hidden-msg'>vida</span> lo creé con mis propias manos para que nunca tengas espacio a dudar de lo importante que eres para mí, preciosa. Estoy aquí para ti hoy, mañana y siempre."
};

const loginOutput = document.getElementById('login-output');
const inputLine = document.getElementById('input-line');
const accessKeyInput = document.getElementById('access-key');

const introText = "> Inyectando protocolos de seguridad...\n> Localizando servidor en México...\n> Acceso restringido.\n\n> PISTA: \"Yo las canciones y tú la...\"\n> Ingrese llave de acceso:";

let isTyping = false;

window.onload = () => {
    typeEffect(introText, loginOutput, () => {
        inputLine.style.display = 'block';
        accessKeyInput.focus();
    });
};

accessKeyInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        validarAcceso(this.value.toLowerCase().trim());
    }
});

function validarAcceso(key) {
    if (key === 'magia') { 
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-interface').style.display = 'block';
    } else {
        alert("Acceso denegado. Revisa la letra de la canción e intenta de nuevo.");
        accessKeyInput.value = "";
    }
}

function typeEffect(text, container, callback) {
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            container.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            if (callback) callback();
        }
    }, 35);
}

function runCommand(tipo) {
    if (isTyping) return;
    
    const mainOutput = document.getElementById('output');
    const typedDiv = document.getElementById('typed-output');
    const ascii = document.getElementById('ascii-art');
    const text = mensajes[tipo];
    
    mainOutput.style.display = 'none';
    ascii.style.display = 'none';
    typedDiv.innerHTML = "";
    isTyping = true;

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            // DETECTAR ETIQUETAS HTML COMPLETAS (Evita que se rompa el diseño y renderiza los estilos al instante)
            if (text.charAt(i) === '<') {
                let cierreTag = text.indexOf('>', i);
                if (cierreTag !== -1) {
                    typedDiv.innerHTML += text.slice(i, cierreTag + 1);
                    i = cierreTag + 1;
                    setTimeout(typeWriter, 10); // Procesa la etiqueta rápido y sigue
                    return;
                }
            }
            
            typedDiv.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 30);
        } else {
            isTyping = false;
            typedDiv.innerHTML += "<br><br><p style='color:#666; font-size:12px;'>[ SISTEMA ] Ejecución terminada. Reinicia la página para volver al menú de opciones.</p>";
        }
    }
    typeWriter();
}
