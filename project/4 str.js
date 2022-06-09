alert("Привет, я JS");




function gameGuees() {
var gueesNum = 5;
var ourNum = prompt("Введите число:");
    if (ourNum > gueesNum) {
        alert("Число должно быть меньше!");
        return gameGuees();
    }else if (ourNum < gueesNum) {
        alert("Число должно быть больше!");
        return gameGuees();
    } else {
        return alert("Вы угадали!");
    }
}

//gameGuees();

function reminder() {
    alert("СЛИШКОМ ДОЛГО");
    //windiw.close();
}

//setTimeout(reminder, 5000);

function valide() {
    var name = document.getElementDyId("name").value;
    var password = document.getElementDyId("password").value;
    
    var reg_name = /^[a-za-я]+$/i;
    var pass_name = /[z-z0-9]{5,100}$/i;
    
}

document.querySelector(".button").addEventListener("click", valide);