function getInput(id) {
  const inputField = document.getElementById(id);
  const inputString = inputField.value;
  const inputValue = parseFloat(inputString);
  inputField.value = "";
  return inputValue;
}

function triangleArea() {
  const base = getInput("triangle-base");
  const height = getInput("triangle-height");
  const area = 0.5 * base * height;
  console.log(area);
}

function rectangleArea() {
  const width = getInput("rectangle-width");
  const length = getInput("rectangle-length");
  const area = width * length;
  console.log(area);
}

function parallelogramArea() {
  const base = getInput("parallelogram-base");
  const height = getInput("parallelogram-height");
  const area = base * height;
  console.log(area);
}
