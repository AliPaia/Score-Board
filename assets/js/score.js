var restartBtn = document.querySelector("button.restartBtn"),
clearBtn = document.querySelector("button.clearBtn"),
topScores = JSON.parse(localStorage.getItem("topScores") || "[]"),
scoreList = document.getElementById("score-list");

// orders score results *
topScores.sort(function (a, b) {
    return b.score - a.score
    })

// show scores *
for (var s = 0; s < topScores.length; s++) {
    var newLi = document.createElement("li")
    newLi.textContent = topScores[s].name + " - " + topScores[s].score
    scoreList.appendChild(newLi)
    }

    clearBtn.addEventListener("click", function () {
        localStorage.clear();
        history.back()
        });
        restartBtn.addEventListener("click", function () {
        history.back();
        });