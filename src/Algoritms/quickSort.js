// src/algorithms/quickSort.js

export const quickSort = async (arr, setArray, setSorting) => {
    const sort = async (array, low, high) => {
      if (low < high) {
        const pi = await partition(array, low, high, setArray);
        await sort(array, low, pi - 1, setArray);
        await sort(array, pi + 1, high, setArray);
      }
    };
  
    const partition = async (array, low, high, setArray) => {
      const pivot = array[high];
      let i = low - 1;
      for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
          i++;
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
          setArray([...array]);
          await new Promise(resolve => setTimeout(resolve, 100)); // Adjust the speed
        }
      }
      const temp = array[i + 1];
      array[i + 1] = array[high];
      array[high] = temp;
      setArray([...array]);
      return i + 1;
    };
  
    setSorting(true);
    await sort(arr, 0, arr.length - 1);
    setSorting(false);
  };
  