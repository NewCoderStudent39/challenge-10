const createTeam = function (team) {
    const createManager = function (manager) {
        return `<div class="card-container">
        <div class="card-body">
        <ul class="attributes-list">
            <li > ${manager.getName()} </li>
            <li> ${manager.getRole()} </li>
            <li> ID: ${manager.getId()}</li>
            <li> Email: ${manager.getEmail()} </li>
            <li> Office # ${manager.getphoneNum()} </li>
        </ul>
    </div>
    </div>`;
    };
    const createEngineer = function(engineer) {
        return `<div class="card-container">
        <div class="card-body">
        <ul class="attributes-list">
            <li > ${engineer.getName()} </li>
            <li> ${engineer.getRole()} </li>
            <li> ID: ${engineer.getId()}</li>
            <li> Email: ${engineer.getEmail()} </li>
            <li> GitHub link: ${engineer.getGitHub()}</li>
        </ul>
    </div>
    </div>`;
    };
    const createIntern= function(intern) {
        return `<div class="card-container">
        <div class="card-body">
        <ul class="attributes-list">
            <li > ${intern.getName()} </li>
            <li> ${intern.getRole()} </li>
            <li> ID: ${intern.getId()}</li>
            <li> Email: ${intern.getEmail()} </li>
            <li> GitHub link: ${intern.getSchool()}</li>
        </ul>
    </div>
    </div>`;
    };
    const html = [];

    html.push(
        team
            .filter((teamMember) => teamMember.getRole() === "Manager")
            .map((manager) => createManager(manager))
            .join("")
    );
    html.push(
        team
            .filter((teamMember) => teamMember.getRole() === "Engineer")
            .map((engineer) => createEngineer(engineer))
            .join("")
    );
    html.push(
        team
            .filter((teamMember) => teamMember.getRole() === "Intern")
            .map((intern) => createIntern(intern))
            .join("")
    );
    return html.join("");
};

module.exports= function(team) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../styles/reset.css" />
        <link rel="stylesheet" href="../styles/style.css" />
        <title> Challenge 10 </title>
    </head>
    <body>
        <h1> Team Profile Cards Generator </h1>
        <div class="page-container">
            ${createTeam(team)}
        </div>
</body>
</html>`;
};