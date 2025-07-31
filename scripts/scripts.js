// triangle calculate
function calculateTriangleArea() {
  // get triangle base
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  // get triangle height
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);
  // calculation area
  const area = 0.5 * base * height;
  // display triangle area
  const triangleAreaSpan = document.getElementById("triangle-area");
  triangleAreaSpan.innerText = area;
}

// Rectangle Calculate
function calculateRectangleArea() {
  // get rectengle width
  const rectangleWidth = document.getElementById("rectangle-width");
  const rectangleWidthText = rectangleWidth.value;
  const width = parseFloat(rectangleWidthText);
  // get ractengle length
  const rectangleLength = document.getElementById("rectangle-length");
  const rectangleLengthText = rectangleLength.value;
  const length = parseFloat(rectangleLengthText);
  // calculaton
  const area = width * length;

  // display triangle area
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = area;
}

// Parallelogram calculate
function calculateParallelogramArea() {
  // get parallelogram base
  const parallelogramBase = document.getElementById("parallelogram-base");
  const parallelogramBaseText = parallelogramBase.value;
  const base = parseFloat(parallelogramBaseText);
  // get parallelogram height
  const parallelogramHeight = document.getElementById("parallelogram-height");
  const parallelogramHeightText = parallelogramHeight.value;
  const height = parseFloat(parallelogramHeightText);

  // calculation
  const area = base * height;

  // display parallelogram area
  const parallelogramArea = document.getElementById("parallelogram-area");
  parallelogramArea.innerText = area;
}

// rhombus calculate
function calculateRhombus() {
  // get d1
  const d1 = document.getElementById("rhombus-d1");
  const d1Value = d1.value;
  const valueD1 = parseFloat(d1Value);

  // get d2
  const d2 = document.getElementById("rhombus-d2");
  const d2Value = d2.value;
  const valueD2 = parseFloat(d2Value);

  const area = (1 / 2) * valueD1 * valueD2;

  //   display area
  const rhombusArea = document.getElementById("rhombus-area");
  rhombusArea.innerText = area;
}
// rhombus calculate

// pentagon calculate
function calculatePentagon() {
  // get a
  const a = document.getElementById("pentagon");
  const aValue = a.value;
  const valueA = parseFloat(aValue);

  const area = 1.72 * valueA;

  //   display area
  const pentagonArea = document.getElementById("pentagonArea");
  pentagonArea.innerText = area;
}
// pentagon calculate

// ellipse calculate
function calculateEllipse() {
  // get a
  const ellipseA = document.getElementById("ellipseA");
  const aValue = ellipseA.value;
  const valueA = parseFloat(aValue);

  // get b
  const ellipseB = document.getElementById("ellipseB");
  const bValue = ellipseB.value;
  const valueB = parseFloat(bValue);

  const area = 3.1416 * valueA * valueB;

  //   display area
  const ellipseArea = document.getElementById("ellipseArea");
  ellipseArea.innerText = area;
}
// ellipse calculate
