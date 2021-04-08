var webkitSpeechRecognition = window.webkitSpeechRecognition;
var recognition = new webkitSpeechRecognition();

// This runs when the speech recognition service starts
recognition.onstart = function() {
    console.log("We are listening. Try speaking into the microphone.");
};

// This runs when the speech recognition service returns result
recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
};

// start recognition
recognition.start();