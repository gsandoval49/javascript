<!DOCTYPE html>
<html>
  <head>
    <title>Calculator with JavaScript</title>
  </head>

  <body>
    <!-- display the calculation -->
    <!--Displays calculation both on front end and back end  -->
    <div id="display">0</div>

    <p>
      <button onclick="
        calculation += `1`;
        console.log(calculation);
        updateDisplay();
      ">1</button>

      <button onclick="
        calculation += '2';
        console.log(calculation);
        updateDisplay();
      ">2</button>
        
      <button onclick="
        calculation += '3';
        console.log(calculation);
        updateDisplay();
      ">3</button>

      <button onclick="
        calculation += ' + '
        console.log(' + ');
        updateDisplay();
      ">+</button>
    </p>

    <p>
      <button onclick="
        calculation += `4`;
        console.log(calculation);
        updateDisplay();
      ">4</button>

      <button onclick="
        calculation += '5';
        console.log(calculation);
        updateDisplay();
      ">5</button>
        
      <button onclick="
        calculation += '6';
        console.log(calculation);
        updateDisplay();
      ">6</button>

      <button onclick="
        calculation += ' - '
        console.log(' - ');
        updateDisplay();
      "> - </button>
    </p>

    <p>
      <button onclick="
        calculation += `7`;
        console.log(calculation);
        updateDisplay();
      ">7</button>

      <button onclick="
        calculation += '8';
        console.log(calculation);
        updateDisplay();
      ">8</button>
        
      <button onclick="
        calculation += '9';
        console.log(calculation);
        updateDisplay();
      ">9</button>

      <button onclick="
        calculation += ' * '
        console.log(' * ');
        updateDisplay();
      "> * </button>
    </p>

    <p>
      <button onclick="
        calculation += `0`;
        console.log(calculation);
        updateDisplay();
      ">0</button>

      <button onclick="
        calculation += '.';
        console.log(calculation);
        updateDisplay();
      "> . </button>
        
      <button onclick="
        calculation = eval(calculation);
        console.log(calculation);
        updateDisplay();
      "> = </button>

      <button onclick="
        calculation += ' / '
        console.log(' / ');
        updateDisplay();
      "> / </button>
    </p>

    
    
    <!-- old code delete later -->
    <button onclick="
      calculation = '';
      console.log('Cleared');
      updateDisplay();
    ">Clear</button>


    <br>
    <br>
    <br>
    <p>"Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding." — William Paul Thurston</p>
  
    <script>
      let calculation = '';

      // Function to update the display
      function updateDisplay() {
        document.getElementById('display').innerText = calculation || '0';
      }
    </script>

  </body> 
</html>





