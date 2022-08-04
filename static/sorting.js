function createBars() {
  let heights = [];
  const barDiv = document.getElementById('bars-div');
  while (barDiv.lastElementChild) {
    barDiv.removeChild(barDiv.lastElementChild);
  }

  for (let i = 1; i <= 100; ++i) {
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

function getHeight(element) {
  const style = window.getComputedStyle(element);
  const heightString = style.getPropertyValue('height');
  const height = heightString.replace("px", '');
  return parseInt(height);
}

function swap(element1, element2) {
  const style1 = window.getComputedStyle(element1);
  const style2 = window.getComputedStyle(element2);

  const height1 = style1.getPropertyValue('height');
  const height2 = style2.getPropertyValue('height');

  element1.style.height = height2;
  element2.style.height = height1;
}

function delay(time = 2000) {
  return new Promise(resolve => {setTimeout(() => resolve(), time)});
}
