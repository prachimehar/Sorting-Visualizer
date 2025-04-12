export async function selectionSort(array, setArray, setSorting) {
    if (!Array.isArray(array)) {
      console.error("Invalid array passed to selectionSort:", array);
      return;
    }
  
    let arr = [...array];
    const n = arr.length;
    setSorting(true);
  
    for (let i = 0; i < n; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      if (minIdx !== i) {
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        setArray([...arr]);
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
  
    setSorting(false);
  }
  