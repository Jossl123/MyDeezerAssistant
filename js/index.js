var webkitSpeechRecognition = window.webkitSpeechRecognition;
var recognition = new webkitSpeechRecognition();

fetch('https://connect.deezer.com/oauth/auth.php?app_id=471962&redirect_uri=https://jossl123.github.io/MyDeezerAssistant/&perms=basic_access,email')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });
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