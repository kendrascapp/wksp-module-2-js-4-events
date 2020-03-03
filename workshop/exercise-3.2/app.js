const mainDiv = document.getElementById("main"); 

function turnGreen(event) {
    const buttonId = event.target.id;
    document.getElementById(buttonId).classList.add('green');
}

for (let i = 0; i <= 20; i++) {
    const button = document.createElement('button'); // we styled the button in the CSS in the HTML doc, but we didnt really create the button yet
    button.innerText = i; //this makes the buttons be numbered and also multiply by 20
    button.id = `btn-${i}`;
    mainDiv.appendChild(button);

    button.addEventListener('click', turnGreen);
}
// I don't know how to make the green go away lol 