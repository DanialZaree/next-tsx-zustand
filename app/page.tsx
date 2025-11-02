"use client";

import { useStore } from "zustand"; 
import { myStore } from "../store/store"; 
import { Store } from "../store/store";


export default function Home() {
const { stateValue, increment, decrement, reset } = useStore(
    myStore,
    (state) => ({ // <-- This should also work
      stateValue: state.stateValue,
      increment: state.increment,
      decrement: state.decrement,
      reset: state.reset,
    })
  );

  return (
    <main style={{ padding: "2rem", fontSize: "1.5rem" }}>
      <h1>My Zustand Store</h1>
      
      {/* 5. Now you can use the state and actions! */}
      <h2>State Value: {stateValue}</h2>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset to 0</button>
      </div>
    </main>
  );
}
