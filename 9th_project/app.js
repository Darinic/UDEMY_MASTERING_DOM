let groceryListUL = document.querySelector('#grocery-list ul');

const search = document.querySelector('#search-item input');

search.addEventListener('keyup', (e) => {
    let text = e.target.value.toLowerCase();
    let groceries = groceryListUL.getElementsByTagName('li');
    let groceriesArray = Array.from(groceries);
    
    groceriesArray.forEach((grocery) => {
        let groceryName = grocery.firstElementChild.textContent;
        let groceryNameLower = groceryName.toLowerCase();
        if(groceryNameLower.indexOf(text) == -1) {
            grocery.style.display = 'none';
        } else {
            grocery.style.display = 'block';
        }
})
});

groceryListUL.addEventListener('click', remove);

function remove(e) {
    let target = e.target
    if (target.className == 'delete') {
        let li = e.target.parentElement;
        li.remove();
    }
};

let formAdd = document.querySelector('#add-item');

formAdd.addEventListener('submit', (e) => {
    e.preventDefault();
    let text = formAdd.querySelector('input[type="text"]').value;
    formAdd.querySelector('input').value = null;
   
    let li = document.createElement('li');
    let itemName = document.createElement('span');
    let deleteBtn = document.createElement('span');

    itemName.textContent = text;
    deleteBtn.textContent = 'delete';

    itemName.classList.add('item');
    deleteBtn.classList.add('delete');

    li.appendChild(itemName);
    li.appendChild(deleteBtn);

    groceryListUL.appendChild(li);
});

let checkbox = document.querySelector('#hide');

checkbox.addEventListener('change', (e) => {
    if (checkbox.checked) {
        groceryListUL.style.display = 'none';
    } else {
        groceryListUL.style.display = 'block';
    }
});

let headings = document.querySelector('.heading');
let panels = document.querySelectorAll('.panel');

let selectedPanel = null;

headings.addEventListener('click', (event) => {
    let target = event.target;
    let dataAttribute = event.target.dataset.clicked;

    if(target.tagName == "LI") {
        if(selectedPanel !=null) {
            selectedPanel.classList.toggle('selected');
        };
        selectedPanel = target;
        selectedPanel.classList.toggle('selected');
        
        let targetPanel = document.querySelector(dataAttribute);

        panels.forEach((panel) => {
            if(panel == targetPanel) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    }
});

let answerButton = document.getElementById('showAnswer');
answerButton.addEventListener('click', answer);

function answer() {
    document.getElementById('answer').classList.add('show');
    document.getElementById('answer').textContent= "AN IMPASTA!"
    answerButton.style.display = 'none';
}
