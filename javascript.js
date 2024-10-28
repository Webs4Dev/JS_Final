function upDate(pic){
    document.getElementById("image").innerHTML = pic.alt;
    document.getElementById("image").style.backgroundImage = "url('"+pic.src+"')";
}

function unDo(){
    document.getElementById("image").innerHTML = "Hover/Tab over image";
    document.getElementById("image").style.backgroundImage = "url('"+ null +"')"
}

function tabIndex(){
    totalImages = document.querySelectorAll(".grid img")
    for(var i=0;i<totalImages.length;i++){

        console.log("image"+i);

        totalImages[i].tabIndex="0";
    }
}