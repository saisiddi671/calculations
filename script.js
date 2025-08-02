// create objects first
const add = document.getElementById("add1");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const div = document.getElementById("div");
const mod = document.getElementById("mod");
const and1 = document.getElementById("and");
const result = document.getElementById("result");

// add of two numbers
add.addEventListener("click", function () {
  const num1 = Number(document.getElementById("n1").value);
  const num2 = Number(document.getElementById("n2").value);
  if (num1 == "" && num1 == "") {
    result.innerHTML = `Please enter above inputs`;
    
  } else {
    result.innerHTML = `Addition of ${num1} and ${num2} is :` + (num1 + num2);
    
  }
});

//subtract of two numbers
sub.addEventListener("click", function () {
  const num1 = Number(document.getElementById("n1").value);
  const num2 = Number(document.getElementById("n2").value);
  if (num1 == "" && num1 == "") {
    result.innerHTML = `Please enter above inputs`;

  } else {
    result.innerHTML =
      `Subtraction of ${num1} and ${num2} is :` + (num1 - num2);
  }
});

//multiplication of two numbers
mul.addEventListener("click", function () {
  const num1 = Number(document.getElementById("n1").value);
  const num2 = Number(document.getElementById("n2").value);
  if (num1 == "" && num1 == "") {
    result.innerHTML = `Please enter above inputs`;
  } else {
    result.innerHTML =
      `Multiplication of ${num1} and ${num2} is :` + num1 * num2;
  }
});

//division of two number
div.addEventListener("click", function () {
  const num1 = Number(document.getElementById("n1").value);
  const num2 = Number(document.getElementById("n2").value);
  if (num1 == "" && num1 == "") {
    result.innerHTML = `Please enter above inputs`;
  } else {
    result.innerHTML =
      `Division of ${num1} and ${num2} is :` +
      parseFloat(num1 / num2).toFixed(3);
  }
});

//modulo of two number
mod.addEventListener("click", function () {
  const num1 = Number(document.getElementById("n1").value);
  const num2 = Number(document.getElementById("n2").value);
  if (num1 == "" && num1 == "") {
    result.innerHTML = `Please enter above inputs`;
  } else {
    result.innerHTML = `Modulo of ${num1} and ${num2} is :` + (num1 % num2);
  }
});

result.style.textAlign = "center";
result.style.fontFamily = "elephant";
result.style.fontSize = "25px";
