
// *** Tomamos los elementos del HTML y le asignamos un nombre en JS ***
const primer_num = document.getElementById("op1");
const operador_0 = document.getElementById("operador");
const segundo_num = document.getElementById("op2");
const boton_calc = document.getElementById("calcular");
const resulta = document.getElementById("resultado");

// *** Tomamos un elemeto y le agregamos funcion al hacer click, a traves del escuchador
boton_calc.addEventListener('click', calcular);

// *** Definimos una función ***
function calcular(){
    // definimos una var con el contenido del input del operador
    const operador = operador_0.value;
    const op1 = parseFloat(primer_num.value);
    const op2 = parseFloat(segundo_num.value);

    if((operador=='+' || operador=='-' || operador=='*' || operador=='/') && !isNaN(op1) && !isNaN(op2) ){
        let final;
        switch (operador){
            case "+":
                final = op1 + op2;
                break;
            case "-":
                final = op1 - op2;
                break;
            case "*":
                final = op1 * op2;
                break;
            case "/":
                final = op1 / op2;
                break;                
        }
        resulta.style = "color:black";
        resulta.innerText = "= " + final;
    }else {
        resulta.style = "color:red";
        resulta.innerText = "Calculo imposible";
    }


}



