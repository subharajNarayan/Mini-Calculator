// Standard Priority Calculator

var display1 = {
    operation: "",
    evaluation: "",
    answer: ""
};

// Default display value
$("#display1").val("");
$("#display2").val("");

// Set default theme (light)
$(".container").addClass("container-light");
$("form").addClass("form-light");
$("form input").addClass("form-input-light");
$(".operand-group").addClass("operand-group-light");
$(".operator-group").addClass("operator-group-light");
$("#equal").addClass("equal-light");
$("#clear").addClass("clear-light");
$("#backspace").addClass("backspace-light");


function evaluate() {
    try {
        math.eval(display1.operation);
        display1.evaluation = math.eval(display1.operation);
    } catch {
        if (e instanceof SyntaxError) {//Syntex error exception
            display1.evaluation = "Error";
            return false;//exception occured 
        } else {
            display1.evaluation = "UE";
            return false;
        }
    }
}

// Digits

$('#zero').on('click', function () {
    display1.operation = display1.operation + "0";
    $("#display1").val($('#display1').val() + '\u0030');
    evaluate();
    $("#display2").val(display1.evaluation);
})

$('#one').on('click', function () {
    display1.operation = display1.operation + "1";
    $('#display1').val($('#display1').val() + '\u0031');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#two').on('click', function () {
    display1.operation = display1.operation + "2";
    $('#display1').val($('#display1').val() + '\u0032');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#three').on('click', function () {
    display1.operation = display1.operation + "3";
    $('#display1').val($('#display1').val() + '\u0033')
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#four').on('click', function () {
    display1.operation = display1.operation + "4";
    $('#display1').val($('#display1').val() + '\u0034');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#five').on('click', function () {
    display1.operation = display1.operation + "5";
    $('#display1').val($('#display1').val() + '\u0035');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#six').on('click', function () {
    display1.operation - display1.operation + "6";
    $('#display1').val($('#display1').val() + '\u0036');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#seven').on('click', function () {
    display1.operation = display1.operation + "7";
    $('#display1').val($('#display1').val() + '\u0037');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#eight').on('click', function () {
    display1.operation = display1.operation + "8";
    $('#display1').val($('#display1').val() + '\u0038');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#nine').on('click', function () {
    display1.operation = display1.operation + "9";
    $('#display1').val($('#display1').val() + '\u0039');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#decimal').on('click', function () {
    display1.operation = display1.operation + ".";
    $('#display1').val($('#display1').val() + '\u002e');
    evaluate();
    $('#display2').val(display1.evaluation);
})

// --Operators--
$('#left-parenthesis').on('click', function () {
    display1.operation = display1.operation + "(";
    $('#display1').val($('#display1').val() + '\u0028');
    evaluate();
    $('#display2').val(display1.operation);
})
$('#right-parenthesis').on('click', function () {
    display1.operation = display1.operation + ")";
    $('#display1').val($('#display1').val() + '\u0028');
    evaluate();
    $('#display2').val(display1.operation);
})

$('#add').on('click', function () {
    display1.operation = display1.operation + "+";
    $('#display1').val($('#display1').val() + '\u002b');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#subtract').on('click', function () {
    display1.operation = display1.operation + "-";
    $('#display1').val($('#display1').val() + '\u2212');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#multiply').on('click', function () {
    display1.operation = display1.operation + "*";
    $('#display1').val($('#display1').val() + '\u00d7');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#divide').on('click', function () {
    display1.operation = display1.operation + "/";
    $('#display1').val($('#display1').val() + '\u00f7');
    evaluate();
    $('#display2').val(display1.evaluation);
})


