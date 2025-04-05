function speak(){
    var input = prompt("Enter text to convert to speech: ");
    const synth = window.speechSynthesis

    voice = speechSynthesis.getVoices()[0];

    const utter = new SpeechSynthesisUtterance(input);

    speechSynthesis.speak();
}

function hear(){
    let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition, recognition, recording =false;
    
    try {
        recognition = new speechRecognition();
        recognition.interimResults = true;
        recognition.start();
        recognition.onresult = (event) => {
            const res = event.results[0][0].transcript;
            console.log(res);
        }
    }
    catch (error){
        console.log(error);
    }

}