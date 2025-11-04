"use client";
import { useMyStore } from "../store/store";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const {
    stateValue,
    increment,
    decrement,
    reset,
    message,
    message2,
    updateMessage,
    updateMessage2,
  } = useMyStore();

  const fetchMessage = async () => {
    const res = await fetch("/api/message");
    const data = await res.json();
    updateMessage(data.message);
  };

  const sendName = async () => {
    const res = await fetch("/api/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Danial" }),
    });
    const data = await res.json();
    updateMessage(data.message);
  };
  const sendText = async () => {
    const res = await fetch("/api/text", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text }),
    });
    const data = await res.json();
    updateMessage2(data.message2);
  };
  return (
    <main className="p-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">My Zustand Store Counter</h1>

      <div className="bg-black p-8 rounded-lg shadow-xl text-center">
        <h2 className="text-6xl font-extrabold mb-8 text-blue-600">
          State Value: {stateValue}
        </h2>

        <div className="flex gap-4 mb-6">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset to 0</button>
        </div>

        <div className="flex gap-4 mb-4">
          <button onClick={fetchMessage}>GET Message</button>
          <button onClick={sendName}>POST Name</button>
        </div>

        <p className="text-lg text-blue-50">API Message: {message}</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendText();
          }}
        >
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="bg-blue-400 p-4"
          />
          <button type="submit">send</button>
        </form>

        <p className="text-lg text-green-400">Response: {message2}</p>
      </div>
    </main>
  );
}
