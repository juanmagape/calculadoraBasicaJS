var button = document.getElementById("calcular");

button.addEventListener("click", calculadora);


function calculadora() {
    let num1 = document.getElementById("num1").value;
    let operador = document.getElementById("operador").value;
    let num2 = document.getElementById("num2").value;

    let res;

    if (num1 == "" || num2 == "" || operador == "") {
        document.getElementById("res").innerHTML = `<p>Introduce datos válidos</p>`;
        return;
    }

    const a = Number(num1);
    const b = Number(num2);

    if (isNaN(a) || isNaN(b)) {
            document.getElementById("res").innerHTML = `<p>Introduce datos válidos</p>`;
            return;
    } else if (!["+", "-", "/", "*"].includes(operador)) {
            document.getElementById("res").innerHTML = `<p>Introduce alguno de estos operadores: +,-,*,/</p>`;
            return;
    } else {
        switch (operador) {
            case "+":
                res = a + b;
                break;
            case "/":
                res = a / b;
                break;
            case "*":
                res = a * b;
                break;
            case "-":
                res = a - b;
                break;
        }
    }

    document.getElementById("res").innerHTML = `<p>Resultado: ${res}</p>`;

}