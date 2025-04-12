export async function bubbleSort(array, setArray, setSorting) {
  if (!Array.isArray(array)) {
    console.error("Invalid array passed to bubbleSort:", array);
    return;
  }

  let arr = [...array];
  const n = arr.length;
  setSorting(true);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setArray([...arr]);
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
  }

  setSorting(false);
}
