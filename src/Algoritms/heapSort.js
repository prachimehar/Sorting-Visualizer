// src/algorithms/heapSort.js

export const heapSort = async (arr, setArray, setSorting) => {
    const heapify = async (arr, n, i, setArray) => {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
  
      if (left < n && arr[left] > arr[largest]) {
        largest = left;
      }
  
      if (right < n && arr[right] > arr[largest]) {
        largest = right;
      }
  
      if (largest !== i) {
        const temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        setArray([...arr]);
        await new Promise(resolve => setTimeout(resolve, 100)); // Speed control
        await heapify(arr, n, largest, setArray);
      }
    };
  
    const sort = async (arr) => {
      const n = arr.length;
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(arr, n, i, setArray);
      }
  
      for (let i = n - 1; i > 0; i--) {
        const temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        setArray([...arr]);
        await new Promise(resolve => setTimeout(resolve, 100)); // Speed control
        await heapify(arr, i, 0, setArray);
      }
    };
  
    setSorting(true);
    await sort(arr);
    setSorting(false);
  };
  