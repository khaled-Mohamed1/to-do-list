const input = document.querySelector("#add");
const timer = document.querySelector("#timer");
const btn = document.querySelector("#btn");
const li = document.querySelector('#tasks');




btn.onclick = function(){
    
    var txt = input.value;
    var time = timer.value;



    if(txt == '' || time == ''){
        alert('you must write something');
    }else{
        li.innerHTML += `
        <div class="task">
            <span>  ${txt} </span>
           <p class="timeout">Timeout:<span class="small">${mm} </span></p>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>`;
        input.value = '';
        timer.value = '';
    }

    var current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
            this.parentNode.remove();
        }
    }

    var tasks = document.querySelectorAll(".task");
    for(var i=0; i<tasks.length; i++){
        tasks[i].onclick = function(){
            this.classList.toggle('checked');
            endCount()
        }
    }

        let timeSecond = time * 60;

        const timeH = document.querySelector(".small");

        var mm = displayTime(timeSecond);

        const countDown = setInterval(() => {
        timeSecond--;
        displayTime(timeSecond);
        if (timeSecond == 0 || timeSecond < 1) {
            endCount();
            clearInterval(countDown);
        }
        }, 1000);

        function displayTime(second) {
        const min = Math.floor(second / 60);
        const sec = Math.floor(second % 60);
        timeH.innerHTML = `
        ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
        `;
        }

        const timeout = document.querySelector(".timeout");

        function endCount() {
        timeout.innerHTML = "Time out";
        }
};