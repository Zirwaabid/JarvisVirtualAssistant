const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new date();
    var hour = day.gethours();
    if (hour >= 0 && hour < 12) {
        speak("Good Morning Mam....");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Mam....")
    } else {
        speak("Good Evening Mam")
    }
}
window.addEventListener('load', () => {
    speak("Initializing JARVIS...")
    wishMe();
});
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition=new SpeechRecognition();