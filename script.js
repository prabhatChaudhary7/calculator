function appendToResult(value) {
    document.getElementById("result").value += value;
  }
  
  function clearScreen() {
    document.getElementById("result").value = "";
  }
  
  function backspace() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
  }
 
  function calculateResult() {
    let result = document.getElementById("result").value;
    try {
     
      document.getElementById("result").value = eval(result);
    } catch (error) {
      alert("Invalid calculation");
    }
  }
  