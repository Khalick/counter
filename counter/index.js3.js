let counter = 0;

document.getElementById("Decrease").onclick = function(){
    counter--;1;
    document.getElementById("label").innerHTML = counter;
}
document.getElementById("Increase").onclick = function(){
    counter++;1
    document.getElementById("label").innerHTML = counter;
}

    document.getElementById("Reset").onclick = function(){
        counter=0;
        document.getElementById("label").innerHTML = counter
    ;}
    