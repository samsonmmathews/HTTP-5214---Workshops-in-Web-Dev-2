window.onload = function() {
    let submitBtn = document.getElementById('submitBtn');
    let inputField = document.getElementById("inputField");
    let result = document.getElementById("result");

    submitBtn.onclick = function() {
        let inputValue = inputField.value;
        let reverse = reverseValue(inputValue);
        result.textContent = "Reversed: " + reverse;
    }

    function reverseValue(input)
    {
        let length = input.length;
        let reverse = "";
        for(let i = length - 1; i >= 0; i--)
        {
            reverse += input[i];
        }
        return reverse;
    }
}