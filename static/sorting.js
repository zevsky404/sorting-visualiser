function createBars() {
  let heights = [];

  for (let i = 0; i <= 100; ++i) {
    heights[i] = Math.floor(Math.random() * 101);
  }

  for (let number in heights) {
    let newDiv = document.createElement('div');
    newDiv.className = "bar";
    newDiv.style.height = Math.floor(heights[number] * 0.25) + "px";
    newDiv.innerHTML = "";
    const barDiv = document.getElementById('bars-div');
    barDiv.appendChild(newDiv);
  }
}

