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

        inputField.value = eval(expression);
    } catch (error) {
        inputField.value = "Error";
    }
}