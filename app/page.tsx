"use client";
import { useMyStore } from "../store/store";

export default function Home() {
  const { stateValue, increment, decrement, reset } = useMyStore();

  return (
    <main className="p-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">My Zustand Store Counter</h1>
      <div className="bg-gray-100 p-8 rounded-lg shadow-xl text-center">
        <h2 className="text-6xl font-extrabold mb-8 text-blue-600">
          State Value: {stateValue}
        </h2>
        <div className="flex gap-4">
          <button className="bg-blue-600" onClick={increment}>Increment</button>
          <button className="bg-amber-500" onClick={reset}>Reset to 0</button>
          <button className="bg-red-600" onClick={decrement}>Decrement</button>
        </div>
      </div>
    </main>
  );
}
