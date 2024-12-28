document.getElementById("btn").addEventListener("click", function() {
    let div = document.getElementById("cosmetic-div");
    this.className = "rtt"
    let msg = document.createElement("p");
    msg.textContent = "You fell for my trap! Haha!";
    msg.style.color = "red";
    msg.classList.add("blink");
    
    div.appendChild(msg);
});