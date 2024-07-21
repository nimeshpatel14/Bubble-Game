let box = document.querySelector(".bubbleBox");
let start= document.querySelector(".start");
let score = 0;
let rnum;


function getNewHit() {
    rnum = Math.floor(Math.random() * 10)
    document.querySelector(".hit").textContent = rnum
}

function makeBubble() {
    let clutter = " ";
    for (let index = 1; index <= 120; index++) {
        let ran = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${ran}</div>`
    }
    box.innerHTML = clutter
}


function timer() {
    let timeval = 11
    let time = setInterval(() => {
        if (timeval > 0) {
            // timeval -=1   OR
            timeval--
            document.querySelector(".timer").textContent = timeval
        }
        else {
            clearInterval(time);
            // box.classList.remove("hide")
        
            box.innerHTML = 
            `<div class="restart ">
            <h2>GAME OVER</h2>
            <button class="restartBtn">Restart</button>
            </div>`

            document.querySelector(".restartBtn").addEventListener("click", () => {
                timer();
                makeBubble();
                getNewHit();
                score = 0
                document.querySelector('.score').textContent = score;
            })
        }
    }, 1000)
}

function hitBubble() {
    box.addEventListener("click", (e) => {
        let clickVal = Number(e.target.textContent)
        if (rnum === clickVal) {
            score += 10;
            document.querySelector('.score').textContent = score;
            getNewHit();
            makeBubble();
        }
    })

}


start.addEventListener("click", ()=>{
    start.classList.add("hide")
    box.classList.remove("hide")
    timer();
    getNewHit();
    hitBubble();
    makeBubble();
 
})
