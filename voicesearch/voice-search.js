// Check if the browser supports the Web Speech API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    alert('Your browser does not support voice recognition. Please use a different browser.');
} else {
    // Initialize recognition
    const recognition = new SpeechRecognition();
    const searchBar = document.getElementById('search-bar');
    const voiceSearchBtn = document.getElementById('voice-search-btn');
    const stopSearchBtn = document.getElementById('stop-search-btn');
    const resultSection = document.getElementById('result-section');

    // Set recognition settings
    recognition.lang = 'en-US'; // You can change the language
    recognition.continuous = true; // Stop after a sentence
    recognition.interimResults = false; // Only final result

    // Start voice recognition when button is clicked
    voiceSearchBtn.addEventListener('click', () => {
        recognition.start();
        voiceSearchBtn.disabled = true; // Disable button during recognition
        stopSearchBtn.disabled = false; // Enable stop button
        searchBar.placeholder = "Listening...";
    });

    // Stop recognition on stop button
    stopSearchBtn.addEventListener('click', () => {
        recognition.stop();
        stopSearchBtn.disabled = true;
        voiceSearchBtn.disabled = false; // Re-enable the start button
    });

    // Handle the speech result
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        searchBar.value = transcript;

        // Trigger a search or handle the query
        searchPlantData(transcript); // Call the function for search
        voiceSearchBtn.disabled = false; // Re-enable the start button
        searchBar.placeholder = "Search for plants...";
    };

    // Handle recognition end (if the user stops speaking)
    recognition.onend = () => {
        voiceSearchBtn.disabled = false;
        stopSearchBtn.disabled = true;
        searchBar.placeholder = "Start Voice Search";
    };

    // Handle recognition errors
    recognition.onerror = (event) => {
        console.error("Speech recognition error: ", event.error);
        alert("Sorry, I couldn't recognize your voice. Please try again.");
        voiceSearchBtn.disabled = false;
        searchBar.placeholder = "Start Voice Search";
    };

    // Mock function to handle search
    function searchPlantData(query) {
        resultSection.innerHTML = `<p>Searching for: ${query}...</p>`;
        console.log(query)
        // Here you can integrate search logic or make an API call to your backend
    }
}
