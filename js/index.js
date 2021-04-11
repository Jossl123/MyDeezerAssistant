const magic_word = "coucou";

// initialize our SpeechRecognition object
let recognition = new webkitSpeechRecognition();
recognition.interimResults = false;
recognition.maxAlternatives = 1;
recognition.continuous = true;

// detect the magic word
recognition.onresult = e => {
    var result = e.results[0][0].transcript
    console.log(result)
    if (result.includes("deezer") || result.includes("10h") || result.includes("Deezer")) {
        var param = result.replace('10h', '').replace('deezer', '').replace('Deezer', '')
        param = param.split(" ")
        if (param.indexOf("volume") >= -1) {
            if (param.indexOf("plus") >= -1) {
                console.log("augmenter le volume")
            } else if (param.indexOf("moins") >= -1) {
                console.log("baisser le volume")
            }
        }
    } else {
        console.log("pas deezer")
    }
}

// called when we detect sound
setInterval(function() {
    try { // calling it twice will throw...
        recognition.start();
    } catch (e) {}
}, 5000)


DZ.init({
    appId: '471962',
    channelUrl: 'http://jossl123.github.io/MyDeezerAssistant/channel.html',
    player: {
        container: 'player',
        width: 300,
        height: 300,
        format: 'square',
        onload: function() {}
    }

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