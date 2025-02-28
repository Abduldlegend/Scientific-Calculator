let inputField = document.getElementById("input");

function addToInputField(value) {
    inputField.value += value;

}
function deleteValue() {
    inputField.value = inputField.value.slice(0, -1);
}

function clearInputField() {
    inputField.value = "";
}

function calculateResult(){
    try {
        let expression = inputField.value;

        // Basic Arithmetic operations

        expression = expression.replace(/sqrt/g, "Math.sqrt");

        expression = expression.replace(/(\d+)\^(\d+)/g, (_, base, exponent) => `Math.pow(${base}, ${exponent})`);

        expression = expression.replace(/sin\((.*?)\)/g, (_, expr) => `Math.sin((${expr}) * Math.PI / 180)`);

        expression = expression.replace(/cos\((.*?)\)/g, (_, expr) => `Math.cos((${expr}) * Math.PI / 180)`);
        
        expression = expression.replace(/tan\((.*?)\)/g, (_, expr) => `Math.tan((${expr}) * Math.PI / 180)`);

        expression = expression.replace(/log/g, "Math.log");

        expression = expression.replace(/3.142/g, "Math.PI");

        expression = expression.replace(/(\d+\.?\d*)[eE](\d+)/g, (_, base, exponent) => `${base} * Math.pow(10, ${exponent})`);

        expression = expression.replace(/(\d+)!/g, (_, num) => factorial(parseInt(num)));

        inputField.value = eval(expression);
    } catch (error) {
        inputField.value = "Error";
    }

    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}