$('#square-root').on('click', function () {

    var count = 0;
    var index = -1;
    var radicand = "";
    var result = "";

    if (display1.operation.endsWith(')')) {
        for (i = display1.operation.length - 2; i > -1; i--) {
            if (display1.operation.charAt(i) === '(') {
                if (count === 0) {
                    index = i;
                    break;
                }
                else {
                    count -= 1;
                    continue;
                }
            }
            else if (display1.operation.charAt(i) === ')') {
                count += 1;
            }
            else {
                continue;
            }
        }
        if (index === -1) {
            $('#display2').val("Malformed expression");
            return;
        }
    }
    // radicand is a single number
    else if (display1.operation.endsWith('0') || display1.operation.endsWith('1') ||
        display1.operation.endsWith('2') || display1.operation.endsWith('3') ||
        display1.operation.endsWith('4') || display1.operation.endsWith('5') ||
        display1.operation.endsWith('6') || display1.operation.endsWith('7') ||
        display1.operation.endsWith('8') || display1.operation.endsWith('9') ||
        display1.operation.endsWith('.')) {
        index = display1.operation.length - 1;
        for (i = display1.operation.length - 2; i > -1; i--) {
            if (display1.operation.charAt(i) === '0' || display1.operation.charAt(i) === '1' ||
                display1.operation.charAt(i) === '2' || display1.operation.charAt(i) === '3' ||
                display1.operation.charAt(i) === '4' || display1.operation.charAt(i) === '5' ||
                display1.operation.charAt(i) === '6' || display1.operation.charAt(i) === '7' ||
                display1.operation.charAt(i) === '8' || display1.operation.charAt(i) === '9' ||
                display1.operation.charAt(i) === '.' || display1.operation.charAt(i) === '^') {
                index = i;
            }
            else {
                break;
            }
        }
    }
    else {
        return;
    }
    radicand = display1.operation.substring(index, display1.operation.length);
    display1.operation = display1.operation.substring(0, index) + "sqrt(" + radicand + ")";
    radicand = radicand.replace(/\^2/g, "\u00b2");
    index = $('#display1').val().lastIndexOf(radicand);
    radicand = $('#display1').val().substring(index, $('#display1').val().length);
    $('#display1').val($('#display1').val().substring(0, index) + '\u221a' + radicand);
    evaluate();
    $('#display2').val(display1.evaluation);
});


$('#square').on('click', function () {
    display1.operation = display1.operation + '^2';
    $('#display1').val($('#display1').val() + '\u00b2');
    evaluate();
    $('#display2').val(display1.operation);
})

// Clear //
$('#clear').on('click', function () {
    display1.operation = "",
        display1.evaluation = "";
    $('#display1').val("");
    $('#display2').val("");
})

$('#equal').on('click', function () {
    display1.answer = display1.evaluation;
    $('#display1').val(display1.answer);
    $('#display2').val("");
    display1.operation = display1.answer;
    flag.ansAllowed = true;
})

// Allow 'ANS' when its flag is enabled

$('#ans').on('click', function () {
    if (flag.ansAllowed) {
        if (flag.squareRoot) {
            display1.operation = display1.operation.substring(0, display1.operation.length - 1) + display1.answer + ")";
        } else {
            display1.operation = display1.operation + display1.answer;
        }
        $('#display1').val($('#display1').val() + 'Ans');
        evaluate();
        $('#display2').val(display1.evaluation);
    }
})

// Backspace
$('#backspace').on('click', function () {    
    display1.operation = display1.operation.slice(0, display1.operation.length-1);
    $('#display1').val($('#display1').val().slice(0, $('#display1').val().length-1));
    evaluate();
    $('#display2').val(display1.evaluation);
})

// Theme system
$("input[type='checkbox']").change(function () {
    // dark theme
    if (this.checked) {
        //alert("dark");
        $(".container").removeClass("container-light");
        $(".container").addClass("container-dark");
        $("form").removeClass("form-light");
        $("form").addClass("form-dark");
        $("form input").removeClass("form-input-light");
        $("form input").addClass("form-input-dark");
        $(".operand-group").removeClass("operand-group-light");
        $(".operand-group").addClass("operand-group-dark");
        $(".operator-group").removeClass("operator-group-light");
        $(".operator-group").addClass("operator-group-dark");
        $("#equal").removeClass("equal-light");
        $("#equal").addClass("equal-dark");
        $("#clear").removeClass("clear-light");
        $("#clear").addClass("clear-dark");
        $("#backspace").removeClass("backspace-light");
        $("#backspace").addClass("backspace-dark");
    }
    // light theme (default)
    else {
        //alert("light");
        $(".container").removeClass("container-dark");
        $(".container").addClass("container-light");
        $("form").removeClass("form-dark");
        $("form").addClass("form-light");
        $("form input").removeClass("form-input-dark");
        $("form input").addClass("form-input-light");
        $(".operand-group").removeClass("operand-group-dark");
        $(".operand-group").addClass("operand-group-light");
        $(".operator-group").removeClass("operator-group-dark");
        $(".operator-group").addClass("operator-group-light");
        $("#equal").removeClass("equal-dark");
        $("#equal").addClass("equal-light");
        $("#clear").removeClass("clear-dark");
        $("#clear").addClass("clear-light");
        $("#backspace").removeClass("backspace-dark");
        $("#backspace").addClass("backspace-light");
    }
})