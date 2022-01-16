function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4 style='text-align:center;'><b>"+number1+" "+"X"+" "+number2+"</b></h4>";
    input_box = "<br><h4>Answer: </h4><span id='answer'><input type='text' id='player_answer' placeholder='Answer' class='form-control'></span>";
    check_button = "<br><button type='submit' class='btn btn-success' id='check' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}