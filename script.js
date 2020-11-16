const SpeechRecognition = webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "en-US";

//to start listen to our voices
function getSpeech(){
    recognition.onresult = (event) => {
        console.log(event);
        const speechResult = event.results[0][0].transcript;
        console.log(speechResult);
        var answer = document.getElementsByTagName("div")[0].getAttribute("id"); 
        document.querySelector("#speech-div").textContent = speechResult;
        //getGif(speechResult);
    };

    //when the session is over
    recognition.onend = () => {
        console.log("session is over");
        recognition.stop();
        // getSpeech(); // to make the detection of speech going on and on
    };
}

//getting the gif's from voice we speak
document.querySelector("#button1").onclick = ()=>{
    console.log("clicked");
    recognition.start();
    getSpeech();
};



