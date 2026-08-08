const cord = document.getElementById("cord");

let isDragging = false;
let startY = 0;
let pullDistance = 0;

const maxPull = 70;
const requiredPull = 45;


cord.addEventListener("pointerdown", (event) => {

    isDragging = true;

    startY = event.clientY;

    cord.setPointerCapture(event.pointerId);

});


cord.addEventListener("pointermove", (event) => {

    if (!isDragging) {
        return;
    }

    let distance = event.clientY - startY;

    if (distance < 0) {
        distance = 0;
    }

    if (distance > maxPull) {
        distance = maxPull;
    }

    pullDistance = distance;

    cord.style.height = `${105 + distance}px`;


    cord.style.transform =
        `rotate(${distance * 0.08}deg)`;

});


cord.addEventListener("pointerup", () => {

    if (!isDragging) {
        return;
    }

    isDragging = false;

    if (pullDistance >= requiredPull) {

        toggleLamp();

    }

    resetCord();

});


cord.addEventListener("pointercancel", () => {

    isDragging = false;

    resetCord();

});


function toggleLamp() {

    document.body.classList.toggle("lamp-on");

    document.body.classList.toggle("login-visible");

}


function resetCord() {

    cord.style.height = "105px";

    cord.style.transform = "rotate(0deg)";

    pullDistance = 0;

}