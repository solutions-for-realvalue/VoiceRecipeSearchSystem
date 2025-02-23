// Listening state (speech recognition):
// - activated when user click record "use your voice"
// - Use web speech api - speech recognition and speech
// synthesis to convert spoken words into text
// - transition to the " understanding state"
// if a translation intent is detected via --> understand.js

// include these lines to allow for both prefixed properties
//  and unprefixed versions that may be supported in future
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

// add listeners for record audio
$("#record-btn").click(function () {
  $(".form-control").text('');
  recordRecipe();
});

// add global variable for recognized speech
// to use the result of userRequest on understand.js
let userRequest = ""; // intitialize it

// record voice audio for recipe using  Web Speech API
// provides: speech recognition, and speech synthesis
// https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
function recordRecipe() {

    // check for web speech API and show user error if not supported
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
        // define a speech recognition instance to control
        //  the recognition for our application
        const recognition = new SpeechRecognition();
        const speechRecognitionList = new SpeechGrammarList();
        
    } else {
        // Error state: provides user with feedback about the issue then
        // transition to the "listening state" for the next user input
        console.error("Web Speech API is not supported in this browser.");
    }
}