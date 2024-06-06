let todos = fetch("https://jsonplaceholder.typicode.com/todos");

todos.then(res => res.json())
  .then(d => console.log(d));

