
const input = document.querySelector("#add");
const  btn = document.querySelector("#btn");
const timer = document.querySelector("#timer");
var list = document.querySelector("#list");

// this function will allow us to add elements when we click the button
btn.onclick = function(){
    
    var txt = input.value;
        var time = timer.value;

    if(txt =='' || time == ''){
        alert('you must write something');
    }else{
        li = document.createElement('li');
        li.innerHTML = txt += `
            <p class="timeout">Timeout:<span class="small"> ${mm} </span></p>
            <button onclick="myFunc(this)"><i class="fas fa-trash-alt"></i></button>
        `;
        list.insertBefore(li,list.childNodes[0]);
        input.value = '';
        timer.value = '';
    }
    

        // time out code
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

        //this function will allow us to check the clicked elements

        list.onclick = function(ev){
            if(ev.target.tagName == 'LI'){
                ev.target.classList.toggle('checked');
                endCount();
            }
        };
};

//this function will delete

function myFunc(elem) {
  let li = elem.parentNode;
  li.parentNode.removeChild(li);
}

