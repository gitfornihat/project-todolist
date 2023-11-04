let inputBox = document.getElementById('input-box');
let listContainer = document.getElementById('list-container');
let clear = document.getElementById('clear-input')
function addTask(){
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li)
    inputBox.value = "";
    clear.style.display = 'none'

}

function addTask() {
    if(inputBox.value.trim() !== ''){
    let li = document.createElement("li");
    listContainer.classList.add("task1")
    li.innerHTML = inputBox.value + "<span class='close'>\u00D7</span>";
    listContainer.appendChild(li);
    inputBox.value = "";
    

    let closeButtons = document.getElementsByClassName("close");
    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function() {
            let listItem = this.parentElement;
            listItem.style.display = "none";
        }
    }
}
}

function toggleClearButton() {
    const clearInput = document.getElementById('clear-input');
    clearInput.style.display = inputBox.value ? 'block' : 'none';
}

function clearInput() {
    inputBox.value = '';
    toggleClearButton();
}
let artanDeyer = true;

        function manageSorting() {
            let tasks = Array.from(listContainer.getElementsByTagName('li'));

            if (artanDeyer) {
                tasks.sort((a, b) => a.textContent.localeCompare(b.textContent));
                artanDeyer = false;
            } else {
                tasks.sort((a, b) => b.textContent.localeCompare(a.textContent));
                artanDeyer = true;
            }

            listContainer.innerHTML = '';
            tasks.forEach(task => listContainer.appendChild(task));

            let sortButton = document.querySelector('.sort-btn');
            sortButton.textContent = artanDeyer ? 'Sort A-Z' : 'Sort Z-A';
        }

        document.getElementById('input-box').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                addTask();
            }
        });
