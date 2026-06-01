const mensajes = {
    pesado: "Sé muy bien lo mucho que te esfuerzas día a día y la dedicación tan increíble que le pones a cada una de las tareas que manejas. A veces las rutinas se vuelven sumamente densas, las responsabilidades se acumulan en la oficina y el cansancio físico y mental empieza a pegar con mucha fuerza. Sé que el ritmo puede ser abrumador, pero justo hoy quería pasar por aquí para recordarte que está bien pausar, que está bien respirar profundo y soltar el control de las cosas por un momento. No tienes que ser fuerte ni perfecta todo el tiempo, ni cargar con el peso del mundo sobre tus hombros. Eres una mujer sumamente inteligente, capaz y tesa en todo lo que haces, y absolutamente nada de lo que ocurra en un día caótico de trabajo va a cambiar lo valiosa e importante que eres. Cuando por fin cierres la pantalla hoy, quiero que dejes el estrés ahí adentro. Recuerda que aquí estoy yo, celebrando cada uno de tus procesos, admirándote en silencio y completamente dispuesta a escucharte si quieres desahogarte o a acompañarte sin decir una sola palabra si prefieres descansar. Desconéctate con total tranquilidad, descansa tu mente y recuerda que te mereces toda la paz del mundo.",
    
    sonreir: "Si terminaste en este comando es porque seguramente al día le está haciendo falta un poquito de luz, y tienes que saber que mi misión favorita siempre va a ser recordarte lo bonito que es compartir la vida contigo. Me pasa seguido que me quedo pensando en nuestras charlas, en las bobadas que solo nosotras entendemos, en los chistes internos y en cómo un día que parecía completamente ordinario se convierte en el mejor momento de la semana con solo ponernos a conversar un rato. Tienes una forma de ser increíble, una chispa única y unas ocurrencias que me alegran el alma de una manera muy especial. Me hace inmensamente feliz saber que, aunque los kilómetros nos separen físicamente en el mapa, compartimos una sintonía tan linda y real. Hemos construido una complicidad y una amistad tan sana, donde podemos hablar de todo con total transparencia, y eso es algo que valoro más de lo que te imaginas. Espero de todo corazón que leer esto te robe esa sonrisa gigante que tanto me gusta ver y que te recuerde que, pase lo que pase a tu alrededor, tu felicidad le da un color hermoso a mis días. ¡Te adoro un montón y aquí estoy siempre para recordártelo!",
    
    extrañar: "Si te dio por presionar este protocolo, quiero pedirte que cierres los ojos un segundo y sientas el abrazo tan fuerte, sincero y lleno de cariño que te estoy mandando desde el fondo de mi alma. La distancia puede parecer un obstáculo muy grande en el papel, pero se vuelve un número completamente tonto cuando dos personas se quieren, se cuidan y se apoyan de la forma tan limpia, bonita y honesta en que lo hacemos nosotras. No pasa un solo día en el que no agradezca el haber coincidido contigo en el camino; eres una persona hermosa en todos los sentidos posibles, tanto por dentro como por fuera, y tu presencia en mi vida es un regalo invaluable que no cambio por nada. Me encanta escucharte, conocer cada día más de ti, compartir nuestros gustos, nuestros proyectos y saber que, sin importar la hora o el día, estás al otro lado de la pantalla siendo mi refugio seguro. No dudes jamás de lo mucho que te llevo conmigo en mis pensamientos a donde sea que vaya. Este rinconcito digital lo creé con mis propias manos para que nunca tengas espacio a dudar de lo importante que eres para mí. Estoy aquí para ti hoy, mañana y todas las veces que me necesites, valorándote y queriéndote con cada parte de mi ser."
};

const loginOutput = document.getElementById('login-output');
const inputLine = document.getElementById('input-line');
const accessKeyInput = document.getElementById('access-key');

// Pista personalizada basada en Little Jesus
const introText = "> Inyectando protocolos de seguridad...\n> Localizando servidor en México...\n> Acceso restringido.\n\n> PISTA: \"Yo las canciones y tú la...\"\n> Ingrese llave de acceso:";

let isTyping = false;

// Al cargar la página, inicia la animación de escritura del login
window.onload = () => {
    typeEffect(introText, loginOutput, () => {
        inputLine.style.display = 'block';
        accessKeyInput.focus();
    });
};

// Escucha el evento de la tecla Enter para validar el acceso
accessKeyInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        validarAcceso(this.value.toLowerCase().trim());
    }
});

/**
 * Valida la palabra secreta ingresada por la usuaria.
 */
function validarAcceso(key) {
    if (key === 'magia') { 
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-interface').style.display = 'block';
    } else {
        alert("Acceso denegado. Revisa la letra de la canción e intenta de nuevo.");
        accessKeyInput.value = "";
    }
}

/**
 * Crea el efecto de escritura letra por letra para los textos de la terminal.
 */
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

/**
 * Ejecuta el comando seleccionado por Ame y muestra el mensaje correspondiente.
 */
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
            typedDiv.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 40); // Velocidad de escritura madura y legible
        } else {
            isTyping = false;
            typedDiv.innerHTML += "<br><br><p style='color:#666; font-size:12px;'>[ SISTEMA ] Ejecución terminada. Reinicia la página para volver al menú.</p>";
        }
    }
    typeWriter();
}
