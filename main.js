const COUNTRY_CODE = "tr";
const FLAG_SRC = `https://flagcdn.com/w1280/${COUNTRY_CODE}.png`;

function handleInputChange(event) {
    const correctAnswer = "TURKEY";
    if (correctAnswer.toLowerCase() === event.target.value.toLowerCase()) {
        console.log("CORRECT!!!");
    }
}

window.onload = function () {
    const flagImage = document.getElementById("flag-image");
    const answerInput = document.getElementById("answer-input");

    answerInput.addEventListener("keyup", handleInputChange);
    flagImage.src = FLAG_SRC;
};
