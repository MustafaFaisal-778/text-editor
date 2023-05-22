
function colorChange(){
    dropDown=document.getElementById("drop")
    Colors=dropDown.value
    console.log(Colors)
    
    text.style.color=Colors;
}

function boldText(){
    dropDown=document.getElementById("fontSize")
    Colors=dropDown.value
    console.log(Colors)
    
    text.style.fontSize=Colors;
}

function Bold(){
    if(text.style.fontWeight==="bold"){
    text.style.fontWeight=('normal')
}
    else{
        text.style.fontWeight=('bold')

    }
    
}
function underLine(){
   
    if(text.style.textDecoration==="underline"){
        text.style.textDecoration=('none')

    }
    else{
        text.style.textDecoration=('underline')
    }
}

function italic(){
    if(text.style.fontStyle==="italic"){
        text.style.fontStyle=('normal')
    }
        else{
            text.style.fontStyle=('italic')

        }
    }

    function alignRight(){
    
    text.style.textAlign=('end')

    }
    function alignCenter(){

        text.style.textAlign=('center')
    }
    function alignLeft(){
        text.style.textAlign=('initial')
    }



    function clearStyles() {
        var element = document.getElementById("text");
        element.style.fontWeight = "normal";
        element.style.fontStyle = "normal";
        element.style.textDecoration = "none";
        element.style.textAlign = "left";
        element.style.color = "#000000";
       
        element.style.fontSize = "inherit";
    }