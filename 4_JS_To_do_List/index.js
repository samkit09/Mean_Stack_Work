let todos = fetch("https://jsonplaceholder.typicode.com/todos");
var frag = document.createDocumentFragment();
todos.then(res => res.json())
  .then(d => {
    d.forEach(({title, completed}) => {
      const li = document.createElement("li");
      li.textContent = title;
      if (completed){
        li.classList.add("checked");
      }
      li.appendChild(createClose());
      frag.appendChild(li);
    });
    document.getElementById("list").appendChild(frag);
  }).catch((err) => alert("Error: ",err));

function createClose(){
  const span = document.createElement("span");
  span.className = "close";
  span.textContent = "\u00D7";
  span.onclick = function () {
    this.parentElement.style.display = "none";
  };
  return span
}

function addElem(){
  let title = document.getElementById("inp").value;
  console.log("Adding element", title);
  if (title.length > 0){
    const li = document.createElement("li");
    li.textContent = title;
    li.appendChild(createClose());
    frag.appendChild(li);
    document.getElementById("list").prepend(frag);
    console.log("Added");
  }
};

var list = document.querySelector('ul');
list.addEventListener('click', function(task) {
  if (task.target.tagName === 'LI') {
    task.target.classList.toggle('checked');
  }
}, false);