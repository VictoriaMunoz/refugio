const mensajes = {
    pesado: "<div class='msg-header'>==== PROTOCOLO: CALMA ====</div><br>Sé bien lo mucho que te esfuerzas. <b>Aquí</b> tu manera de afrontar los retos es admirable, pero a veces el cansancio pega fuerte. <b>estoy</b> convencida de que está bien pausar. Recuerda que <b>siempre</b> eres valiosa. Cuentas <b>contigo</b> y conmigo, descansa preciosa.",
    
    sonreir: "<div class='msg-header'>==== PROTOCOLO: COMPLICIDAD ====</div><br><b>Tu</b> forma de ser es increíble y tienes una <b>felicidad</b> que contagia. Conversar contigo <b>me</b> parece el mejor momento de la semana. Me <b>hace</b> inmensamente feliz sentirnos <b>bien</b> hablando de todo. Te adoro, Ame!",
    
    extrañar: "<div class='msg-header'>==== PROTOCOLO: ABRAZO ====</div><br><b>Eres</b> una persona hermosa que esparce <b>magia</b> por donde camina. Influyes <b>en</b> mi día de forma única y tu presencia alegra <b>mi</b> realidad. Este refugio acompaña tu <b>vida</b>. Estoy aquí siempre."
};

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

const introText = "> Inyectando protocolos...\n> Localizando servidor...\n> PISTA: \"Yo las canciones y tú la...\"\n> Acceso:";

window.onload = () => {
    document.getElementById('login-ascii').textContent = kuromiArt;
    typeEffect(introText, document.getElementById('login-output'), () => {
        document.getElementById('input-line').style.display = 'block';
        document.getElementById('access-key').focus();
    });
};

document.getElementById('access-key').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (this.value.toLowerCase().trim() === 'magia') {
            document.getElementById('login-screen').style.display = 'none';
            document.getElementById('main-interface').style.display = 'block';
        } else {
            alert("Error de acceso.");
            this.value = "";
        }
    }
});

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
    const typedDiv = document.getElementById('typed-output');
    const text = mensajes[tipo];
    document.getElementById('output').style.display = 'none';
    document.getElementById('ascii-art').style.display = 'none';
    typedDiv.innerHTML = "";
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            if (text.charAt(i) === '<') {
                let end = text.indexOf('>', i);
                typedDiv.innerHTML += text.slice(i, end + 1);
                i = end + 1;
                typeWriter();
                return;
            }
            typedDiv.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 25);
        }
    }
    typeWriter();
}
