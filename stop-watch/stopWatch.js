const startBtn =
document.getElementById("start")

const stopBtn =
document.getElementById("stop")

const restartBtn =
document.getElementById("restart")

const stop_watch =
document.getElementById("stop_watch")

const contin = 
document.getElementById("continue")


let second =0,
    minute = 0,
    hour = 0,
    miliSecond=0

let mystopwatch;

startBtn.addEventListener("click",()=>{
    mystopwatch= setInterval(() => {
        miliSecond+=1
        if(miliSecond>499){
            second+=1
            miliSecond=0
            if(second>59){
                second=0
                minute+=1
                if(minute>59){
                    hour+=1
                    minute=0
                    if (hour>24) {
                        second=0
                        minute=0
                        hour=0
                        miliSecond=0
                    }
                }
            }
        }

        let miliSecondtext=miliSecond
        let secondtext=second
        let minutetext=minute
        let hourtext=hour

        secondtext=second<10 ? "0"+second:second;
        minutetext=minute<10 ? "0"+minute:minute;
        hourtext=hour<10 ? "0"+hour:hour;

        stop_watch .textContent=
        hourtext+":"+minutetext+":"+secondtext+":"+miliSecondtext
    }, 1);

})
stopBtn.addEventListener("click",()=>{
    clearInterval(mystopwatch)
})

contin.addEventListener("click",()=>{
    clearInterval(mystopwatch)
    mystopwatch= setInterval(() => {
        miliSecond+=1
        if(miliSecond>499){
            second+=1
            miliSecond=0
            if(second>59){
                second=0
                minute+=1
                if(minute>59){
                    hour+=1
                    minute=0
                    if (hour>24) {
                        second=0
                        minute=0
                        hour=0
                        miliSecond=0
                    }
                }
            }
        }

        let miliSecondtext=miliSecond
        let secondtext=second
        let minutetext=minute
        let hourtext=hour

        secondtext=second<10 ? "0"+second:second;
        minutetext=minute<10 ? "0"+minute:minute;
        hourtext=hour<10 ? "0"+hour:hour;

        stop_watch .textContent=
        hourtext+":"+minutetext+":"+secondtext+":"+miliSecondtext
    }, 1);
})

restartBtn.addEventListener("click",()=>{
    clearInterval(mystopwatch)
    second=0;
    minute=0;
    hour=0;
    miliSecond=0;
    mystopwatch= setInterval(() => {
        miliSecond+=1
        if(miliSecond>499){
            second+=1
            miliSecond=0
            if(second>59){
                minute+=1
                second=0
                if(minute>59){
                    hour+=1
                    minute=0
                    if (hour>24) {
                        second=0
                        minute=0
                        hour=0
                        miliSecond=0
                    }
                }
            }
        }
        
        let miliSecondtext=miliSecond
        let secondtext=second
        let minutetext=minute
        let hourtext=hour

        secondtext=second<10 ? "0"+second:second;
        minutetext=minute<10 ? "0"+minute:minute;
        hourtext=hour<10 ? "0"+hour:hour;

        stop_watch .textContent=
        hourtext+":"+minutetext+":"+secondtext+":"+miliSecondtext
    }, 1);
})