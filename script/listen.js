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


}