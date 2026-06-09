let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function addPoints(team, points) {
    // Retrieve and calculate score
    let teamEl = getTeamEl(team)
    let teamScore = getTeamScore(team)
    let newScore = calculateScore(teamScore, points)
    
    // Save and display
    setTeamScore(team, newScore)
    highlightWinningScore()
    teamEl.textContent = formatScore(newScore)
}

function calculateScore(score, addition) {
    // Caluclate team score
    console.log(score + addition)
    return score + addition   
}

function formatScore(score) {
    // Format score in "00" format
    if (score <= 9) {
        return "0" + score
    } else {
        return score
    }
}

function getTeamScore(team) {
    // Retrieve team score
    if (team === "HOME") {
        return homeScore
    } else {
        return guestScore
    }
}

function getTeamEl(team) {
    // Retrieve team score DOM element
    if (team === "HOME") {
        return homeScoreEl
    } else {
        return guestScoreEl
    }
}

function setTeamScore(team, score) {
    // Set team score
    if (team === "HOME") {
        homeScore = score
    } else {
        guestScore = score
    }
}

function highlightWinningScore() {
    if (homeScore > guestScore) {
        homeScoreEl.style.color = "#ffd700"
    } else if (guestScore > homeScore) {
        guestScoreEl.style.color = "#ffd700"
    } else {
        homeScoreEl.style.color = "#F94F6D"
        guestScoreEl.style.color = "#F94F6D"
    }
}