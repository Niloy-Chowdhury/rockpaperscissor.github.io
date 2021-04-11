let comp = Math.floor((Math.random()*3 )+ 1);
let finalComp;
if(comp==1){
    finalComp = "Rock";
}
else if(comp==2){
    finalComp = "Paper";
}
else{
    finalComp = "Scissors";
}
document.getElementById("op1").addEventListener('click',function(){
    document.getElementById('computer').innerHTML = `Computer has chosen ${finalComp}`;
    document.getElementById("chose").innerHTML = "You've chosen ROCK";
    if(comp==1){
        document.getElementById("op1").style.display = 'none';
        document.getElementById("op2").style.display = 'none';
        document.getElementById("op3").style.display = 'none';
        document.getElementById("selection").innerHTML = 'It is a DRAW!!';
        document.getElementById("canvas").style.backgroundColor = 'yellow';
        document.getElementById("again").style.visibility = 'visible'; 
        document.getElementById("again2").style.visibility = 'visible'; 
    }
    else if(comp==2){
        document.getElementById("op1").style.display = 'none';
        document.getElementById("op2").style.display = 'none';
        document.getElementById("op3").style.display = 'none';
        document.getElementById("selection").innerHTML = 'You LOST The Game';
        document.getElementById("canvas").style.backgroundColor = 'red';
        document.getElementById("again").style.visibility = 'visible'; 
        document.getElementById("again2").style.visibility = 'visible'; 


    }
    else if(comp==3){
        document.getElementById("op1").style.display = 'none';
        document.getElementById("op2").style.display = 'none';
        document.getElementById("op3").style.display = 'none';
        document.getElementById("selection").innerHTML = 'You WON The Game';
        document.getElementById("canvas").style.backgroundColor = 'green';
        document.getElementById("again").style.visibility = 'visible'; 
        document.getElementById("again2").style.visibility = 'visible'; 


    }


})
document.getElementById("op2").addEventListener('click',function(){
    document.getElementById('computer').innerHTML = `Computer has chosen ${finalComp}`;
    document.getElementById("chose").innerHTML = "You've chosen PAPER";
    if(comp==1){
        document.getElementById("op1").style.display = 'none';
        document.getElementById("op2").style.display = 'none';
        document.getElementById("op3").style.display = 'none';
        document.getElementById("selection").innerHTML = 'You WON The Game';
        document.getElementById("canvas").style.backgroundColor = 'green';
        document.getElementById("again").style.visibility = 'visible'; 
        document.getElementById("again2").style.visibility = 'visible'; 


    }
    else if(comp==2){
        document.getElementById("op1").style.display = 'none';
        document.getElementById("op2").style.display = 'none';
        document.getElementById("op3").style.display = 'none';
        document.getElementById("selection").innerHTML = 'It is a DRAW!!';
        document.getElementById("canvas").style.backgroundColor = 'yellow';
        document.getElementById("again").style.visibility = 'visible'; 
        document.getElementById("again2").style.visibility = 'visible'; 



    }
    else if(comp==3){
        document.getElementById("op1").style.display = 'none';
        document.getElementById("op2").style.display = 'none';
        document.getElementById("op3").style.display = 'none';
        document.getElementById("selection").innerHTML = 'You LOST The Game';
        document.getElementById("canvas").style.backgroundColor = 'red';
        document.getElementById("again").style.visibility = 'visible'; 
        document.getElementById("again2").style.visibility = 'visible'; 


    }
})
document.getElementById("op3").addEventListener('click',function(){
    document.getElementById('computer').innerHTML = `Computer has chosen ${finalComp}`;
    document.getElementById("chose").innerHTML = "You've chosen SCISSORS";
    if(comp==1){
        document.getElementById("op1").style.display = 'none';
        document.getElementById("op2").style.display = 'none';
        document.getElementById("op3").style.display = 'none';
        document.getElementById("selection").innerHTML = 'You LOST The Game';
        document.getElementById("canvas").style.backgroundColor = 'red';
        document.getElementById("again").style.visibility = 'visible'; 
        document.getElementById("again2").style.visibility = 'visible'; 


    }
    else if(comp==2){
        document.getElementById("op1").style.display = 'none';
        document.getElementById("op2").style.display = 'none';
        document.getElementById("op3").style.display = 'none';
        document.getElementById("selection").innerHTML = 'You WON The Game';
        document.getElementById("canvas").style.backgroundColor = 'green';
        document.getElementById("again").style.visibility = 'visible'; 
        document.getElementById("again2").style.visibility = 'visible'; 


    }
    else if(comp==3){
        document.getElementById("op1").style.display = 'none';
        document.getElementById("op2").style.display = 'none';
        document.getElementById("op3").style.display = 'none';
        document.getElementById("selection").innerHTML = 'It is a DRAW!!';
        document.getElementById("canvas").style.backgroundColor = 'yellow';
        document.getElementById("again").style.visibility = 'visible'; 
        document.getElementById("again2").style.visibility = 'visible'; 


    }
})
document.getElementById("again").addEventListener('click',function(){
    location.reload();
})