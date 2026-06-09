let homeScoreEl = document.getElementById("home-score")
let awayScoreEl = document.getElementById("away-score")
let homeScore = 0
let awayScore = 0

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
        return awayScore
    }
}

function getTeamEl(team) {
    // Retrieve team score DOM element
    if (team === "HOME") {
        return homeScoreEl
    } else {
        return awayScoreEl
    }
}

function setTeamScore(team, score) {
    // Set team score
    if (team === "HOME") {
        homeScore = score
    } else {
        awayScore = score
    }
}

function highlightWinningScore() {
    if (homeScore > awayScore) {
        homeScoreEl.style.color = "#ffd700"
    } else if (awayScore > homeScore) {
        awayScoreEl.style.color = "#ffd700"
    } else {
        homeScoreEl.style.color = "#F94F6D"
        awayScoreEl.style.color = "#F94F6D"
    }
}