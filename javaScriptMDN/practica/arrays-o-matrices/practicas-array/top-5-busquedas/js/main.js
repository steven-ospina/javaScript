//
const list = document.querySelector('.list');
const searchInput = document.querySelector('.input');
const searchButton = document.querySelector('.search');

list.innerHTML = '';

let myHistory = [];

searchButton.onclick = () => {
    if(searchInput.value !== ''){
        myHistory.unshift(searchInput.value);
        list.innerHTML = '';
        for(let i = 0; i < myHistory.length;i++){
            let itemText = myHistory[i];
            let listITem = document.createElement('li');
            listITem.textContent = itemText;
            list.appendChild(listITem);
        }
        if(myHistory.length >= 5){
            myHistory.pop();
        }
        searchInput.value = '';
        searchInput.focus();
    }
}