const texts = {
    easy: ["Hello world", "Typing is fun", "I love coding"],
    medium: ["Javascript is a powerful language", "Typing speed improves with practice", "Accuracy is important in typing"],
    hard: ["Typing fast and accurately requires patience", "Debugging and fixing errors can be challenging", "Mastering a keyboard is a useful skill"]
};

let startTime, interval;

function getRandomText(difficulty) {
    const textArray = texts[difficulty];
    return textArray[Math.floor(Math.random() * textArray.length)];
}

function startTest() {
    const difficulty = document.getElementById("difficulty").value;
    document.getElementById("target-text").innerText = getRandomText(difficulty);
    document.getElementById("input-box").value = "";
    document.getElementById("wpm").innerText = "0";
    document.getElementById("accuracy").innerText = "100%";
    document.getElementById("input-box").focus();
    startTime = null;
    clearInterval(interval);
}

function calculateResults() {
    const target = document.getElementById("target-text").innerText;
    const input = document.getElementById("input-box").value;
    
    let correct = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === target[i]) correct++;
    }
    
    const accuracy = ((correct / target.length) * 100).toFixed(2);
    document.getElementById("accuracy").innerText = accuracy + "%";

    const timeElapsed = (Date.now() - startTime) / 60000;
    const wpm = Math.round((input.length / 5) / timeElapsed);
    document.getElementById("wpm").innerText = wpm > 0 ? wpm : "0";

    if (input === target) {
        clearInterval(interval);
    }
}

document.getElementById("input-box").addEventListener("input", function() {
    if (!startTime) {
        startTime = Date.now();
        interval = setInterval(calculateResults, 500);
    }
    calculateResults();
});

function restartTest() {
    startTest();
}

document.getElementById("difficulty").addEventListener("change", startTest);

startTest();