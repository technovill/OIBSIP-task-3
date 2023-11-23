function calculateTemp() {
    var temperature = parseFloat(document.getElementById("tempInput").value);
    var temp_diff = document.getElementById("temp_diff").value;
    var result;
    var message;

    if (temp_diff === "cel") {
        result = (temperature - 32) * (5 / 9);
    } else {
        result = (temperature * 9 / 5) + 32;
    }

    document.getElementById("result").innerHTML = "Result: " + result.toFixed(2) + " &#176;";

    if (result >= 30) {
        message = "It's hot!";
    } else if (result >= 10 && result < 30) {
        message = "It's moderate.";
    } else {
        message = "It's cold!";
    }

    document.getElementById("message").innerHTML = message;
}
