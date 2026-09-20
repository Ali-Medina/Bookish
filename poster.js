
let word = document.getElementById("word")
let headline = document.getElementById("headline")

let grassOverlay = document.getElementById("grass-overlay")
let grassColorOutput = document.querySelector("output[for=grass-color]")
let grassColor = document.getElementById("grass-color")

let ladybug = document.getElementById("ladybug")
let ladybugX = document.getElementById("ladybug-x")
let ladybugY = document.getElementById("ladybug-y")
let ladybugScale = document.getElementById("ladybug-scale")
let ladybugRotation = document.getElementById("ladybug-rotation")

let butterfly = document.getElementById("butterfly")
let butterflyX = document.getElementById("butterfly-x")
let butterflyY = document.getElementById("butterfly-y")
let butterflyScale = document.getElementById("butterfly-scale")
let butterflyRotation = document.getElementById("butterfly-rotation")

let caterpillar = document.getElementById("caterpillar")
let caterpillarX = document.getElementById("caterpillar-x")
let caterpillarY = document.getElementById("caterpillar-y")
let caterpillarScale = document.getElementById("caterpillar-scale")
let caterpillarRotation = document.getElementById("caterpillar-rotation")




// function changePosition(element, xInput, yInput) {
//   // element.style.translate = xInput.value + "px " + yInput.value + "px";
//   element.style.transform = `translate(${xInput.value}px, ${yInput.value}px)`
// }

function updateScale(element, scaleInput) {
  element.style.scale = scaleInput.value
}

function updateOutput(element, input) {
  element.textContent = input.value
}

// function updateRotation(element, rotationInput) {
//     element.style.transform = `rotate(${rotationInput.value}deg`
// }

function updateTransform(element, xInput, yInput, rotationInput) {
    element.style.transform = `translate(${xInput.value}px, ${yInput.value}px) rotate(${rotationInput.value}deg)`
}

// function updateColor(element, input) {
//   element.style.background = input.Value
// }
function changeColor(element, colorInput) {
  element.style.backgroundColor = colorInput.value
}


// Headline

function updateText(element, input) {
  element.textContent = input.value
}

headline.addEventListener("input", function () {
  updateText(word, headline)
})

// Color
grassColor.addEventListener("input", function () {
  changeColor(grassOverlay, grassColor)
  updateOutput(grassColorOutput, grassColor)
})


// ladybug
ladybugX.addEventListener("input", function (event) {
  updateTransform(ladybug, ladybugX, ladybugY, ladybugRotation);
})
ladybugY.addEventListener("input", function (event) {
  updateTransform(ladybug, ladybugX, ladybugY, ladybugRotation);
})
ladybugScale.addEventListener("input", function (event) {
  updateScale(ladybug, ladybugScale)
})

ladybugRotation.addEventListener("input", function (event) {
    updateTransform(ladybug, ladybugX, ladybugY, ladybugRotation)
})
// ladybugX.addEventListener("input", function (event) {
//   changePosition(ladybug, ladybugX, ladybugY);
// })
// ladybugY.addEventListener("input", function (event) {
//   changePosition(ladybug, ladybugX, ladybugY);
// })



// butterfly
butterflyX.addEventListener("input", function (event) {
  updateTransform(butterfly, butterflyX, butterflyY, butterflyRotation);
})
butterflyY.addEventListener("input", function (event) {
  updateTransform(butterfly, butterflyX, butterflyY, butterflyRotation);
})
butterflyScale.addEventListener("input", function (event) {
  updateScale(butterfly, butterflyScale)
})

butterflyRotation.addEventListener("input", function (event) {
    updateTransform(butterfly, butterflyX, butterflyY, butterflyRotation)
})
// butterflyX.addEventListener("input", function (event) {
//   changePosition(butterfly, butterflyX, butterflyY);
// })
// butterflyY.addEventListener("input", function (event) {
//   changePosition(butterfly, butterflyX, butterflyY);
// })
// butterflyScale.addEventListener("input", function (event) {
//   updateScale(butterfly, butterflyScale)
// })
// butterflyRotation.addEventListener("input", function (event) {
//     updateRotation(butterfly, butterflyRotation)
// })

// caterpillar
caterpillarX.addEventListener("input", function (event) {
  updateTransform(caterpillar, caterpillarX, caterpillarY, caterpillarRotation);
})
caterpillarY.addEventListener("input", function (event) {
  updateTransform(caterpillar, caterpillarX, caterpillarY, caterpillarRotation);
})
caterpillarScale.addEventListener("input", function (event) {
  updateScale(caterpillar, caterpillarScale)
})

caterpillarRotation.addEventListener("input", function (event) {
    updateTransform(caterpillar, caterpillarX, caterpillarY, caterpillarRotation)
})
// caterpillarX.addEventListener("input", function (event) {
//   changePosition(caterpillar, caterpillarX, caterpillarY);
// })
// caterpillarY.addEventListener("input", function (event) {
//   changePosition(caterpillar, caterpillarX, caterpillarY);
// })
// caterpillarScale.addEventListener("input", function (event) {
//   updateScale(caterpillar, caterpillarScale)
// })
// caterpillarRotation.addEventListener("input", function (event) {
//     updateRotation(caterpillar, caterpillarRotation)
// })