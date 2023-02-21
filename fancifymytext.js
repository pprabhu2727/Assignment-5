function sendAlert(){
    alert("Hello, world!");
}

function makeBig(){
    //2em is equivalent to 24pt font
    let t = document.getElementById("txtArea");
    t.style.fontSize = "2em";
}

function makeFancy(){
    let t = document.getElementById("txtArea");
    t.style.fontWeight = "bold";
    t.style.color = "blue";
    t.style.textDecoration = "underline";
}

function makeBoring(){
    let t = document.getElementById("txtArea");
    t.style.fontWeight = "normal";
    t.style.color = "black";
    t.style.textDecoration = "none";
}

function doMoo(){
    let t = document.getElementById("txtArea");
    t.style.textTransform = "uppercase";
    let sentenceArray = t.value.split(".");
    for (let i = 0; i<sentenceArray.length - 1; i++){
        sentenceArray[i] = sentenceArray[i] + "-Moo";
    }
    t.value = sentenceArray.join(".");

}


