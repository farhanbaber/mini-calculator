function calculate() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let type = document.getElementById("selection").value
    let result;
    if (type === "+") {
        result = a + b;
    } else if (type === "-") {
        result = a - b;
    }else if (type === "*") {
        result = a * b;
    }else if (type === "/") {
        result = a / b;
    }else if (type === "%") {
        result = a % b;
    }
     document.getElementById("inner-para").textContent = " " + "Your Result : " + result

    
}