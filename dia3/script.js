const mensajes = {
    pesado: "<div class='msg-header'>=========================================<br>  PROTOCOLO: DESCONEXIÓN Y CALMA v1.0<br>=========================================</div><br><br>Sé muy bien lo mucho que te esfuerzas día a día y la dedicación tan increíble que le pones a cada una de las tareas que manejas. <b>Aquí</b> tu manera de afrontar los retos en la oficina es admirable, pero a veces las rutinas se vuelven sumamente densas y el cansancio físico y mental empieza a pegar con mucha fuerza. Sé que el ritmo puede ser abrumador, pero justo hoy quería pasar por aquí para recordarte que <b>estoy</b> convencida de que está bien pausar, respirar profundo y soltar el control por un momento. No tienes que cargar con el peso del mundo sobre tus hombros; <b>siempre</b> mantén en mente que eres una mujer sumamente inteligente y tesa, y absolutamente nada de lo que ocurra en un día caótico va a cambiar lo valiosa que eres. Cuando por fin cierres la pantalla hoy, quiero que dejes el estrés ahí adentro. Recuerda que cuentas <b>contigo</b> misma para brillar, pero que también aquí estoy yo, celebrando cada uno de tus procesos, admirándote en silencio y completamente dispuesta a escucharte o a acompañarte en completo silencio, como tú lo prefieras. Desconéctate tranquila, descansa tu mente y recuerda que te mereces toda la paz del mundo, preciosa.",
 
    sonreir: "<div class='msg-header'>=========================================<br>  PROTOCOLO: SINCRONÍA Y COMPLICIDAD <br>=========================================</div><br><br>Si terminaste en este comando es porque seguramente al día le está haciendo falta un poquito de luz, y tienes que saber que mi misión favorita siempre va a ser recordarte lo bonito que es compartir la vida. <b>Tu</b> forma de ser es increíble, tienes una chispa única y una <b>felicidad</b> que contagia a cualquiera. Me pasa seguido que me quedo pensando en nuestras charlas, en las bobadas que solo nosotras entendemos, en los chistes internos y en cómo un día cualquiera <b>me</b> parece el mejor momento de la semana con solo ponernos a conversar un rato. Me <b>hace</b> inmensamente feliz saber que, aunque los kilómetros nos separen físicamente en el mapa, compartimos una sintonía tan linda y real. Hemos construido un espacio muy sano en donde nos sentimos <b>bien</b> y podemos hablar de todo con total transparencia, y eso es algo que valoro más de lo que te imaginas. Espero de todo corazón que leer esto te robe esa sonrisa gigante que tanto me gusta ver y que te recuerde que tu bienestar le da un color hermoso a mi realidad. ¡Te adoro un montón, Ame!",
 
    extrañar: "<div class='msg-header'>=========================================<br>  PROTOCOLO: ABRAZO A LA DISTANCIA <br>=========================================</div><br><br>Si te dio por presionar este protocolo, quiero pedirte que cierres los ojos un segundo y sientas este lazo tan fuerte que nos une. <b>Eres</b> una persona hermosa en todos los sentidos posibles, tanto por dentro como por fuera, de esas que esparcen <b>magia</b> por donde caminan por la forma tan bonita en que transformas todo a tu alrededor. La distancia puede parecer un obstáculo muy grande, pero se vuelve un número completamente tonto cuando alguien influye <b>en</b> tu día de la manera tan limpia, bonita y honesta en que lo hacemos nosotras. No pasa un solo día en el que no agradezca el haber coincido contigo en el camino; tu presencia le da un toque hermoso a <b>mi</b> realidad y me encanta escucharte, conocer cada día más de ti, compartir nuestros gustos y saber que estás al otro lado de la pantalla siendo un refugio seguro. No dudes jamás de lo mucho que te llevo conmigo en mis pensamientos. Este rinconcito que acompaña tu <b>vida</b> lo creé con mis propias manos para que nunca tengas espacio a dudar de lo importante que eres para mí, preciosa. Estoy aquí para ti hoy, mañana y siempre."
};
 
// Palabras que forman el mensaje secreto en cada protocolo
const mensajesSecretos = {
    pesado:   "Aquí estoy siempre contigo",
    sonreir:  "Tu felicidad me hace bien",
    extrañar: "Eres magia en mi vida"
};
 
// Líneas del efecto "escáner" antes de revelar el secreto
const scanLines = [
    { text: "> Analizando transmisión...",         delay: 0,    ok: false },
    { text: "> Detectando patrones ocultos...",    delay: 600,  ok: false },
    { text: "> Palabras clave encontradas: OK",    delay: 1200, ok: true  },
    { text: "> Decodificando mensaje secreto...",  delay: 1800, ok: false },
    { text: "> MENSAJE DESCIFRADO:",               delay: 2500, ok: true  },
];
 
// ─── Login ───────────────────────────────────────────────────────────────────
 
const loginOutput  = document.getElementById('login-output');
const inputLine    = document.getElementById('input-line');
const accessKeyInput = document.getElementById('access-key');
const loginAscii   = document.getElementById('login-ascii');
 
