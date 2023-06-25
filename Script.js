//remove Donate button upon clicked
let donate = document.querySelector('.donate');
function hide(el) {
    el.remove();
}

//increase number of pettings upon clicked
var pettings = [3, 5, 8];
var select = [
    document.querySelector("#three-pettings"),
    document.querySelector("#five-pettings"),
    document.querySelector("#eight-pettings")
];

function pet(id) {
    pettings[id]++;
    select[id].innerHTML = pettings[id] + " petting(s)";
};

//select button and display message
function onSelect(event) {
    if (event.value != "Any Pet") {
        const el_1 = document.getElementById("popup"); //get popup element from HTML
        el_1.style.display = "block"; //display in block
        const msg = document.getElementById("msg"); //get message element
        msg.innerHTML = "You are looking for a " + event.value; //message change whenever dropdown menue value change
        document.body.style.background = "whitesmoke"; //once message shows, background change
        document.body.style.opacity = 0.5;
    }
}

 //hide message once click ok
function hidemsg(){
    document.getElementById("popup").style.display = "none";
    document.body.style.background = "white";
    document.body.style.opacity = 1;
    document.body.style.display = "hidden";
}
