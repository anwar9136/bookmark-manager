
let titleText = document.getElementById("title");
let urlText = document.getElementById("url");
let addBtn = document.getElementById("add-btn");

let searchText = document.getElementById("search");
let ul = document.getElementById("bookmark-list");

function addBookmark() {

    let newText = `${titleText.value}, ${urlText.value}`.trim();

    if (titleText.value.trim() === "" || urlText.value.trim() === "") {
        alert("Please fill in the both fields!");
        return;
    }
    let items = document.querySelectorAll("#bookmark-list li");
    for (const item of items) {
        const existingTitle = item.querySelector("span strong")?.textContent;
        const existingURL = item.querySelector("span a")?.textContent;
        if (existingTitle === titleText.value && existingURL === urlText.value) {
            alert("Bookmark already exists");
            return;
        }
    }




    let li = document.createElement('li');
    li.classList.add('bookmark-item');


    let span = document.createElement('span');
    span.innerHTML = `<strong>${titleText.value}</strong> - <a href="${urlText.value}" target="_blank">${urlText.value}</a>`;
    li.appendChild(span);



    

    let editBtn = document.createElement('button');
    editBtn.classList.add('edit-button');
    editBtn.textContent = "Edit";
    li.appendChild(editBtn)



    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-button');
    deleteBtn.textContent = "Delete";
    li.appendChild(deleteBtn)

    ul.appendChild(li);

    titleText.value = "";
    urlText.value = "";
    titleText.focus();

    deleteBtn.addEventListener("click", function () {
        li.remove()
    });

    editBtn.addEventListener("click", function () {
        let currentTitle = span.querySelector("strong").textContent;
        let currentUrl = span.querySelector("a").textContent;

        let newTitle = prompt("Enter new title", currentTitle);
        let newUrl = prompt("Enter new URL", currentUrl);

        if (newTitle && newUrl) {
            span.innerHTML = `<strong>${newTitle}</strong> - <a href="${newUrl}" target="_blank">${newUrl}</a>`;
        }
    });


}




addBtn.addEventListener("click", addBookmark);

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addBookmark();
    }
});

searchText.addEventListener("input",function(){
    const filter = searchText.value.toLowerCase();
    const items = document.querySelectorAll("#bookmark-list li");

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? "flex" : "none";
    });
})
