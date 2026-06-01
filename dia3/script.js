const mensajes = {
    pesado: "Sé lo mucho que te esfuerzas y la dedicación que le pones a todo... (Copia aquí el resto del texto del botón 1)",
    sonreir: "Me quedo horas pensando en nuestros chistes internos... (Copia aquí el resto del texto del botón 2)",
    extrañar: "Cierra los ojos un segundo y siente este abrazo... (Copia aquí el resto del texto del botón 3)"
};

let isTyping = false;

function runCommand(tipo) {
    if (isTyping) return;
    
    const outputDiv = document.getElementById('output');
    const typedDiv = document.getElementById('typed-output');
    const text = mensajes[tipo];
    
    outputDiv.style.display = 'none'; // Escondemos el menú
    typedDiv.innerHTML = "";
    isTyping = true;

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            typedDiv.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 40); // Velocidad de escritura
        } else {
            isTyping = false;
            typedDiv.innerHTML += "<br><br><p style='color:#666; font-size:12px;'>Presiona F5 para volver al menú.</p>";
        }
    }
    typeWriter();
}
