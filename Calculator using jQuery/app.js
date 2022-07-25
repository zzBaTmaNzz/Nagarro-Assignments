let num1 = '';
let num2 = '';
let operator = '';
let total = '';

$(document).ready(function(){
    $('button').on('click', function(e){
        let btn = e.target.innerHTML;
        if(btn>='0' && btn<='9'){
            handleNumber(btn);
        }else if(btn === 'Clear'){
            num1 = num2 = '';
            operator = '';
            total = 0;
            displayButton(total);
    }
        else{
            handleOperator(btn);
        }
    });
})

function handleNumber(num){
    if(operator === ''){
        num1 += num;
        displayButton(num1); 
    }
    
    else{
        num2 += num;
        displayButton(num2); 
    }

    displayButton(num1 + operator + num2);
    
    
}

function handleOperator(oper){
    if(operator===""){
        operator=oper;
    }else{
        handleTotal();
        operator = oper;
    }
}

function handleTotal(){
    switch(operator){
        case '+':
            total+= +num1 + +num2;
            displayButton(total);
            break;
        case '-':
            total+= +num1 - +num2;
            displayButton(total);
            break;
        case '/':
            total+= +num1 / +num2;
            displayButton(total);
            break;
        case 'X':
            total+= +num1 * +num2;
            displayButton(total);
            break;
        case '^':
            total+= Math.pow(+num1, +num2);
            displayButton(total);
            break;
             
        case '%':
            total+= +num1 % +num2;
            displayButton(total);
            break;    
    }
    updateVariable();
}

function displayButton(btn){
    $('.input').text(btn);
}

function updateVariable(){
    num1 = total;
    num2 = "";
}