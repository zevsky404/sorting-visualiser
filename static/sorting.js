function createBars() {
  let heights = [];
  const barDiv = document.getElementById('bars-div');
  while (barDiv.lastElementChild) {
    barDiv.removeChild(barDiv.lastElementChild);
  }

  for (let i = 0; i <= 100; ++i) {
    heights[i] = Math.ceil(Math.random() * 101);
  }

  for (let number in heights) {
    let newDiv = document.createElement('div');
    newDiv.className = "bar";
    newDiv.style.height = Math.floor(heights[number] * 5) + "px";
    newDiv.innerHTML = "";
    barDiv.appendChild(newDiv);
  }
}

