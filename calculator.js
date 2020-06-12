/* var controller = (function() {

  var history = document.getElementById('history-value').innerText;
  var output = document.getElementById('output-value').innerText;

  var getHistory = function() {
    return history;
  }

  var printHistory = function(num) {
    document.getElementById('history-value').innerText = num;
  }

  var getOutput = function() {
    return output;
  }

  var printOutput = function(num) {
    if(num == '') {
      document.getElementById('output-value').innerText = num;
    }
    else {
      document.getElementById('output-value').innerText = getFormatedNum(num);
    }
  }

  var getFormatedNum = function(num) {
    if(num === '-') {
        return '';
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
  }

  // Function to convert string value to number to manipulate it
  // this will replace ',' to an empty character
  var reverseNumberFormat = function(num) {
    return Number(num.replace(/,/g,''));
  }


  var operator = function() {
      var operator = document.getElementsByClassName("opr");
      for(var i=0; i < operator.length; i++) {
        operator[i].addEventListener('click', function(){
          if(this.id === 'clear') {
            printHistory("");
            printOutput("");
          }
          else if(this.id === 'back') {
            var output = reverseNumberFormat(getOutput()).toString();
            if(output) {
              output = output.substr(0, output.length-1);
              printOutput(output);
            }
          }
          else {
            var output = getOutput();
            var history = getHistory();
            var len = history.length;
            if(output== "" && history!== "") {
              if(isNaN(history[len-1])) {
                history = history.substr(0, len-1);
              }
            }
            if(output!== '' || history!== '') {
              output = output ==''? output:reverseNumberFormat(output);
              history = history+output;
              if(this.id === "=") {
                var result = eval(history);
                printOutput(result);
                printHistory('');
              }
              else {
                history = history + this.id;
                printHistory(history);
                printOutput('');
              }
            }
          }

        });

      }
    };

    var number = function() {
      var number = document.getElementsByClassName("num");

      for(var i=0; i<operator.length; i++) {
        number[i].addEventListener('click', function(){
          var output = reverseNumberFormat(getOutput());
          if(output !=NaN) { // If output is a number
            output = output + this.id;
            printOutput(output);
          }
        });
      }
    };

    return {

      init: function() {
          console.log('Program has started');
          // setupEventListeners();
          operator();
          number();
      }
    };

})();

controller.init();

*/









// var history = document.getElementById('history-value').innerText;
// var output = document.getElementById('output-value').innerText;

function getHistory() {
    return document.getElementById('history-value').innerText;
    // return history;
}

function printHistory(num) {
    document.getElementById('history-value').innerText = num;
}

function getOutput() {
    // return output;
    return document.getElementById('output-value').innerText
}

function printOutput(num) {
    if(num === '') {
      document.getElementById('output-value').innerText = num;
    }
    else {
      document.getElementById('output-value').innerText = getFormatedNum(num);
    }
}

function getFormatedNum(num) {
  if(num === '-') {
      return '';
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}

// Function to convert string value to number to manipulate it
// this will replace ',' to an empty character
function reverseNumberFormat(num) {
  return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("opr");

for(var i=0; i < operator.length; i++) {
  operator[i].addEventListener('click', function(){
    if(this.id === 'clear') {
      printHistory("");
      printOutput("");
    }
    else if(this.id === 'back') {
      var output = reverseNumberFormat(getOutput()).toString();
      if(output) {
        output = output.substr(0, output.length-1);
        printOutput(output);
      }
    }
    else {
      var output = getOutput();
      var history = getHistory();
      if(output === "" && history!== "") {
        if(isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1);
        }
      }
      if(output!== '' || history!== '') {
        output = output === ''? output:reverseNumberFormat(output);
        history = history + output;
        if(this.id === "=") {
          var result = eval(history);
          printOutput(result);
          printHistory('');
        }
        else {
          history = history + this.id;
          printHistory(history);
          printOutput('');
        }
      }
    }

  });
}

var numbers = document.getElementsByClassName("num");

for(var i=0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function(){
    var output = reverseNumberFormat(getOutput());
    if(output !== NaN) { // If output is a number
      output = output + this.id;
      printOutput(output);
    }
  });
}

console.log('Program has started');
