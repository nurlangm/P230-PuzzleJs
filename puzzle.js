function Default(e) {
    e.preventDefault();
}

function setdata(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function getdata(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
}