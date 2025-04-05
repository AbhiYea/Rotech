import { useEffect, useRef, useState } from "react";
import "./chatty.css"
export default function ChatBox() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hey there 👋, how can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const lastMessageRef = useRef(null);
  useEffect(() => {
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [messages]);
  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    // Replace this with Gemini/LLM response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `You said: "${input}" — that's interesting! 🤖`,
        },
      ]);
    }, 600);

    setInput("");
  };

  return (
    <div className="flex flex-col main-boxy  h-screen  bg-[#f7f7f8]">
      <div className="flex-grow overflow-y-auto px-4 py-6  space-y-4">
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
    </div>
  );
}
