document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
   let form = document.querySelector('form')
   form.addEventListener('submit', (e) => {
     e.preventDefault();
     makeDo(e.target.newTaskDescription.value)
     form.reset()
    
  }) 

  function makeDo(toDo){
  
  let p = document.createElement('p')
  let x = document.createElement('button')
  x.addEventListener('click', handleDelete)
  x.textContent = 'x'
  p.textContent = `${toDo}`
  p.appendChild(x)
  document.querySelector('#tasks').appendChild(p)
  }

  function handleDelete(e){
    e.target.parentNode.remove()
  }


});
