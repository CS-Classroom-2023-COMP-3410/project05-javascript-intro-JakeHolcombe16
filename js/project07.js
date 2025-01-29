let memory = 0;
        
        function insert(value) {
            document.getElementById("display").value += value;
        }
        
        function clearDisplay() {
            document.getElementById("display").value = "";
        }
        
        function calculate() {
            try {
                let result = eval(document.getElementById("display").value);
                if (result === Infinity || result === -Infinity) {
                    throw new Error("Cannot divide by zero");
                }
                document.getElementById("display").value = result;
                memory = result;
            } catch (error) {
                document.getElementById("display").value = "Error";
            }
        }
        
        function sqrt() {
            try {
                let value = parseFloat(document.getElementById("display").value);
                if (value < 0) {
                    throw new Error("Invalid Input");
                }
                document.getElementById("display").value = Math.sqrt(value);
            } catch (error) {
                document.getElementById("display").value = "Error";
            }
        }
        
        function memoryRecall() {
            document.getElementById("display").value = memory;
        }