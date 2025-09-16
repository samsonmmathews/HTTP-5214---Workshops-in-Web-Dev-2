window.onload = function() {
    let submitBtn = document.getElementById('submitBtn');
    let inputField = document.getElementById("inputField");
    let result = document.getElementById("result");

    submitBtn.onclick = function() {
        let inputValue = inputField.value;
        let reverse = getFibonacci(inputValue);
        result.textContent = "Result: " + reverse;
    }

    function getFibonacci(input) {
        let first = 1, second = 1;
        let third;
        if(input == 1 || input == 2)
        {
            return first;
        }
        else
        {
            for(let i = 2; i < input; i++)
            {
                third = first + second;
                first = second;
                second = third;
            }
            return third;
        }
    }
}