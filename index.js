let bombImgEl = document.getElementById("bombImg");
let countdownEl = document.getElementById("countdown");
let inputEl = document.getElementById("input");
let msgEl = document.getElementById("msg");

let timer = 10;
let timeCount = setInterval(()=>{

    timer-= 1;
    countdownEl.textContent = timer;

    if (timer == 0) {
      clearInterval(timeCount);
      bombImgEl.src = "7366339.jpg";
      msgEl.style.color = "red";
      msgEl.textContent = "Boom! Boom! Boom!";
    }

} , 1000);

function ondefuse(event){
 console.log();
    if (event.key === "Enter"){

      if (event.target.value === "defuse" && timer > 0) {
        clearInterval(timeCount);
        bombImgEl.src = "5939065.jpg";
        msgEl.style.color = "green";
        msgEl.textContent = "Hurray you save the city!!!";
      } 
      else if (event.target.value !== "defuse") {
        clearInterval(timeCount);
        bombImgEl.src = "7366339.jpg";
        msgEl.style.color = "red";
        msgEl.textContent = "Boom! Boom! Boom!";
      }
    }
    
     
}

inputEl.addEventListener("keyup",ondefuse);