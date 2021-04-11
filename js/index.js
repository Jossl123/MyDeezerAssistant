var webkitSpeechRecognition = window.webkitSpeechRecognition;
var recognition = new webkitSpeechRecognition();

DZ.init({
    appId: '471962',
    channelUrl: 'jossl123.github.io/MyDeezerAssistant/channel.js'
});

function login() {
    DZ.login(function(response) {
        if (response.authResponse) {
            console.log('Welcome!  Fetching your information.... ');
            DZ.api('/user/me', function(response) {
                console.log('Good to see you, ' + response.name + '.');
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    }, { perms: 'basic_access,email' });
}

// This runs when the speech recognition service starts
/*recognition.onstart = function() {
    console.log("We are listening. Try speaking into the microphone.");
};

// This runs when the speech recognition service returns result
recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;

};

// start recognition
recognition.start();*/