function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.calculate = function (firstNum, symbol, secondNum) {
  var result = 0;
  if (symbol === "add")
  {
    result = firstNum + secondNum;
  }
  else if (symbol === "subtract")
  {
    result = firstNum - secondNum;
  }
  else if (symbol === "multiply")
  {
    result = firstNum * secondNum;
  }
  else
  {
    result = firstNum / secondNum;
  }
  return result;
};

exports.calculatorModule = Calculator;
