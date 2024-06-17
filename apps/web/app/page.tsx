"use client";

import { useState } from "react";
import { useSocket } from "../context/SocketProvider";

export default function Page() {
  const { sendMessage, messages } = useSocket();
  const [message, setMessage] = useState("");

  console.log(messages);
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-800">
      <h1 className="flex justify-center text-white font-bold mt-4">Texon Chat</h1>
      <div className="flex-grow ml-20">
        <h1 className="text-blue-300 font-bold  mt-4">Messages:</h1>
        <ul className=" text-white font-semibold">
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center mb-4 w-full px-5">
        <input
          className="p-2 w-full max-w-screen-lg"
          type="text"
          placeholder="Type your Message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={() => {
            sendMessage(message);
            setMessage(""); 
          }}
          className="mt-3 outline-none bg-blue-400 text-white font-semibold w-fit px-5 py-2"
        >
          Send
        </button>
      </div>
    </div>
  );
}
