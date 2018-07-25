var ul=document.getElementById("list")
var li;
var input;
var label

let addTask=document.getElementById('addTask');
addTask.addEventListener('click',(event)=>{
    event.preventDefault();
    if(document.getElementById('task').value){
li=document.createElement('li')
li.className='myCheck'
input=document.createElement('input')
input.type='checkbox'
label=document.createElement('label')
label.textContent=document.getElementById('task').value
document.getElementById('task').value=''
li.appendChild(input)
li.appendChild(label)
ul.insertBefore(li,ul.childNodes[0])
// document.querySelector('#list').appendChild(li).appendChild(input)
// document.querySelector('#list').appendChild(li).appendChild(label)

    }
})

let deleteTask=document.getElementById('deleteTask');
deleteTask.addEventListener('click',(event)=>{
    event.preventDefault()
    li=ul.children
    for(let i=0;i<li.length;i++){
       while(li[i]&&li[i].children[0].checked){
        ul.removeChild(li[i])
       }
    }
})

