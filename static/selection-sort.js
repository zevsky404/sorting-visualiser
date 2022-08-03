async function selectionSort() {
  //get container for bars and all its children (bars)
  let container = document.getElementById("bars-div");
  let bars = container.children;
  const arraySize = bars.length;
  console.log(bars);

  for (let i = 0; i < arraySize - 1; ++i) {
    let minIndex = i;
    bars[minIndex].style.background = "lightgreen";
    for (let j = i + 1; j < arraySize; ++j) {
      if (getHeight(bars[j]) < getHeight(bars[minIndex])) {
        minIndex = j;
        console.log(minIndex);
      }
      swap(bars[minIndex], bars[i]);
      await new Promise(resolve => setTimeout(() => {resolve(), 2000}));
    }
  }


}
