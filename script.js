const input = document.getElementById('input');
const unordered = document.querySelector('.unordered');

function addTask(){
    if(input.value === ''){
        alert('You have to write Something');
    }
    else{
        let li = document.createElement('li');
        li.innerText = input.value;
        unordered.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';
    saveData();
}

unordered.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    saveData();
    }
},false)

function saveData(){
    localStorage.setItem('data', unordered.innerHTML);
}

function showTask(){
    unordered.innerHTML = localStorage.getItem('data');
}

showTask();