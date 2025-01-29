const story = {
    start: {
        text: "You wake up in a mysterious forest. Two paths lie ahead.",
        choices: [
            { text: "Take the left path", next: "left_path" },
            { text: "Take the right path", next: "right_path" }
        ]
    },
    left_path: {
        text: "You encounter a river. Do you swim across or follow it?",
        choices: [
            { text: "Swim across", next: "swim" },
            { text: "Follow the river", next: "follow_river" }
        ]
    },
    right_path: {
        text: "A wild animal appears! Do you run or fight?",
        choices: [
            { text: "Run away", next: "run" },
            { text: "Stand your ground", next: "fight" }
        ]
    },
    swim: {
        text: "The current was strong, but you made it across safely.",
        choices: [
            { text: "Continue forward", next: "end" }
        ]
    },
    follow_river: {
        text: "Following the river led you to safety.",
        choices: [
            { text: "Continue forward", next: "end" }
        ]
    },
    run: {
        text: "You successfully escaped, but got lost.",
        choices: [
            { text: "Look for shelter", next: "end" }
        ]
    },
    fight: {
        text: "You bravely fought off the animal and found a village.",
        choices: [
            { text: "Enter the village", next: "end" }
        ]
    },
    end: {
        text: "Your journey has reached its conclusion. Well done!",
        choices: []
    }
};

let progressPath = [];

function loadGame() {
    const savedProgress = localStorage.getItem("storyProgress");
    const savedPath = JSON.parse(localStorage.getItem("progressPath"));
    if (savedProgress && story[savedProgress]) {
        progressPath = savedPath || [];
        updateStory(savedProgress);
    } else {
        updateStory("start");
    }
}

function updateStory(storyPoint) {
    localStorage.setItem("storyProgress", storyPoint);
    document.getElementById("story-text").innerText = story[storyPoint].text;
    
    if (storyPoint !== "start") {
        progressPath.push(story[storyPoint].text);
        localStorage.setItem("progressPath", JSON.stringify(progressPath));
    }

    document.getElementById("progress").innerText = progressPath.join(" > ");
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";
    
    story[storyPoint].choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.onclick = () => updateStory(choice.next);
        choicesDiv.appendChild(button);
    });
}

function resetGame() {
    localStorage.removeItem("storyProgress");
    localStorage.removeItem("progressPath");
    progressPath = [];
    updateStory("start");
}

loadGame();