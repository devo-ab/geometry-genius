// triangle calculate
function calculateTriangleArea (){
    // get triangle base
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    // get triangle height
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    // calculation area
    const area = 0.5 * base * height;
    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}


// Rectangle Calculate
function calculateRectangleArea(){
    // get rectengle width
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidth.value;
    const width = parseFloat(rectangleWidthText);
    // get ractengle length
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLength.value;
    const length = parseFloat(rectangleLengthText);
    // calculaton
    const area = width * length;

    // display triangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}


// Parallelogram calculate
function calculateParallelogramArea (){
    // get parallelogram base
    const parallelogramBase = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBase.value;
    const base = parseFloat(parallelogramBaseText);
    // get parallelogram height
    const parallelogramHeight = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeight.value;
    const height = parseFloat (parallelogramHeightText);

    // calculation
    const area = base * height;
    
    // display parallelogram area
    const parallelogramArea = document.getElementById('parallelogram-area');
    parallelogramArea.innerText = area;
}