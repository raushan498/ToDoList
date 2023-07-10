const addButton = document.getElementById('button');

const text = document.getElementById('input');

const items = document.getElementById('list');

const search = document.getElementById('search');
let arr = [];
const last = document.getElementById("last");

let taskCount = 0;
const foot = document.getElementById('num');

addButton.addEventListener('click', function () {
    if (text.value.trim()) {
        const task = `<div class="task">
    <input type="checkbox" class="check">
    <span class="itemName">${text.value}</span>
    <span class="trashs"><i class="fa-solid fa-pen-to-square"></i></span>
    <span class="trash"><i class="fa-solid fa-trash-can del"></i></span>
    </div> `;


        arr.push(text.value);
        let para = document.createElement('div');
        para.innerHTML = task;
        items.appendChild(para);
        text.value = "";
        const taskItems = document.querySelectorAll('.task');

        search.addEventListener('input', function () {
            const letters = search.value.toLowerCase();
            taskItems.forEach(function (item) {
                const itemName = item.querySelector('.itemName').textContent.toLowerCase();
                if (itemName.includes(letters)) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            })
        })

        const deleteButton = document.querySelectorAll('.trash');
        deleteButton.forEach((button) => {
            button.onclick = () => {
                button.parentNode.remove();
                const itemIndex = Array.from(deleteButton).indexOf(button);
                arr.splice(itemIndex, 1);
                taskCount = arr.length;
                foot.innerText = taskCount;
            }
        })


        const editButton = document.querySelectorAll('.trashs');
        editButton.forEach((btn) => {
            btn.onclick = (e) => {
                let target = e.target;
                if (!(e.target.className == "trashs")) {
                    target = e.target.parentElement;
                }
                text.value = target.previousElementSibling?.innerText;
                target.parentNode.remove();
                arr.length--;
                foot.innerText=arr.length;
            }
        })

        taskCount = arr.length;


        foot.innerText = arr.length;
        

    }
})