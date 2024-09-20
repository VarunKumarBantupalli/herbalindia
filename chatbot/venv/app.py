from flask import Flask, request, jsonify, send_from_directory
import google.generativeai as genai
from datetime import datetime, timedelta
import os
import time  # To handle retry delays

app = Flask(__name__)

# Global variables for chat history and last reset time
chat_history = []
last_reset = datetime.now()

# Load API key from environment variable
genai.configure(api_key=os.getenv('GEMINI_API_KEY'))


def generate_bot_response(user_input, retry_attempts=3, retry_delay=5):
    """Generate a bot response, handling quota exhaustion with retries."""
    try:
        # Retry mechanism for handling 429 errors (quota exceeded)
        for attempt in range(retry_attempts):
            try:
                # Make the request to the Gemini API
                response = genai.GenerativeModel(
                    model_name="gemini-1.5-pro",
                    generation_config={
                        "temperature": 0.5,
                        "top_p": 0.95,
                        "top_k": 64,
                        "max_output_tokens": 4000,
                        "response_mime_type": "text/plain",
                    },
                    system_instruction="You are a knowledgeable assistant for a Virtual Herbal Garden, "
                                       "dedicated to providing users with accurate and engaging information "
                                       "about medicinal plants used in traditional healing practices, particularly "
                                       "within the AYUSH sector. Your role is to answer queries related to various "
                                       "medicinal plants in a clear, concise, and informative manner."
                ).start_chat(history=[{"role": "user", "parts": [user_input]}]).send_message(user_input)

                # Return the text response from the API
                return response.text

            except Exception as e:
                if "429" in str(e):
                    # Quota exhausted, retry after delay
                    print(f"Quota exhausted, retrying in {retry_delay} seconds (attempt {attempt + 1})...")
                    time.sleep(retry_delay)
                else:
                    # Other errors, return a fallback response
                    print(f"Error in generate_bot_response: {e}")
                    return "Sorry, there was an error processing your request."
        return "Sorry, we're experiencing high traffic. Please try again later."
    
    except Exception as e:
        print(f"Error in generate_bot_response: {e}")
        return "Sorry, there was an error processing your request."


@app.route('/')
def index():
    return send_from_directory('static', 'index.html')


@app.route('/generate', methods=['POST'])
def generate_response():
    global chat_history, last_reset

    try:
        # Reset chat history every 24 hours
        if datetime.now() - last_reset > timedelta(hours=24):
            chat_history = []
            last_reset = datetime.now()

        # Retrieve the user input from the request
        data = request.json
        user_input = data.get('userInput')
        
        # Ensure user input is valid
        if not user_input:
            return jsonify({"error": "No user input provided"}), 400

        # Generate the chatbot response
        response = generate_bot_response(user_input)

        # Update chat history
        chat_history.append({"role": "user", "message": user_input})
        chat_history.append({"role": "bot", "message": response})

        return jsonify({"response": response}), 200

    except Exception as e:
        # Log the error and return a 500 response
        print(f"Error: {e}")
        return jsonify({"error": "Internal Server Error"}), 500


if __name__ == '__main__':
    app.run(debug=True)
