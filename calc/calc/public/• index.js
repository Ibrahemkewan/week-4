// Function to update the formula based on input values
function updateFormula() {
    // Get the value of the first operand
    var x = document.getElementsByName('x')[0].value;
    var y = document.getElementsByName('y')[0].value;
    // Get the value of the selected operation
    var operation = document.getElementsByName('operation')[0].value;
    var operationText = document.getElementsByTagName('option')[operation].innerText;
    // Update the formula display with the calculation
    document.getElementById('formula').innerText = `${x} ${operationText} ${y} = ?`;
}

// Loop through all form elements
for (var i = 0; i < document.forms[0].elements.length; i++) {
    const element = document.forms[0].elements[i];
    // Assign the updateFormula function to the onchange event of each form element
    element.onchange = updateFormula;
}
