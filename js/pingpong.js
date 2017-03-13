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

Calculator.prototype.calculate = function (firstNum, secondNum) {
  if (".math-symbol" === add)
  {
    return firstNum + secondNum;
  }
  else if (".math-symbol" === subtract)
  {
    return firstNum - secondNum;
  }
  else if (".math-symbol" === multiply)
  {
    return firstNum - secondNum;
  }
  else
  {
    return firstNum / secondNum;
  }
}

exports.calculatorModule = Calculator;
