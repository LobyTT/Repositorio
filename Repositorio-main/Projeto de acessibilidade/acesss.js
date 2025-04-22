function lerMensagem(){
    const texto = document.getElementById("mensagem").textContent;
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang="pr-Br";
    SpeechSynthesis.speak(fala);
}