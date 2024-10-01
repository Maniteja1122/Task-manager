// Write code related to Home page here 

let form = document.getElementById("form")
let Name = document.getElementById("name");
let description = document.getElementById("desc");
let startDate=document.getElementById("start")
let endDate=document.getElementById("end")
let priority = document.getElementById("priority")

let taskArr=JSON.parse(localStorage.getItem("task-list"))

if(taskArr==null){
    taskArr=[]
}
console.log(taskArr)

form.addEventListener("submit",(e)=>{
    e.preventDefault();
   let obj = {
    name:Name.value,
    desc:description.value,
    start:startDate.value,
    end:endDate.value,
    Priority:priority.value,
   }
  taskArr.push(obj)

  localStorage.setItem("task-list",JSON.stringify(taskArr))
  alert("Your Task is Adding to the Dashboard")
form.reset();
})