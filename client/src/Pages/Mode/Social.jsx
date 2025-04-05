import { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {AudioLines} from "lucide-react"
const ai = new GoogleGenAI({ apiKey: "AIzaSyD78X8dLdP1G9QWCuEcupZtWfgNWEhO7YU" });


export default function Social(){
    
          const {
            transcript,
            listening,
            resetTranscript,
            browserSupportsSpeechRecognition
          } = useSpeechRecognition();
        
          useEffect(() => {
            if (!browserSupportsSpeechRecognition) {
              console.error("Your browser doesn't support speech recognition.");
              return;
            }
          }, []);
        
          useEffect(() => {
            if (transcript) {
              setInput(transcript);
            }
          }, [transcript]);
        
          const handleHear = () => {
            resetTranscript();
            SpeechRecognition.startListening({ continuous: true });
          };
        
          const stopHear = () => {
            SpeechRecognition.stopListening();
          };
    
      const [messages, setMessages] = useState([
        { sender: "bot", text: "Hi! 🧡 Let’s stay connected. I can help you make video calls, send messages, or check WhatsApp/Facebook. Would you like to chat with a loved one today?" },
      ]);
      const [input, setInput] = useState("");
      const lastMessageRef = useRef(null);
    
      useEffect(() => {
        if (lastMessageRef.current) {
          lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, [messages]);
    
      const handleSend = async () => {
        if (!input.trim()) return;
    
        const userMsg = { sender: "user", text: input };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");
    
        try {
            const result = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: [{ role: "user", parts: [{ text: input }] }],
              });
            console.log(result.text)
              const botReply = await result.text ; ;
    
          setMessages((prev) => [
            ...prev,
            { sender: "bot", text: botReply || "No response from AI 🤖" },
          ]);
        } catch (err) {
          console.error(err);
          setMessages((prev) => [
            ...prev,
            { sender: "bot", text: "Error getting response 😢" },
          ]);
        }
      };
    
      return (
        <div className="flex flex-col main-boxy h-screen bg-[#f7f7f8]">
          <div className="flex-grow overflow-y-auto px-4 py-6 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                ref={i === messages.length - 1 ? lastMessageRef : null}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-xl px-4 py-3 max-w-[80%] text-sm shadow-md ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-[#e5e5ea] text-gray-900"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
    
          <div className="p-4 border-t bg-white flex gap-2">
            <input
              type="text"
              className="flex-grow p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Send a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              Send
            </button>
          </div>
    
          <button className="Butto" onClick={handleHear} ><AudioLines className="Butt" /></button>
        </div>
      );
}