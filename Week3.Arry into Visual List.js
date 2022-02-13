var h1Element = document.createElement('h1') //h1 tag
h1Element.innerText = 'Hello World'
document.body.append(h1Element)
let value = 10
    for (var i=1;i<=10; i++) {
}


var powerPeople = [
    "steve",
    "larry",
    "joe",
    "shirley",
    "steph",
    "nate",
    "rick",
    "emily"
]

var powerList = document.getElementById("power")

for (var i = 0; i < powerPeople.length; i++) {

    var newName = document.createElement("li")
    newName.textContent = powerPeople[i]
    powerList.append(newName)

}


document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");
element.style.backgroundColor = "pink"; 



//var raangersList = document.getElementById

//for (var i=0; i < powerRangers.length; i++)


 