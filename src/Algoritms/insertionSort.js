// src/Algoritms/insertionSort.js
export const insertionSort = async (array, setArray, setSorting) => {
    let newArray = [...array]; // Copy the array to avoid mutation
    let n = newArray.length;
  
    for (let i = 1; i < n; i++) {
      let key = newArray[i];
      let j = i - 1;
  
      // Move elements of newArray[0..i-1] that are greater than key to one position ahead
      while (j >= 0 && newArray[j] > key) {
        newArray[j + 1] = newArray[j];
        j = j - 1;
      }
      newArray[j + 1] = key;
  
      setArray([...newArray]); // Update the array after each insertion
      await new Promise(resolve => setTimeout(resolve, 100)); // Pause for animation
    }
  
    setSorting(false); // Mark sorting as complete
  };
  