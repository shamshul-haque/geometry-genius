function triangleArea() {
  // get triangle base
  const triangleBase = document.getElementById("triangle-base");
  const baseString = triangleBase.value;
  const baseValue = parseFloat(baseString);
  triangleBase.value = "";

  // get triangle height
  const triangleHeight = document.getElementById("triangle-height");
  const heightString = triangleHeight.value;
  const heightValue = parseFloat(heightString);
  triangleHeight.value = "";

  //  calculate triangle area
  const triangleArea = 0.5 * baseValue * heightValue;
  console.log(triangleArea);
}
