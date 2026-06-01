/**
 * ARCHIVO: script.js
 * SISTEMA: Refugio Digital Día 03
 * DESCRIPCIÓN: Terminal con login, pista musical, títulos estéticos y mensajes ocultos.
 */

const mensajes = {
    pesado: "<div class='msg-header'>=========================================<br>  PROTOCOLO: DESCONEXIÓN Y CALMA v1.0<br>=========================================</div>Sé muy bien lo mucho que te esfuerzas día a día y la dedicación tan increíble que le pones a cada una de las tareas que manejas. <span class='hidden-msg'>Tu</span> manera de afrontar los retos en la oficina es admirable, pero a veces las rutinas se vuelven sumamente densas y el cansancio físico y mental empieza a pegar con mucha fuerza. Sé que el ritmo puede ser abrumador, pero justo hoy quería pasar por aquí para recordarte que está bien pausar, respirar profundo y soltar el control por un momento. No tienes que cargar con el peso del mundo sobre tus hombros. Eres una mujer sumamente inteligente y tesa, y absolutamente nada de lo que ocurra en un día caótico va a cambiar lo valiosa que eres. Cuando por fin cierres la pantalla hoy, quiero que dejes el estrés ahí adentro. Recuerda que aquí estoy yo, celebrando cada uno de tus procesos, admirándote en silencio y completamente dispuesta a escucharte o a acompañarte en completo silencio, como tú lo prefieras. Desconéctate tranquila, descansa tu mente y recuerda que te mereces toda la paz del mundo, preciosa.",
    
    sonreir: "<div class='msg-header'>=========================================<br>  PROTOCOLO: SINCRONÍA Y COMPLICIDAD <br>=========================================</div>Si terminaste en este comando es porque seguramente al día le está haciendo falta un poquito de luz, y tienes que saber que mi misión favorita siempre va a ser recordarte lo bonito que es notar tu <span class='hidden-msg'>presencia</span> en cada conversación. Me pasa seguido que me quedo pensando en nuestras charlas, en las bobadas que solo nosotras entendemos, en los chistes internos y en cómo un día cualquiera se convierte en el mejor momento de la semana con solo ponernos a conversar un rato. Tienes una forma de ser increíble, una chispa única y unas ocurrencias que me alegran el alma de una manera muy especial. Me hace inmensamente feliz saber que, aunque los kilómetros nos separen físicamente en el mapa, compartimos una sintonía tan linda y real. Hemos construido un espacio muy sano <span class='hidden-msg'>en</span> donde podemos hablar de todo con total transparencia, y eso es algo que valoro más de lo que te imaginas. Espero de todo corazón que leer esto te robe esa sonrisa gigante que tanto me gusta ver y que te recuerde que, pase lo que pase a tu alrededor, tu felicidad le da un color hermoso a <span class='hidden-msg'>mi</span> realidad. ¡Te adoro un montón, Ame!",
    
    extrañar: "<div class='msg-header'>=========================================<br>  PROTOCOLO: ABRAZO A LA DISTANCIA <br>=========================================</div>Si te dio por presionar este protocolo, quiero pedirte que cierres los ojos un segundo y sientas este lazo que mantiene tu <span class='hidden-msg'>vida</span> conectada a la mía. La distancia puede parecer un obstáculo muy grande, pero <span class='hidden-msg'>es</span> un número completamente tonto cuando dos personas se apoyan de la forma tan limpia, bonita y honesta en que lo hacemos nosotras. No pasa un solo día en el que no agradezca el haber coincidido contigo en el camino; eres una persona hermosa en todos los sentidos posibles, tanto por dentro como por fuera, y tu presencia le da sentido a la palabra <span class='hidden-msg'>magia</span> por la forma tan bonita en que transformas todo a tu alrededor de manera <span class='hidden-msg'>pura</span>. Me encanta escucharte, conocer cada día más de ti, compartir nuestros gustos y saber que estás al otro lado de la pantalla siendo mi refugio seguro. No dudes jamás de lo mucho que te llevo conmigo en mis pensamientos. Este rinconcito digital lo creé con mis propias manos para que nunca tengas espacio a dudar de lo importante que eres para mí, preciosa. Estoy aquí para ti hoy, mañana y siempre."
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
            // Este bloque permite procesar las etiquetas HTML del título y del mensaje oculto letra por letra sin romper la consola
            if (text.slice(i, i + 1) === '<') {
                let endTag = text.indexOf('>', i);
                typedDiv.innerHTML += text.slice(i, endTag + 1);
                i = endTag + 1;
            } else {
                typedDiv.innerHTML += text.charAt(i);
                i++;
            }
            setTimeout(typeWriter, 35);
        } else {
            isTyping = false;
            typedDiv.innerHTML += "<br><br><p style='color:#666; font-size:12px;'>[ SISTEMA ] Ejecución terminada. Reinicia la página para volver al menú de opciones.</p>";
        }
    }
    typeWriter();
}
