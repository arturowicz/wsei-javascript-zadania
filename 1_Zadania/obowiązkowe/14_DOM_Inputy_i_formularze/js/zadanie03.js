function submitForm() {
    var inputFields = [...document.querySelectorAll("form div.form-group input")];
    var scoreboard = document.querySelector("table.table tbody");

    var team1 = inputFields.find(field => field.id === "team1");
    var team2 = inputFields.find(field => field.id === "team2");

    var points1 = inputFields.find(field => field.id === "points1");
    var points2 = inputFields.find(field => field.id === "points2");


    var teamsAreDifferent = team2.value.trim() !== team1.value.trim();
    var pointsOneCorrect = points1.value >= 0;
    var pointsTwoCorrect = points2.value >= 0;

    if (teamsAreDifferent && pointsOneCorrect && pointsTwoCorrect) {
        var scoreentry = document.createElement("tr");

        var team1Cell = document.createElement("td");
        var team2Cell = document.createElement("td");
        var pointsCell = document.createElement("td");

        team1Cell.innerText = team1.value;
        team2Cell.innerText = team2.value;
        pointsCell.innerText = `${points1.value} : ${points2.value}`;

        scoreentry.appendChild(team1Cell);
        scoreentry.appendChild(team2Cell);
        scoreentry.appendChild(pointsCell);

        scoreboard.appendChild(scoreentry);
    }

    return false;
}
