async function bubbleSort() {
  //get container for bars and all its children (bars)
  let container = document.getElementById("bars-div");
  let bars = container.children;
  const arraySize = bars.length;

  // bubble sort algorithm
  for (let i = 0; i < arraySize - 1; ++i) {
    for (let j = 0; j < arraySize - i - 1; ++j) {
      if (getHeight(bars[j]) > getHeight(bars[j + 1])) {
        swap(bars[j], bars[j + 1]);
      }
      bars[j + 1].style.background = "lightgreen";
      bars[j].style.background = "cornflowerblue";
      await new Promise(resolve => setTimeout(() => {resolve(), 2000}));
    }

  }


}
