// src/App.jsx
import React from "react";
import SortingVisualizer from "./components/SortingVisualizer";
import SortingButton from "./components/SortingButton";
import ArrayBar from "./components/ArrayBar";

export default function App() {
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <SortingVisualizer />
      
    </div>
  );
}