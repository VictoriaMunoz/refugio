const mensajes = {
    pesado: "Sé muy bien lo mucho que te esfuerzas y la dedicación tan increíble que le pones a todo lo que haces. A veces las rutinas se enredan, las cosas se acumulan en la oficina y el cansancio físico o mental pega fuerte. Solo quería pasar por aquí para recordarte que está completamente bien pausar, respirar y soltar el control un rato; no tienes que ser fuerte ni perfecta todo el tiempo. Eres una mujer sumamente inteligente y capaz, y nada de lo que pase en un día pesado va a cambiar lo valiosa que eres. Cuando cierres la pantalla hoy, recuerda que admirada ya eres, y que aquí estoy a un mensajito de distancia dispuesta a escucharte o a acompañarte en completo silencio, como tú lo prefieras. Desconéctate tranquila, que te mereces toda la paz del mundo.",
    
    sonreir: "Si entraste a este comando es porque al día le está haciendo falta un poquito de luz, y mi misión favorita es recordarte lo bonito que es compartir contigo. Me quedo horas pensando en nuestras charlas, en las bobadas que solo nosotras entendemos y en cómo un día cualquiera se vuelve el mejor momento de la semana cuando nos ponemos a conversar. Me haces inmensamente feliz con tu forma de ser, con tus ocurrencias y con esa chispa tan única que tienes. Aunque los kilómetros nos separen en el mapa, me encanta saber que compartimos la misma sintonía y que siempre encontramos la forma de hacernos compañía de una manera tan sana. Espero que leer esto te saque una sonrisa gigante de esas que me alegra tanto ver. ¡Te adoro un montón!",
    
    extrañar: "Si te dio por hundir este botón, quiero que cierres los ojos un segundo y sientas este abrazo tan fuerte que te mando desde el fondo de mi alma. La distancia puede ser un número muy tonto cuando dos personas se quieren y se apoyan de una forma tan limpia, bonita y sincera como nosotras. No pasa un solo día en el que no agradezca haber coincidido contigo en la vida; eres una persona hermosa por dentro y por fuera, y tu presencia le da un color increíble a mis días. Me encanta escucharte, conocerte cada vez más, compartir nuestros gustos y saber que estás al otro lado de la pantalla siendo un refugio tan lindo. No dudes nunca de lo mucho que te llevo conmigo a donde sea que vaya. Estoy aquí para ti, hoy, mañana y siempre, valorándote con cada parte de mi ser."
};

const loginOutput = document.getElementById('login-output');
const inputLine = document.getElementById('input-line');
const accessKeyInput = document.getElementById('access-key');

const introText = "> Inyectando protocolos de seguridad...\n> Localizando servidor en México...\n> Acceso restringido. Ingrese llave de acceso:";

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
   
    if (key === 'cristobalnalgon') { 
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-interface').style.display = 'block';
    } else {
        alert("Acceso denegado. Intenta de nuevo.");
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
    }, 30);
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
            typedDiv.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 35);
        } else {
            isTyping = false;
            typedDiv.innerHTML += "<br><br><p style='color:#666; font-size:12px;'>[ SISTEMA ] Ejecución terminada. Reinicia para volver al menú.</p>";
        }
    }
    typeWriter();
}
