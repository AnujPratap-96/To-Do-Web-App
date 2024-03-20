const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const listContainer = document.getElementById('listContainer')


addBtn.addEventListener('click', ()=>{
    if(inputBox.value === ''){
        alert('You must write something!');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = `\u00d7`;
        li.appendChild(span)
    }
    inputBox.value = '';
    saveData();
});


listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('check')
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function displayData(){
    listContainer.innerHTML = localStorage.getItem('data');
}
displayData();