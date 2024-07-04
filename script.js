var points = document.querySelector("select");
points.addEventListener("change", function () {
    reset();
});

document.getElementById("reset").addEventListener("click", function() {
    reset();
});

var p1button = document.getElementById("p1button");
var p2button = document.getElementById("p2button");

var p1points = document.getElementById("p1points");
var p2points = document.getElementById("p2points");

var p1 = 0;
var p2 = 0;

p1points.innerText = p1;
p2points.innerText = p2;

p1button.addEventListener("click", function () {
    updatePoints("p1");
});

p2button.addEventListener("click", function () {
    updatePoints("p2");
});

function updatePoints(p) {
    if (p === "p1") {
        p1++;
        updateScore();
    }
    else {
        p2++;
        updateScore();
    }
}

function updateScore() {
    p1points.innerText = p1;
    p2points.innerText = p2;
    if(p1 > p2)
        {
            document.getElementById("winner").innerText = `P1 IS LEADING BY ${p1-p2} POINTS`;
        }
    else if (p2 > p1)
        {
            document.getElementById("winner").innerText = `P2 IS LEADING BY ${p2-p1} POINTS`;
        }
    else {
        document.getElementById("winner").innerText = `SCORES LEVEL`;
    }
    if(p1points.innerText === points.value)
        {
            declareWinner("p1");
            disableButtons();
        } 
    else if(p2points.innerText === points.value)
        {
            declareWinner("p2");
            disableButtons();
        } 
}

function declareWinner(winner) {
    if(winner === "p1")
        {
            document.getElementById("winner").innerText = `P1 WINS BY ${p1-p2} POINTS`;
            document.getElementById("p1box").style.backgroundColor = "greenyellow";
            document.getElementById("p2box").style.backgroundColor = "red";
        }
        else
            {
                document.getElementById("winner").innerText = `P2 WINS BY ${p2-p1} POINTS`;
                document.getElementById("p2box").style.backgroundColor = "greenyellow";
                document.getElementById("p1box").style.backgroundColor = "red";
            }
}

function disableButtons() {
    p1button.disabled = true;
    p2button.disabled = true;
}

function enableButtons() {
    p1button.disabled = false;
    p2button.disabled = false;
}

function reset() {
    p1 = 0;
    p2 = 0;
    document.getElementById("p1box").style.backgroundColor = "white";
    document.getElementById("p2box").style.backgroundColor = "white";
    document.getElementById("winner").innerText = "";
    updateScore();
    enableButtons();
}