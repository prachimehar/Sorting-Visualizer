// src/algorithms/mergeSort.js

export const mergeSort = async (arr, setArray, setSorting) => {
    const merge = async (left, right) => {
      const result = [];
      let leftIndex = 0;
      let rightIndex = 0;
  
      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex]);
          rightIndex++;
        }
        setArray([...result, ...left.slice(leftIndex), ...right.slice(rightIndex)]);
        await new Promise(resolve => setTimeout(resolve, 100)); // Adjust the speed
      }
      return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
    };
  
    const sort = async (array) => {
      if (array.length <= 1) return array;
      const mid = Math.floor(array.length / 2);
      const left = array.slice(0, mid);
      const right = array.slice(mid);
  
      return merge(await sort(left), await sort(right));
    };
  
    setSorting(true);
    const sortedArray = await sort(arr);
    setArray(sortedArray);
    setSorting(false);
  };
  