"use strict";
/*
Erstellen Sie eine Mini-Anwendung, die nach einem Benutzernamen und nach einem Passwort fragt und dann den Benutzer begrüßt.
Jedes Passwort wird erstmal akzeptiert.
Viel Erfolg!
*/
function login(u) {
    let user = document.getElementById("user").value;
    document.getElementById("hi").textContent = `Hello ${user}`;
}
