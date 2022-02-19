let value = 10
    for (var i=1;i<=10; i++) {
    var h1Element = document.createElement('h1') //h1 tag
    h1Element.innerText = 'Hello World'
    h1Element.style.color = 'pink'
    document.body.append(h1Element)
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


for (var i = 0; i < powerPeople.length; i++) {
var h1Element = document.createElement('h1')
    h1Element.innerText = powerPeople[i]
    document.body.append(h1Element)
}

 