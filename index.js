var randomVar = Math.floor(Math.random()*6)+1;
var randomVar2 = Math.floor(Math.random()*6)+1;
 
    if(randomVar===6){
        document.querySelector("img").setAttribute("src", "images/dice6.png");
    }
    else if(randomVar===5){
        document.querySelector("img").setAttribute("src", "images/dice5.png");
    }
    else if(randomVar===4){
        document.querySelector("img").setAttribute("src", "images/dice4.png");
    }
    else if(randomVar===3){
        document.querySelector("img").setAttribute("src", "images/dice3.png");
    }
    else if(randomVar===2){
        document.querySelector("img").setAttribute("src", "images/dice2.png");
    }
    else if(randomVar===1){
        document.querySelector("img").setAttribute("src", "images/dice1.png");
    }

    if(randomVar2===6){
        document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
    }
    else if(randomVar2===5){
        document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png");
    }
    else if(randomVar2===4){
        document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png");
    }
    else if(randomVar2===3){
        document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png");
    }
    else if(randomVar2===2){
        document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png");
    }
    else if(randomVar2===1){
        document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
    }

    if(randomVar> randomVar2){
        document.querySelector("h1").innerHTML="🚩Player1 wins";
    }
    else if(randomVar < randomVar2){
        document.querySelector("h1").innerHTML="Player2 wins🚩";
    }
    else{
        document.querySelector("h1").innerHTML="DRAW";
    } 

    document.querySelector("h1").classList.add("size");