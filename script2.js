var naruto = document.getElementById("naruto");
var fireball = document.getElementById("fireball");
var fireball2 = document.getElementById("fireball2");
var fireball3 = document.getElementById("fireball3");

function jump(){
    if(naruto.classList!="jump"){
        naruto.classList.add("jump");
        
        setTimeout(function (){
            naruto.classList.remove("jump");
        },300);
    }
}

let isAlive = setInterval(function(){
    let NarutoTop = parseInt(
        window.getComputedStyle(naruto).getPropertyValue("top")
    );
    let FireballLeft = parseInt(
        window.getComputedStyle(fireball).getPropertyValue("left")
    );
    let FireballLeft2 = parseInt(
        window.getComputedStyle(fireball2).getPropertyValue("left")
    );
    let FireballLeft3 = parseInt(
        window.getComputedStyle(fireball3).getPropertyValue("left")
    );
    if(FireballLeft<50 && FireballLeft>0 && NarutoTop!=150){
        alert("Game Over!!");
    }
    if(FireballLeft2<50 && FireballLeft2>0 && NarutoTop!=150){
        alert("Game Over!!");
    }
    if(FireballLeft3<50 && FireballLeft3>0 && NarutoTop!=150){
        alert("Game Over!!");
    }
},10);



document.addEventListener("keydown", function(event){
    jump();
})