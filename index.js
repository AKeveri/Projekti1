// Create a "close" button and append it to each list item 
var kauppaLista = document.getElementsByTagName("LI");
var i;
for (i = 0; i < kauppaLista.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    kauppaLista[i].appendChild(span);
}

// Click on a close button to hide the current list item. Klikkaa ruksia poistaaksesi tuotteen
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item. Lisää merkkauksen jo löydetylle/otetulle tuotteelle
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button. Lisätää tavaraa listaan
function uusiTuote() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Et lisännyt mitään, lisää jotain kauppalistaan kirjoittamlalla ruutuun.");
    } else {
        document.getElementById("lisTa").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    localStorage.setItem("inputValue", JSON.stringify(inputValue));
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }


}