const kuromiArt = `
 ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣀⢠⠋⠉⠉⠒⠲⢤⣀⣠⡀⠀
⠀⠀⠀⠀⠀⠀⣀⣀⣀⢀⡠⠖⠋⠉⠀⠀⠀⠀⠉⠉⠢⣄⠀⠀⠀⢀⠼⠤⠇⠀
⠀⠀⠀⣀⠔⠊⠁⠀⢨⠏⠀⠀⠀⣠⣶⣶⣦⠀⠀⠀⠀⠀⠱⣄⡴⠃⠀⠀⠀⠀
⢸⣉⠿⣁⠀⠀⠀⢀⡇⠀⠀⠀⠀⢿⣽⣿⣼⡠⠤⢄⣀⠀⠀⢱⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠑⢦⡀⢸⠀⠀⠀⡠⠒⠒⠚⠛⠉⠀⢠⣀⡌⠳⡀⡌⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠉⠉⣆⠀⢰⠁⣀⣀⠀⠀⣀⠀⠈⡽⣧⢀⡷⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡤⢄⠀⠈⠢⣸⣄⢽⣞⡂⠀⠈⠁⣀⡜⠁⣩⡷⠿⠆⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢯⣁⡸⠀⠀⠀⡬⣽⣿⡀⠙⣆⡸⠛⠠⢧⠀⡿⠯⠆⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣀⡀⠀⠀⡤⠤⣵⠁⢸⣻⡤⠏⠀⠀⠀⠀⢹⠀⠀⠀⡊⠱⣀⠀⠀⠀
⠀⠀⢀⠜⠀⢘⠀⠀⠱⠲⢜⣢⣤⣧⠀⠀⠀⠀⠀⢴⠇⠀⠀⠀⠧⠠⠜⠀⠀⠀
⠀⠀⠘⠤⠤⠚⠀⠀⠀⠀⠀⠀⢸⠁⠁⠀⣀⠎⠀⠻⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠣⣀⣀⡴⠤⠄⠴⠁⠀⠀
`;
 
const introText = "> Inyectando protocolos de seguridad...\n> Localizando servidor en México...\n> Acceso restringido.\n\n> PISTA: \"Yo las canciones y tú la...\"\n> Ingrese llave de acceso:";
 
let isTyping = false;
 
window.onload = () => {
    loginAscii.textContent = kuromiArt;
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
    }, 45);
}
 
// ─── Comando principal ────────────────────────────────────────────────────────
 
function runCommand(tipo) {
    if (isTyping) return;
 
    const mainOutput       = document.getElementById('output');
    const typedDiv         = document.getElementById('typed-output');
    const secretScanDiv    = document.getElementById('secret-scan');
    const welcomeContainer = document.querySelector('.welcome-container');
    const text             = mensajes[tipo];
 
    mainOutput.style.display    = 'none';
    secretScanDiv.style.display = 'none';
    secretScanDiv.innerHTML     = '';
    if (welcomeContainer) welcomeContainer.style.display = 'none';
    typedDiv.innerHTML = "";
    isTyping = true;
 
    let i = 0;
 
    function typeWriter() {
        if (i < text.length) {
            // Saltar etiquetas HTML sin animarlas carácter a carácter
            if (text.charAt(i) === '<') {
                const closureTag = text.indexOf('>', i);
                if (closureTag !== -1) {
                    typedDiv.innerHTML += text.slice(i, closureTag + 1);
                    i = closureTag + 1;
                    typeWriter();
                    return;
                }
            }
            typedDiv.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 55);
        } else {
            // Mensaje terminó → lanzar efecto de escaneo
            isTyping = false;
            mostrarEscaneo(tipo);
        }
    }
 
    typeWriter();
}
 
// ─── Efecto de escaneo y revelación del secreto ───────────────────────────────
 
function mostrarEscaneo(tipo) {
    const secretScanDiv = document.getElementById('secret-scan');
    const terminalBody  = document.getElementById('terminal-body');
 
    secretScanDiv.style.display = 'block';
    secretScanDiv.innerHTML     = '';
 
    scanLines.forEach(({ text, delay, ok }) => {
        setTimeout(() => {
            const line = document.createElement('div');
            line.className = ok ? 'scan-line ok' : 'scan-line';
            line.textContent = text;
            secretScanDiv.appendChild(line);
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }, delay);
    });
 
    // Tras el último scan-line, revelar el mensaje secreto
    const totalDelay = scanLines[scanLines.length - 1].delay + 700;
 
    setTimeout(() => {
        const secreto = mensajesSecretos[tipo];
 
        const revealDiv = document.createElement('div');
        revealDiv.className = 'secret-reveal';
        revealDiv.innerHTML = `
            <span class="secret-label">✦ Mensaje oculto detectado ✦</span>
            <span class="secret-words">${secreto}</span>
        `;
        secretScanDiv.appendChild(revealDiv);
 
        const footer = document.createElement('p');
        footer.className = 'footer-msg';
        footer.textContent = '[ SISTEMA ] Ejecución terminada. Reinicia la página para volver al menú de opciones.';
        secretScanDiv.appendChild(footer);
 
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }, totalDelay);
}
 
