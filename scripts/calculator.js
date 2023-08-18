// get input
function getInput(getId) {
  const inputField = document.getElementById(getId);
  const inputString = inputField.value;
  const inputValue = parseFloat(inputString);
  inputField.value = "";
  return inputValue;
}

// triangle calculation
function triangleArea() {
  const base = getInput("triangle-base");
  const height = getInput("triangle-height");
  if (isNaN(base) || base <= 0 || isNaN(height) || height <= 0) {
    alert("Please provide a positive value");
    return;
  }
  const area = (0.5 * base * height).toFixed(2);
  setArea("Triangle", area);
}

// rectangle calculation
function rectangleArea() {
  const width = getInput("rectangle-width");
  const length = getInput("rectangle-length");
  if (isNaN(width) || width <= 0 || isNaN(length) || length <= 0) {
    alert("Please provide a positive value");
    return;
  }
  const area = (width * length).toFixed(2);
  setArea("Rectangle", area);
}

// parallelogram calculation
function parallelogramArea() {
  const base = getInput("parallelogram-base");
  const height = getInput("parallelogram-height");
  if (isNaN(base) || base <= 0 || isNaN(height) || height <= 0) {
    alert("Please provide a positive value");
    return;
  }
  const area = (base * height).toFixed(2);
  setArea("Parallelogram", area);
}

// rhombus calculation
function rhombusArea() {
  const diagonal1 = getInput("rhombus-diagonal-1");
  const diagonal2 = getInput("rhombus-diagonal-2");
  if (
    isNaN(diagonal1) ||
    diagonal1 <= 0 ||
    isNaN(diagonal2) ||
    diagonal2 <= 0
  ) {
    alert("Please provide a positive value");
    return;
  }
  const area = (0.5 * diagonal1 * diagonal2).toFixed(2);
  setArea("Rhombus", area);
}

// pentagon calculation
function pentagonArea() {
  const perimeter = getInput("pentagon-perimeter");
  const apothem = getInput("pentagon-apothem");
  if (isNaN(perimeter) || perimeter <= 0 || isNaN(apothem) || apothem <= 0) {
    alert("Please provide a positive value");
    return;
  }
  const area = (0.5 * perimeter * apothem).toFixed(2);
  setArea("Pentagon", area);
}

// ellipse calculation
function ellipseArea() {
  const axisA = getInput("axis-a");
  const axisB = getInput("axis-b");
  if (isNaN(axisA) || axisA <= 0 || isNaN(axisB) || axisB <= 0) {
    alert("Please provide a positive value");
    return;
  }
  const area = (Math.PI * axisA * axisB).toFixed(2);
  setArea("Ellipse", area);
}

// set output
function setArea(areaType, value) {
  const entryPosition = document.getElementById("calculation-entry");
  let count = entryPosition.childElementCount;
  const p = document.createElement("p");
  entryPosition.appendChild(p);
  p.classList.add("my-4", "text-xl", "text-center");
  p.innerHTML = `${(count += 1)}. ${areaType} <strong>${value}</strong> cm<sup>2</sup>`;
}
