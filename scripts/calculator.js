// triangle calculation
function triangleArea() {
  const base = getInput("triangle-base");
  const height = getInput("triangle-height");
  const area = (0.5 * base * height).toFixed(2);
  console.log(area);
}

// rectangle calculation
function rectangleArea() {
  const width = getInput("rectangle-width");
  const length = getInput("rectangle-length");
  const area = (width * length).toFixed(2);
  console.log(area);
}

// parallelogram calculation
function parallelogramArea() {
  const base = getInput("parallelogram-base");
  const height = getInput("parallelogram-height");
  const area = (base * height).toFixed(2);
  console.log(area);
}

// rhombus calculation
function rhombusArea() {
  const diagonal1 = getInput("rhombus-diagonal-1");
  const diagonal2 = getInput("rhombus-diagonal-2");
  const area = (0.5 * diagonal1 * diagonal2).toFixed(2);
  console.log(area);
}

// pentagon calculation
function pentagonArea() {
  const perimeter = getInput("pentagon-perimeter");
  const apothem = getInput("pentagon-apothem");
  const area = (0.5 * perimeter * apothem).toFixed(2);
  console.log(area);
}

// ellipse calculation
function ellipseArea() {
  const axisA = getInput("axis-a");
  const axisB = getInput("axis-b");
  const area = (Math.PI * axisA * axisB).toFixed(2);
  console.log(area);
}

// get input
function getInput(getId) {
  const inputField = document.getElementById(getId);
  const inputString = inputField.value;
  const inputValue = parseFloat(inputString);
  inputField.value = "";
  return inputValue;
}

// set output
function setArea(setId, value) {}
