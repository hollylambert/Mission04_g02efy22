////create function to calculate the final grade
function calcSum() {
    let num1 = $("#assignments").val();
    let num2 = $("#group").val();
    let num3 = $("#quizzes").val();
    let num4 = $("#midterm").val();
    let num5 = $("#final").val();
    let num6 = $("#intex").val();
    let sum = Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5) + Number(num6);

    ////if statement to determine the letter grade

    if (sum >= 94) {
        document.getElementById('sum').innerHTML = sum + '% A';
    }
    else if (sum >= 90 && sum < 94) {
        document.getElementById('sum').innerHTML = sum + '% A-';
    }
    else if (sum >= 87 && sum < 90) {
        document.getElementById('sum').innerHTML = sum + '% B+';
    }
    else if (sum >= 84 && sum < 87) {
        document.getElementById('sum').innerHTML = sum + '% B';
    }
    else if (sum >= 80 && sum < 84) {
        document.getElementById('sum').innerHTML = sum + '% B-';
    }
    else if (sum >= 77 && sum < 80) {
        document.getElementById('sum').innerHTML = sum + '% C+';
    }
    else if (sum >= 74 && sum < 77) {
        document.getElementById('sum').innerHTML = sum + '% C';
    }
    else if (sum >= 70 && sum < 74) {
        document.getElementById('sum').innerHTML = sum + '% C-';
    }
    else if (sum >= 67 && sum < 70) {
        document.getElementById('sum').innerHTML = sum + '% D+';
    }
    else if (sum >= 64 && sum < 67) {
        document.getElementById('sum').innerHTML = sum + '% D';
    }
    else if (sum >= 60 && sum < 64) {
        document.getElementById('sum').innerHTML = sum + '% D-';
    }
    else {
        document.getElementById('sum').innerHTML = sum + '% E';
    }
}