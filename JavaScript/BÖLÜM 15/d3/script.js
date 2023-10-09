let result;

ul = document.getElementById("task-list")

result = ul.children[3];
result = ul.firstElementChild;
result = ul.lastElementChild;

result = document.getElementById("title").parentElement;
result = document.querySelector(".task").nextElementSibling.nextElementSibling.previousElementSibling;


console.log(result)