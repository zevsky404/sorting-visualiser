async function bubbleSort() {
  let container = document.getElementById("bars-div");
  let bars = container.children;
  const arraySize = bars.length;
  console.log(bars);
  for (let i = 0; i < arraySize - 1; ++i) {
    for (let j = 0; j < arraySize - i - 1; ++j) {
      bars[j].style.background = "red";
      bars[j + 1].style.background = "red";
      if (parseInt(getHeight(bars[j])) > parseInt(getHeight(bars[j + 1]))) {
        console.log(getHeight(bars[j]));
        console.log(getHeight(bars[j + 1]))
        swap(bars[j], bars[j + 1]);
      }
      bars[j].style.background = "cornflowerblue";
      bars[j + 1].style.background = "cornflowerblue";
      await new Promise(resolve => setTimeout(() => {resolve(), 4000}));

    }
  }


}
