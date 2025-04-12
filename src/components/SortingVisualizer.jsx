import React, { useState } from "react";
import ArrayBar from "./ArrayBar";
import SortingButton from "./SortingButton";
import { bubbleSort } from "../Algoritms/bubbleSort";
import { selectionSort } from "../Algoritms/selectionSort";
import { insertionSort } from "../Algoritms/insertionSort";
import { quickSort } from "../Algoritms/quickSort";
import { mergeSort } from "../Algoritms/mergeSort";
import { heapSort } from "../Algoritms/heapSort";

function generateRandomArray(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
  }
  return arr;
}

const SortingVisualizer = () => {
  const [array, setArray] = useState(generateRandomArray(30));
  const [sorting, setSorting] = useState(false);
  
  const [algorithm, setAlgorithm] = useState(() => bubbleSort); // Default algorithm

  const startSorting = async () => {
    setSorting(true);
    await algorithm([...array], setArray, setSorting); // Clone array!
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-4">
      {/* Bars */}
      <div className="flex justify-center items-end w-full mb-4 h-64">
        {array.map((value, index) => (
          <ArrayBar key={index} value={value} />
        ))}
      </div>

      {/* Sorting Button */}
      <div className="flex mb-4 gap-4">
        <SortingButton
          onClick={startSorting}
          disabled={sorting}
          isSorting={sorting}
        />
        <button
          onClick={() => setArray(generateRandomArray(30))}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          disabled={sorting}
        >
          Reset Array
        </button>
      </div>

      {/* Algorithm Buttons */}
      <div className="mt-4 flex justify-center flex-wrap gap-2">
        <button onClick={() => setAlgorithm(bubbleSort)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Bubble Sort</button>
        <button onClick={() => setAlgorithm(selectionSort)} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Selection Sort</button>
        <button onClick={() => setAlgorithm(insertionSort)} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Insertion Sort</button>
        <button onClick={() => setAlgorithm(quickSort)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Quick Sort</button>
        <button onClick={() => setAlgorithm(mergeSort)} className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">Merge Sort</button>
        <button onClick={() => setAlgorithm(heapSort)} className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600">Heap Sort</button>
      </div>
    </div>
  );
};

export default SortingVisualizer;
